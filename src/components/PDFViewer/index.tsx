import * as pdfjsLib from "pdfjs-dist";
import * as React from "react";
import * as screenfull from "screenfull";
import { ButtonMinimal, Select, Text, View } from "../..";
import safeInvoke from "../../utils/safeInvoke";

const pdfjsViewer =
  // tslint:disable-next-line: no-var-requires
  typeof document !== "undefined" ? require("pdfjs-dist/web/pdf_viewer") : null;

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.worker.js";

const DEFAULT_MIN_SCALE = 0.25;
const DEFAULT_MAX_SCALE = 10.0;
const USE_ONLY_CSS_ZOOM = true;
const TEXT_LAYER_MODE = 0;
const MAX_IMAGE_SIZE = 1024 * 1024;
const CMAP_PACKED = true;
const DEFAULT_SCALE_DELTA = 1.1;
const DEFAULT_SCALE_VALUE = 1;
const PAGE_INIT_EVENT = "pagesinit";
const PAGE_CHANGE_EVENT = "pagechange";

export interface PDFViewerProps {
  url: string;
  scale?: number | string;
  minScale?: number;
  maxScale?: number;

  onDocumentComplete?: (pagesNumber: number) => void;
}
interface State {
  currentPageNumber: number;
  currentScaleValue: number;
  totalPage: number | null;
  title: string;
}
const pdfViewer = {
  display: "flex",
  flexDirection: "column",
  flexShrink: 1,
  flexGrow: 1,
  alignItems: "center",
};

export class PDFViewer extends React.Component<PDFViewerProps, State> {
  public static defaultProps: Partial<PDFViewerProps> = {
    scale: DEFAULT_SCALE_VALUE,
    minScale: DEFAULT_MIN_SCALE,
    maxScale: DEFAULT_MAX_SCALE,
  };

  get pagesCount() {
    return this.pdfDocument.numPages;
  }
  get page() {
    if (this.pdfViewer != null) {
      return this.pdfViewer.currentPageNumber;
    } else {
      return 1;
    }
  }
  get loadingBar() {
    const bar = new pdfjsViewer.ProgressBar("#loadingBar", {});
    return pdfjsLib.shadow(this, "loadingBar", bar);
  }
  public state: State = {
    currentPageNumber: 1,
    currentScaleValue: 100,
    totalPage: null,
    title: "",
  };
  public pdfLoadingTask: any;
  public pdfViewer: any;
  public pdfDocument: any;
  public pdfHistory: any;
  public pdfLinkService: any;
  public container: React.RefObject<HTMLElement>;
  public l10n: any;
  public error: any;
  public documentInfo: any;
  public metadata: any;
  public wrapper: React.RefObject<HTMLElement>;
  public sf = screenfull as screenfull.Screenfull;

  public constructor(props: PDFViewerProps) {
    super(props);

    this.pdfLoadingTask = null;
    this.pdfDocument = null;
    this.pdfViewer = {
      currentScaleValue: null,
    };
    this.pdfHistory = null;
    this.pdfLinkService = null;
    this.container = React.createRef();
    this.wrapper = React.createRef();
  }

  public componentDidMount() {
    const { url } = this.props;
    this.initUI();
    this.open({
      url,
    });
  }

