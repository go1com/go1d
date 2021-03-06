import * as TWEEN from "@tweenjs/tween.js";
import memoize = require("lodash/memoize");
import * as React from "react";
import * as smoothscroll from "smoothscroll-polyfill";
import View, { ViewProps } from "../View";
import ContainerDimensions from "./internals/ContainerDimensions";
import PureWrapper from "./internals/PureWrapper";

import foundations from "../../foundations";

import ButtonMinimal from "../ButtonMinimal";
import IconChevronLeft from "../Icons/ChevronLeft";
import IconChevronRight from "../Icons/ChevronRight";

export interface CustomControlsParam {
  scrollToIndex: (index: number) => void;
  currentSlide: number;
}

interface StandardProps extends ViewProps {
  children?: React.ReactNode;
  slidesToShow?: number;
  gutter?: number;
  clickScrollAmount?: number; // Number of slides that move on next click
  slideAnimationDuration?: number;

  customControlsRenderer?: (params: CustomControlsParam) => React.ReactElement;
  onSlideChange?: (currentSlide: number) => void;
  isIgnoreCache?: boolean;
}

interface BreakpointProps {
  sm?: StandardProps;
  md?: StandardProps;
  lg?: StandardProps;
}

export interface CarouselProps extends StandardProps {
  breakpoints?: BreakpointProps;
  title?: React.ReactNode;
  viewAllElement?: React.ReactNode;
  maxSlides?: number;
}

class Carousel extends React.Component<CarouselProps, any> {
  public static defaultProps = {
    slidesToShow: 1,
    gutter: 4,
    clickScrollAmount: 1,
  };
  public timer = null;
  public slideRefs = [];
  public sliderContainerRef = React.createRef();

  public state = {
    currentSlide: 0,
    finishedScrolling: false,
  };
  private slideTween;
  private ignoreScroll = false;
  private initialSliderOffset = null;

  private posX1 = 0;
  private posX2 = 0;
  private posInitial = 0;

  private getSlideItemsWithCache = this.props.isIgnoreCache
    ? this.getSlideItems
    : memoize(this.getSlideItems, (_, slidesToShow) => slidesToShow);

  private wrapperCSS = memoize(css => {
    return [
      {
        WebkitOverflowScrolling: "touch",
        overflowX: "auto",
        [foundations.breakpoints.lg]: {
          overflowX: "hidden",
        },
        "::-webkit-scrollbar": {
          width: 0,
          height: 0,
          background: "transparent",
        },
      },
      css,
    ];
  });

  public componentDidMount() {
    smoothscroll.polyfill();

    if (this.sliderContainerRef) {
      const Element: any = this.sliderContainerRef.current;
      Element.addEventListener(
        "scroll",
        () => {
          this.handleScrollTimer();
        },
        false
      );
      Element.addEventListener(
        "touchmove",
        () => {
          this.handleScrollTimer();
        },
        false
      );

      Element.addEventListener("mousedown", this.dragStart, false);
    }

    // changed default to true, so after mounting check who many children are in there and set to true if only one or none
    if (
      this.slideRefs.length <= 1 ||
      (this.slideRefs.length && this.slideRefs.slice(-1)[0].current)
    ) {
      this.setState({
        finishedScrolling: true,
      });
    }
  }

  public componentDidUpdate() {
    const { gutter, children } = this.props;
    const { finishedScrolling, currentSlide } = this.state;

    if (typeof children !== "undefined" && children !== null) {
      const Slider: any = this.sliderContainerRef.current;
      const SliderScroll = Slider.scrollLeft + foundations.spacing[gutter];
      const LastSlideCurrent = this.slideRefs.length
        ? this.slideRefs.slice(-1)[0].current
        : null;

      if (LastSlideCurrent) {
        const LastSlideRightEdge =
          LastSlideCurrent.offsetLeft + LastSlideCurrent.offsetWidth;

        if (
          LastSlideRightEdge <= SliderScroll + Slider.offsetWidth &&
          process.env.NODE_ENV !== "test"
        ) {
          // Test library does not suppport Element widths so this is always true even when it shouldnt be
          // Cannot scroll further right
          if (finishedScrolling === false) {
            this.setState({
              finishedScrolling: true,
            });
          }
        } else {
          if (finishedScrolling) {
            this.setState({
              finishedScrolling: false,
            });
          }
        }

        if (React.Children.toArray(children).length <= currentSlide) {
          // Incase some caroursel children update
          this.handleSlideChange(React.Children.toArray(children).length - 1);
        }
      }
    }
  }

  public componentWillUnmount() {
    if (this.sliderContainerRef) {
      const Element: any = this.sliderContainerRef.current;
      Element.removeEventListener("scroll", this.handleScrollTimer, false);
      Element.removeEventListener("touchstart", this.dragStart, false);
      Element.removeEventListener("touchmove", this.dragAction, false);
      Element.removeEventListener("touchend", this.dragEnd, false);

      Element.removeEventListener("mousedown", this.dragStart, false);
    }
  }

