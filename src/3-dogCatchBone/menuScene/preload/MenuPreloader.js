
import { AssetsConsts } from "..//consts/AssetsConsts";

/**
 * @param {Phaser.Scene} [gameScene]
 */
export const MenuPreloader = (gameScene) => {

    gameScene.load.image(AssetsConsts.settings.name, AssetsConsts.settings.asset);

};