import { Dom } from '../utils/Dom.js';
import { Menu } from './Menu.js';
import { AssetUrls } from '../stores/Config.js';
import { Global } from '../stores/Global.js';

const Loading = function () {
  const assetsCount = AssetUrls.length;
  let loadedCount;

  this.enter = function () {
    Dom.utils.show(Dom.elements.loadingDiv);

    loadedCount = 0;
    const checkFinish = () => {
      if (loadedCount === assetsCount) {
        setTimeout(() => {
          this.sceneManager.showScene(Menu);
        }, 1500);
      }
    };
    for (let url of AssetUrls) {
      const image = Global.p5.loadImage(
        url,
        // on success
        (e) => {
          loadedCount++;
          checkFinish();
        },
        // on error
        (error) => {
          loadedCount++;
          checkFinish();
        },
        // on loading
        (e) => {
          console.log(e);
        }
      );

      Global.assets[url] = image;
    }

    Global.p5.textAlign(Global.p5.CENTER, Global.p5.CENTER);
  };

  this.draw = function () {
    Global.p5.background(30);
    Global.p5.fill(255);
    Global.p5.noStroke();
    Global.p5.text(
      `${~~(loadedCount / assetsCount * 100)}%`,
      Global.p5.width / 2,
      Global.p5.height / 2
    );
  };

  this.exit = function () {
    Dom.utils.hide(Dom.elements.loadingDiv);
  };
};

export { Loading };
