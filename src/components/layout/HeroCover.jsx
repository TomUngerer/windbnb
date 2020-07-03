import React from 'react'
import Video from "../../assets/video.mp4"
import Navbar from './Navbar';

const HeroCover = props => {
  return (
    <div className="wrap uk-background-norepeat uk-background-cover uk-background-center-center uk-cover-container uk-background-secondary">
      <video src={Video} loop="true" muted="true" playsInline="true" data-uk-cover data-uk-video />
      <div
        className="uk-height-viewport uk-position-z-index uk-position-relative"
        data-uk-height-viewport="min-height: 400"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Navbar />
        <div
          className="uk-flex uk-flex-center uk-flex-middle"
          data-uk-height-viewport="min-height: 400"
        >
          <div
            className="uk-container uk-container-small uk-flex-auto uk-text-center uk-light"
            data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300"
          >
            <h1
              className="uk-heading-primary animate uk-invisible"
              style={{ fontWeight: 700 }}
            >
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="uk-width-4-5@m uk-margin-auto animate uk-invisible">
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad,
                reiciendis maxime, facilis nam natus incidunt provident.
              </p>
            </div>
            <div
              className="uk-margin-medium-top animate uk-invisible"
              data-uk-margin
              data-uk-scrollspy-class="uk-animation-fade uk-invisible"
            >
              <a
                className="uk-button uk-button-default uk-button-large uk-width-2-3 uk-width-auto@s"
                title="Learn More"
              >
                LEARN MORE
              </a>
              <a
                className="uk-button uk-button-primary uk-button-large uk-width-2-3 uk-width-auto@s"
                title="Learn More"
              >
                TRY IT OUT
              </a>
            </div>
          </div>

          <div className="uk-position-bottom-center uk-position-small uk-light">
            <span
              className="uk-text-small uk-text-center"
              uk-scrollspy="cls:uk-animation-fade; delay: 1200"
            >
              <a href="#site-main" data-uk-scroll="offset: 80">
                <span data-uk-icon="icon: chevron-down; ratio: 3" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCover