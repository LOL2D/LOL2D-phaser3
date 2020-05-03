import { Global } from '../../stores/Global.js';

class MapContainer {
  constructor(config = {}) {
    const {
      width = MapContainer.default.width,
      height = MapContainer.default.height,
      gridSize = MapContainer.default.gridSize,
      staticObjects = [],
    } = config;

    this.width = width;
    this.height = height;
    this.gridSize = gridSize;

    this.staticObjects = staticObjects;
  }

  drawEdge() {
    // Vẽ biên
    // dùng 4 đỉnh đê vẽ hình chữ nhât
    let topleft = { x: 0, y: 0 }; // đỉnh trên trái
    let topright = { x: this.width, y: 0 }; // đỉnh trên phải
    let botleft = { x: 0, y: this.height }; // đỉnh dưới trái
    let botright = { x: this.width, y: this.height }; // đỉnh dưới phải

    Global.p5.stroke(255);
    Global.p5.strokeWeight(3);

    // Ve duong thang qua cac dinh
    Global.p5.line(topleft.x, topleft.y, topright.x, topright.y);
    Global.p5.line(topright.x, topright.y, botright.x, botright.y);
    Global.p5.line(botright.x, botright.y, botleft.x, botright.y);
    Global.p5.line(botleft.x, botleft.y, topleft.x, topleft.y);
  }

  drawGrid() {
    Global.p5.stroke(100, 70);
    Global.p5.strokeWeight(3);
    
    let { x: left, y: top } = Global.camera.screenToWorld(0, 0);
    let { x: right, y: bottom } = Global.camera.screenToWorld(Global.p5.width, Global.p5.height);
    
    let delta = 1;
    for (let x = left; x < right; x += delta) {
      if (floor(x) % this.gridSize == 0) {
        /* while we found value of x that (x % this.gridSize == 0)
                => delta will equal this.gridSize => shorter loop */
        delta = this.gridSize;
        Global.p5.line(x, top, x, bottom);
      }
    }

    // do the same thing to y axis
    delta = 1;
    for (let y = top; y < bottom; y += delta) {
      if (floor(y) % this.gridSize == 0) {
        delta = this.gridSize;
        Global.p5.line(left, y, right, y);
      }
    }
  }
}

MapContainer.default = {
  width: 2000,
  height: 2000,
  gridSize: 200,
};

export { MapContainer };
