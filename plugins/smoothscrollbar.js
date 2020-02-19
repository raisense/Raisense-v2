import Vue from "vue";
import SmoothScrollbar from "vue-smooth-scrollbar";

// SmoothScrollbar.use(options);

const options = {
  //   damping: 0.1,
  //   thumbMinSize: 20,
  //   renderByPixels: !("ontouchstart" in document),
  //   alwaysShowTracks: false,
  //   continuousScrolling: true
};

Vue.use(SmoothScrollbar);
