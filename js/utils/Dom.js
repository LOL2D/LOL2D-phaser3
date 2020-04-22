const gid = (id) => document.getElementById(id);
const gcl = (className) => document.getElementsByClassName(className)[0];

export default {
  loadingDiv: gid('loading'),
};