  public componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.open({
        url: this.props.url,
      });
    }
  }

  public componentWillUnmount() {
    const container = this.container.current;
    container.removeEventListener(PAGE_INIT_EVENT, this.pagesInitEvent);
    container.removeEventListener(PAGE_CHANGE_EVENT, this.pageChangeEvent);

    this.pdfLoadingTask = null;
    this.pdfDocument = null;
    this.pdfViewer = null;
    this.pdfHistory = null;
    this.pdfLinkService = null;
  }

  public render() {
    return (
      <View
        width={1}
        height={1}
        flexShrink={1}
        flexGrow={1}
        overflow="hidden"
        position="relative"
        innerRef={this.wrapper}
        backgroundColor="soft"
        backgroundOpacity="feedback"
      >
        <View
          height={48}
          flexDirection="row"
          justifyContent={"space-between"}
          display={["none", "flex"]}
        >
          <View flexDirection="row" alignItems="center">
            <ButtonMinimal iconName="Plus" onClick={this.zoomIn} />
            <Select
              defaultValue={"100"}
              options={[50, 75, 100, 125, 150, 200, 300, 400].map(scale => ({
                value: `${scale}`,
                label: `${scale} %`,
              }))}
              onChange={this.onZoomChange}
            />
            <ButtonMinimal iconName="Minus" onClick={this.zoomOut} />
          </View>
          <View flexDirection="row" alignItems="center">
            <ButtonMinimal iconName="ChevronDown" onClick={this.pageAdd} />
            <Text fontWeight="semibold">{this.state.currentPageNumber}</Text>
            <Text fontWeight="semibold" color="subtle">
              &nbsp;/&nbsp;
            </Text>
            <Text fontWeight="semibold" color="subtle">
              {this.state.totalPage}
            </Text>
            <ButtonMinimal iconName="ChevronUp" onClick={this.pageDelete} />
          </View>
          <View flexDirection="row" alignItems="center">
            <ButtonMinimal
              iconName="Download"
              href={this.props.url}
              download={this.state.title}
            />
            <ButtonMinimal iconName="Expand" onClick={this.onExpand} />
          </View>
        </View>
        <View
          height={48}
          flexDirection="row"
          justifyContent={"Flex-end"}
          display={["flex", "none"]}
        >
          <ButtonMinimal
            iconName="Download"
            href={this.props.url}
            download={this.state.title}
          />
        </View>
        <View
          id="viewerContainer"
          innerRef={this.container}
          width={1}
          flexGrow={1}
          flexShrink={1}
          alignItems="center"
          overflow="auto"
          marginTop={8}
          css={{
            position: "absolute",
            top: 0,
            bottom: 0,
          }}
        >
          <View id="viewer" style={pdfViewer} />
        </View>
        <View id="loadingBar">
          <View className="progress" />
          <View className="glimmer" />
        </View>
      </View>
    );
  }

  private open(params: Record<"url", string>): Promise<void> {
    const url = params.url;
    this.setTitleUsingUrl(url);
    // Loading document.
    const loadingTask = pdfjsLib.getDocument({
      url,
      withCredentials: false,
      maxImageSize: MAX_IMAGE_SIZE,
      cMapPacked: CMAP_PACKED,
    });

    this.pdfLoadingTask = loadingTask;

    loadingTask.onProgress = progressData => {
      this.progress(progressData.loaded / progressData.total);
    };

    return loadingTask.promise.then(
      pdfDocument => {
        // Document loaded, specifying document for the viewer.
        this.pdfDocument = pdfDocument;
        this.pdfViewer.setDocument(pdfDocument);
        this.pdfLinkService.setDocument(pdfDocument);
        this.pdfHistory.initialize(pdfDocument.fingerprint);
        this.loadingBar.hide();
        this.setTitleUsingMetadata(pdfDocument);
      },
      exception => {
        const l10n = this.l10n;
        let loadingErrorMessage;

        if (exception instanceof pdfjsLib.InvalidPDFException) {
          // change error message also for other builds
          loadingErrorMessage = l10n.get(
            "invalid_file_error",
            null,
            "Invalid or corrupted PDF file."
          );
        } else if (exception instanceof pdfjsLib.MissingPDFException) {
          // special message for missing PDFs
          loadingErrorMessage = l10n.get(
            "missing_file_error",
            null,
            "Missing PDF file."
          );
        } else if (exception instanceof pdfjsLib.UnexpectedResponseException) {
          loadingErrorMessage = l10n.get(
            "unexpected_response_error",
            null,
            "Unexpected server response."
          );
        } else {
          loadingErrorMessage = l10n.get(
            "loading_error",
            null,
            "An error occurred while loading the PDF."
          );
        }

        loadingErrorMessage.then(msg => {
          // tslint:disable-next-line: no-console
          console.log(msg);
        });

        this.loadingBar.hide();
      }
    );
  }

  private setTitleUsingUrl(url) {
    let title = pdfjsLib.getFilenameFromUrl(url) || url;
    try {
      title = decodeURIComponent(title);
    } catch (e) {
      // decodeURIComponent may throw URIError,
      // fall back to using the unprocessed url in that case
    }
    this.setTitle(title);
  }

  private setTitleUsingMetadata(pdfDocument) {
    return pdfDocument.getMetadata().then(data => {
      const info = data.info;
      const metadata = data.metadata;
      this.documentInfo = info;
      this.metadata = metadata;

      // Provides some basic debug information
      // tslint:disable-next-line: no-console
      console.log(
        "PDF " +
          pdfDocument.fingerprint +
          " [" +
          info.PDFFormatVersion +
          " " +
          (info.Producer || "-").trim() +
          " / " +
          (info.Creator || "-").trim() +
          "]" +
          " (PDF.js: " +
          (pdfjsLib.version || "-") +
          ")"
      );

      let pdfTitle;
      if (metadata && metadata.has("dc:title")) {
        const title = metadata.get("dc:title");
        // Ghostscript sometimes returns 'Untitled', so prevent setting the
        // title to 'Untitled.
        if (title !== "Untitled") {
          pdfTitle = title;
        }
      }

      if (!pdfTitle && info && info.Title) {
        pdfTitle = info.Title;
      }

      if (pdfTitle) {
        this.setTitle(pdfTitle + " - " + document.title);
      }
      return { title: pdfTitle, documentInfo: info };
    });
  }

  private setTitle(title) {
    this.setState({ title });
  }

  private progress(level) {
    const percent = Math.round(level * 100);
    // Updating the bar if value increases.
    if (percent > this.loadingBar.percent || isNaN(percent)) {
      this.loadingBar.percent = percent;
    }
  }

  private initUI() {
    const linkService = new pdfjsViewer.PDFLinkService();
    this.pdfLinkService = linkService;

    this.l10n = pdfjsViewer.NullL10n;

    const container = this.container.current;
    this.pdfViewer = new pdfjsViewer.PDFViewer({
      container,
      linkService,
      l10n: this.l10n,
      useOnlyCssZoom: USE_ONLY_CSS_ZOOM,
      textLayerMode: TEXT_LAYER_MODE,
    });
    linkService.setViewer(pdfViewer);

    this.pdfHistory = new pdfjsViewer.PDFHistory({
      linkService,
    });
    linkService.setHistory(this.pdfHistory);
    container.addEventListener(PAGE_INIT_EVENT, this.pagesInitEvent);

    container.addEventListener(PAGE_CHANGE_EVENT, this.pageChangeEvent);
  }

  private pagesInitEvent = () => {
    const { scale, onDocumentComplete } = this.props;

    this.pdfViewer.currentScaleValue = scale;
    this.setState({ totalPage: this.pdfDocument.numPages });
    safeInvoke(onDocumentComplete, this.pdfDocument.numPages);
  };

  private pageChangeEvent = evt => {
    this.setState({ currentPageNumber: evt.pageNumber });
  };

  private zoomIn = ticks => {
    const { maxScale } = this.props;
    let newScale = this.pdfViewer.currentScale;
    do {
      newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.ceil(newScale * 10) / 10;
      newScale = Math.min(maxScale, newScale);
    } while (--ticks && newScale < maxScale);
    this.scalePDFViewer(newScale);
  };

  private zoomOut = ticks => {
    const { minScale } = this.props;
    let newScale = this.pdfViewer.currentScale;
    do {
      newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.floor(newScale * 10) / 10;
      newScale = Math.max(minScale, newScale);
    } while (--ticks && newScale > minScale);
    this.scalePDFViewer(newScale);
  };

  private pageAdd = () => {
    if (this.pdfViewer.currentPageNumber > this.pdfDocument.numPages) {
      return;
    }
    this.pdfViewer.currentPageNumber++;
  };

  private pageDelete = () => {
    if (this.pdfViewer.currentPageNumber < 1) {
      return;
    }
    this.pdfViewer.currentPageNumber--;
  };

  private onZoomChange = ({ target }) => {
    const scale = target.value / 100;
    this.scalePDFViewer(scale);
  };

  private scalePDFViewer = (scale: number) => {
    this.pdfViewer.currentScaleValue = scale;
    this.setState({
      currentScaleValue: Math.floor(scale * 100),
    });
  };

  private onExpand = () => {
    if (this.sf.enabled) {
      this.sf.toggle(this.wrapper.current);
    }
  };
}
