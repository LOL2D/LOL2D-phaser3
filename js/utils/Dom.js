const gid = (id) => document.getElementById(id);
const gcl = (className) => document.getElementsByClassName(className)[0];

const hide = (ele) => (ele.style.display = 'none');
const show = (ele) => (ele.style.display = 'initial');

export default {
  hide,
  show,
  loadingDiv: gid('loading'),
};
