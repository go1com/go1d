import * as TWEEN from "@tweenjs/tween.js";
import memoize = require("lodash/memoize");
import * as React from "react";
import * as smoothscroll from "smoothscroll-polyfill";
import View, { ViewProps } from "../View";
import ContainerDimensions from "./internals/ContainerDimensions";
import PureWrapper from "./internals/PureWrapper";

import foundations from "../../foundations";
import ButtonFilled from "../ButtonFilled";
interface StandardProps extends ViewProps {
  children?: React.ReactNode;
  slidesToShow?: number;
  gutter?: number;
  clickScrollAmount?: number; // Number of slides that move on next click
  slideAnimationDuration?: number;
}

interface BreakpointProps {
  sm?: StandardProps;
  md?: StandardProps;
  lg?: StandardProps;
}

export interface CarouselProps extends StandardProps {
  breakpoints?: BreakpointProps;
}

class Carousel extends React.Component<CarouselProps, any> {
  public static defaultProps = {
    slidesToShow: 1,
    gutter: 3,
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
  private slideItems = memoize((children, slidesToShow, gutter) =>
    React.Children.map(children, (Slide, Index) => {
      const SlideRef = React.createRef();
      this.slideRefs[Index] = SlideRef;
      return (
        <View
          innerRef={SlideRef}
          maxWidth={`${100 / slidesToShow}%`}
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
          {Slide}
        </View>
      );
    })
  );
  private wrapperCSS = memoize(css => {
    return {
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
      ...(css as object),
    };
  });

  public componentDidMount() {
    smoothscroll.polyfill();

    if (this.sliderContainerRef) {
      const Element: any = this.sliderContainerRef.current;
      Element.addEventListener("scroll", this.handleScrollTimer, false);
      Element.addEventListener("touchmove", this.handleScrollTimer, false);
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
      const LastSlideCurrent = this.slideRefs.slice(-1)[0].current;

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
          this.setState({
            currentSlide: React.Children.toArray(children).length - 1,
          });
        }
      }
    }
  }

  public componentWillUnmount() {
    if (this.sliderContainerRef) {
      const Element: any = this.sliderContainerRef.current;
      Element.removeEventListener("scroll", this.handleScrollTimer, false);
      Element.removeEventListener("touchmove", this.handleScrollTimer, false);
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

      let Selected = this.slideRefs.findIndex(Ref => {
        const CurrentRef = Ref.current;

        if (
          SliderScroll >= CurrentRef.offsetLeft &&
          SliderScroll < CurrentRef.offsetLeft + CurrentRef.offsetWidth
        ) {
          return true;
        }

        return false;
      });

      if (Selected < 0) {
        Selected = 0;
      }

      const FinishedScrolling = this.hasReachedRightEdge();
      const CurrentSlide = this.slideRefs[Selected].current;

      if (CurrentSlide.offsetLeft < SliderScroll && !FinishedScrolling) {
        // Snap to a start position
        if (
          CurrentSlide.offsetLeft + CurrentSlide.offsetWidth / 2 <
          SliderScroll
        ) {
          Selected = Selected + 1;
          this.scrollToIndex(Selected)();
        } else {
          this.scrollToIndex(Selected)();
        }
      }

      this.initialSliderOffset = null;

      this.setState({
        currentSlide: Selected,
        finishedScrolling: FinishedScrolling,
      });
    }
  };

  public scrollToIndex = Index => () => {
    const { children, slideAnimationDuration } = this.props;
    let ScrollIndex = Index;

    if (ScrollIndex < 0) {
      ScrollIndex = 0;
    }

    if (ScrollIndex >= React.Children.toArray(children).length - 1) {
      ScrollIndex = React.Children.toArray(children).length - 1;
    }

    if (ScrollIndex < React.Children.toArray(children).length) {
      const Slider: any = this.sliderContainerRef.current;
      const ElementOffset = this.slideRefs[ScrollIndex].current.offsetLeft;

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

    this.setState({
      currentSlide: Index,
    });
  };

  public render() {
    const {
      children,
      slidesToShow,
      gutter,
      css,
      clickScrollAmount,
      slideAnimationDuration,
      ...props
    } = this.props;
    const { currentSlide, finishedScrolling } = this.state;
    const slideItems = this.slideItems(children, slidesToShow, gutter);
    const wrapperCSS = this.wrapperCSS(css);
    return (
      <View position="relative" {...props}>
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
        {currentSlide > 0 && (
          <ButtonFilled
            onClick={this.scrollToIndex(
              this.state.currentSlide - clickScrollAmount
            )}
            aria-label="Navigate Carousel Left"
            data-testid="leftNavigationButton"
            iconName="ChevronLeft"
            position="absolute"
            round={true}
            justifyContent="center"
            css={{
              borderRadius: "50%",
              top: "calc(50% - 20px)",
              left: -20,
            }}
          />
        )}
        {!finishedScrolling &&
          currentSlide < this.slideRefs.length - 1 && (
            <ButtonFilled
              onClick={this.scrollToIndex(
                this.state.currentSlide + clickScrollAmount
              )}
              aria-label="Navigate Carousel Right"
              data-testid="rightNavigationButton"
              iconName="ChevronRight"
              position="absolute"
              justifyContent="center"
              round={true}
              css={{
                borderRadius: "50%",
                top: "calc(50% - 20px)",
                right: -20,
              }}
            />
          )}
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
}

const ExportCarousel: React.SFC<CarouselProps> = (props: CarouselProps) => (
  <ContainerDimensions>
    {Params => {
      let size = "lg";
      if (Params.width < 600) {
        size = "sm";
      }

      if (Params.width > 600 && Params.width < 1100) {
        size = "md";
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

      return <Carousel size={size} {...PassProps} />;
    }}
  </ContainerDimensions>
);

ExportCarousel.displayName = "Carousel";

export default ExportCarousel;
