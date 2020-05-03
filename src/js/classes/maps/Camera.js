import { Global } from '../../stores/Global.js';
import { SAT } from '../../libs/SAT.js';

class Camera {
  constructor(config = {}) {
    const {
      target,
      position = (target && target.position.copy()) || new SAT.Vector(100, 100),
      follow = true,
      scale = 0.1,
      scaleTo = 0.8,
    } = config;

    this.target = target; // vật thể mà camera này theo dõi
    this.position = position; // vị trí
    this.follow = follow; // theo dõi hay không
    this.scale = scale; // scale khi khởi tạo camera
    this.scaleTo = scaleTo; // scale của camera
  }

  beginState() {
    // Bắt đầu translate - push
    Global.p5.push();
    Global.p5.translate(Global.p5.width * 0.5, Global.p5.height * 0.5);
    Global.p5.scale(this.scale);
    Global.p5.translate(-this.position.x, -this.position.y);
  }

  endState() {
    // Kết thúc việc translate - pop
    Global.p5.pop();
  }

  changeTarget({ target, animate }) {
    this.target = target;
    !animate && (this.position = target.position.copy());
  }

  // Chuyển đổi vị trí thực của vật thể (theo hệ toạ độ của mapgame) về vị trí trên màn hình (theo hệ toạ độ màn hình)
  worldToScreen(worldX, worldY) {
    let screenX = (worldX - this.position.x) * this.scale + width * 0.5;
    let screenY = (worldY - this.position.y) * this.scale + height * 0.5;
    return new SAT.Vector(screenX, screenY);
  }

  // Ngược lại worldToScreen
  screenToWorld(screenX, screenY) {
    let worldX = (screenX - width * 0.5) / this.scale + this.position.x;
    let worldY = (screenY - height * 0.5) / this.scale + this.position.y;
    return new SAT.Vector(worldX, worldY);
  }
}

export { Camera };
