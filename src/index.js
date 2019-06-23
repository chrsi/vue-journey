import { appHeader } from './appHeader.component.js';

const app = {
  el: "#app",
  data: {
    text: "Hello World"
  },
  components: {
    appHeader
  }
};

const vm = new Vue(app);