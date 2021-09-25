import { AssetsConsts } from "..//consts/AssetsConsts";

/**
 * @param {Phaser.Scene} [gameScene]
 */
export const MenuCreator = (gameScene) => {
    let aaa = gameScene.physics.add.sprite(9000, 0, AssetsConsts.settings.name);
    aaa.setScale(AssetsConsts.settings.scale);
    aaa.setCollideWorldBounds(true);
}