  public handleScrollTimer = () => {
    if (!this.ignoreScroll) {
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }

      if (this.slideTween) {
        this.slideTween.stop();
      }

      if (this.initialSliderOffset === null && this.sliderContainerRef) {
        const Slider: any = this.sliderContainerRef.current;
        this.initialSliderOffset = Slider.scrollLeft;
      }
      this.timer = setTimeout(this.handleScrollFinished, 150);
    } else {
      this.ignoreScroll = false;
    }
  };

  public handleScrollFinished = () => {
    if (this.slideRefs.length > 0) {
      // Set the CurrentSlide when the user is finished scrolling
      const Slider: any = this.sliderContainerRef.current;
      const SliderScroll = Slider.scrollLeft;

      let selected = this.slideRefs.findIndex(Ref => {
        const CurrentRef = Ref.current;

        if (
          SliderScroll >= CurrentRef.offsetLeft &&
          SliderScroll < CurrentRef.offsetLeft + CurrentRef.offsetWidth
        ) {
          return true;
        }

        return false;
      });

      if (selected < 0) {
        selected = 0;
      }

      const FinishedScrolling = this.hasReachedRightEdge();
      const CurrentSlide = this.slideRefs[selected].current;
      if (CurrentSlide.offsetLeft < SliderScroll) {
        // Snap to a start position
        if (
          CurrentSlide.offsetLeft + CurrentSlide.offsetWidth / 2 <
          SliderScroll
        ) {
          selected = selected + 1;
          this.scrollToIndex(selected)();
        } else {
          this.scrollToIndex(selected)();
        }
      }

      this.initialSliderOffset = null;

      this.setState({
        currentSlide: selected,
        finishedScrolling: FinishedScrolling,
      });
      this.handleSlideChange(selected);
    }
  };

  public scrollToIndex = index => () => {
    const { children, slideAnimationDuration } = this.props;
    let scrollIndex = index;

    if (scrollIndex < 0) {
      scrollIndex = 0;
    }

    if (scrollIndex >= React.Children.toArray(children).length - 1) {
      scrollIndex = React.Children.toArray(children).length - 1;
    }

    if (scrollIndex < React.Children.toArray(children).length) {
      const Slider: any = this.sliderContainerRef.current;
      const ElementOffset = this.slideRefs[scrollIndex].current.offsetLeft;

      const coords = { x: Slider.scrollLeft, y: 0 }; // Start at (0, 0)
      let allowAnimationPropogation = true;
      const animate = time => {
        if (allowAnimationPropogation) {
          requestAnimationFrame(animate);
        }
        TWEEN.update(time);
      };

      requestAnimationFrame(animate);

      this.slideTween = new TWEEN.Tween(coords)
        .to({ x: ElementOffset, y: 0 }, slideAnimationDuration)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          this.ignoreScroll = true;
          Slider.scrollTo(coords.x, 0);
        })
        .onComplete(() => {
          allowAnimationPropogation = false;
          this.checkFinishedScrolling();
        })
        .start();
    }
    this.handleSlideChange(index);
  };

  public render() {
    const {
      children,
      slidesToShow,
      gutter,
      maxSlides,
      viewAllElement,
      css,
      clickScrollAmount,
      slideAnimationDuration,
      title,
      size,
      containerMaxWidth,
      isIgnoreCache = false,
      ...props
    } = this.props;
    const { currentSlide, finishedScrolling } = this.state;
    const slideItems = this.getSlideItemsWithCache(
      children,
      slidesToShow,
      gutter,
      viewAllElement,
      maxSlides
    );
    const wrapperCSS = this.wrapperCSS(css);
    const numberOfSlides = React.Children.toArray(children).length;

    return (
      <View
        position="relative"
        flexGrow={1}
        maxWidth={containerMaxWidth}
        width="100%"
        {...props}
      >
        {this.props.customControlsRenderer ? (
          this.props.customControlsRenderer({
            scrollToIndex: (index: number) => this.scrollToIndex(index)(),
            currentSlide: this.state.currentSlide,
          })
        ) : (
          <View
            data-testid="HeaderCarousel"
            display="flex"
            flexDirection="row"
            marginBottom={5}
          >
            <View
              display="flex"
              flexGrow={1}
              alignItems="flex-start"
              justifyContent="center"
            >
              {title}
            </View>
            {numberOfSlides > slidesToShow && (
              <View
                display="flex"
                flexDirection="row"
                alignItems="flex-end"
                justifyContent="center"
              >
                {currentSlide > 0 ? (
                  <ButtonMinimal
                    onClick={this.scrollToIndex(
                      this.state.currentSlide - clickScrollAmount
                    )}
                    aria-label="Navigate Carousel Left"
                    data-testid="leftNavigationButton"
                    round={true}
                    icon={IconChevronLeft}
                  />
                ) : (
                  <ButtonMinimal
                    aria-label="Disabled Navigate Carousel Left"
                    data-testid="leftNavigationButton"
                    round={true}
                    icon={IconChevronLeft}
                    disabled={true}
                  />
                )}
                {!finishedScrolling &&
                currentSlide < this.slideRefs.length - 1 ? (
                  <ButtonMinimal
                    onClick={this.scrollToIndex(
                      this.state.currentSlide + clickScrollAmount
                    )}
                    aria-label="Navigate Carousel Right"
                    data-testid="rightNavigationButton"
                    round={true}
                    icon={IconChevronRight}
                    disabled={
                      finishedScrolling ||
                      currentSlide > this.slideRefs.length - 1
                    }
                  />
                ) : (
                  <ButtonMinimal
                    aria-label="Navigate Carousel Right"
                    data-testid="rightNavigationButton"
                    round={true}
                    icon={IconChevronRight}
                    disabled={true}
                  />
                )}
              </View>
            )}
          </View>
        )}
        <PureWrapper
          innerRef={this.sliderContainerRef}
          flexDirection="row"
          width="100%"
          data-testid="ScrollableCarousel"
          paddingLeft={2}
          paddingRight={2}
          marginLeft={-2}
          marginRight={-2}
          css={wrapperCSS}
        >
          {slideItems}
        </PureWrapper>
      </View>
    );
  }

  protected hasReachedRightEdge = () => {
    if (this.slideRefs.length > 0) {
      // Set the CurrentSlide when the user is finished scrolling
      const Slider: any = this.sliderContainerRef.current;
      const SliderScroll = Slider.scrollLeft;
      const SliderRightEdge = SliderScroll + Slider.offsetWidth;
      const LastSlide: any = this.slideRefs.slice(-1)[0];
      const LastSlideCurrent = LastSlide.current;

      if (!LastSlideCurrent) {
        return false;
      }

      const LastSlideRightEdge =
        LastSlideCurrent.offsetLeft + LastSlideCurrent.offsetWidth;

      if (LastSlideRightEdge <= SliderRightEdge) {
        // Cannot scroll further right
        return true;
      }
    }

    return false;
  };

  protected checkFinishedScrolling = () => {
    this.setState({
      finishedScrolling: this.hasReachedRightEdge(),
    });
  };

  private getSlideItems(
    children,
    slidesToShow,
    gutter,
    viewAllElement = null,
    maxSlides = null
  ) {
    return React.Children.map(children, (Slide, Index) => {
      if (maxSlides && Index + 1 > maxSlides) {
        return null;
      }
      let slideToShow = Slide;
      if (maxSlides && viewAllElement && Index + 1 === maxSlides) {
        slideToShow = viewAllElement;
      }
      const SlideRef = React.createRef();
      this.slideRefs[Index] = SlideRef;
      return (
        <View
          innerRef={SlideRef}
          width={`${100 / slidesToShow}%`}
          marginY={1}
          css={{
            paddingLeft: foundations.spacing[gutter] / 2,
            paddingRight: foundations.spacing[gutter] / 2,
            ":first-child": {
              paddingLeft: 0,
            },
            ":last-child": {
              paddingRight: 0,
            },
          }}
        >
          {slideToShow}
        </View>
      );
    });
  }

  private dragStart = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    const Slider: any = this.sliderContainerRef.current;
    this.posInitial = Slider.scrollLeft;
    if (e.type === "mousedown") {
      this.posX1 = (e as MouseEvent).clientX;
      document.onmouseup = this.dragEnd;
      document.onmousemove = this.dragAction;
    }

    if (e.type === "touchstart") {
      this.posX1 = (e as TouchEvent).touches[0].clientX;
    }
  };

  private dragAction = (e: MouseEvent | TouchEvent) => {
    if (e.type === "mousemove") {
      this.posX2 = this.posX1 - (e as MouseEvent).clientX;
    }

    if (e.type === "touchmove") {
      this.posX2 = this.posX1 - (e as TouchEvent).touches[0].clientX;
    }

    const Slider: any = this.sliderContainerRef.current;
    Slider.scrollTo(this.posInitial + this.posX2, 0);
  };

  private dragEnd = () => {
    this.handleScrollFinished();
    document.onmouseup = null;
    document.onmousemove = null;
  };

  private handleSlideChange = (slideNumber: number) => {
    this.setState({
      currentSlide: slideNumber,
    });

    if (this.props.onSlideChange) {
      this.props.onSlideChange(slideNumber);
    }
  };
}

const ExportCarousel: React.SFC<CarouselProps> = (props: CarouselProps) => (
  <ContainerDimensions>
    {Params => {
      let size = "lg";
      let containerMaxWidth = foundations.type.measure.wide;

      if (Params.width < 600) {
        size = "sm";
        containerMaxWidth = foundations.type.measure.narrow;
      }

      if (Params.width > 600 && Params.width < 960) {
        size = "md";
        containerMaxWidth = foundations.type.measure.normal;
      }

      const { breakpoints = {}, ...RemainingProps } = props;

      const PassProps = {
        // Use the props for the current size
        ...RemainingProps,
        ...(breakpoints[size] || {}),
        ...(Params.initiated === false
          ? {
              slidesToShow: 1,
            }
          : {}),
      };
      return (
        <Carousel
          size={size}
          containerMaxWidth={containerMaxWidth}
          {...PassProps}
        />
      );
    }}
  </ContainerDimensions>
);

ExportCarousel.displayName = "Carousel";

export default ExportCarousel;
