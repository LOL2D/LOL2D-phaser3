const gid = (id) => document.getElementById(id);
const gcl = (className) => document.getElementsByClassName(className)[0];
const qs = (str) => document.querySelector(str);

const hide = (ele) => (ele.style.display = 'none');
const show = (ele) => (ele.style.display = 'initial');

export const Dom = {
  utils: {
    hide,
    show,
  },
  elements: {
    loadingDiv: qs('#loading'),

    // menu scene
    // menuDiv: qs('#menu'),
    // btnPlay: qs('#menu button'),
  },
};
