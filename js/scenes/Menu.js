const Menu = function (_) {
  this.enter = function () {
    console.log('Menu');
  };

  this.draw = function () {
    _.background(30);
  };
};

export { Menu };
