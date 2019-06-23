import appHeader from './appHeader.vue';

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