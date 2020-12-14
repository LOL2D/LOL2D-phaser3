// https://leagueoflegends.fandom.com/wiki/List_of_champions
import { TYPES } from '../../helpers/constants';
import Player from '../Player';

export class Champion {
  constructor({ skin, stats, abilities }) {
    this.type = TYPES.Champion;

    this.skin = skin; // trang phục
    this.stats = stats; // chỉ số tướng cơ bản
    this.crowdControls = []; // các hiệu ứng khống chế đang được áp dụng lên tướng

    // chiêu thức của tướng
    this.abilities = abilities;

    // những trạng thái của tướng
    this.statuses = {
      basicAttack: true, // có thể đánh thường
      abilities: true, // có thể dùng chiêu
      moveable: true, // có thể di chuyển
      targetable: true, // có thể chọn làm mục tiêu
    };
  }
}

export default Champion;
