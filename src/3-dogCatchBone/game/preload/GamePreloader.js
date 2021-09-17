import { AssetsConsts } from "../consts/AssetsConsts";
import { keyboard } from "../state/GameStateVars";

/**
 * @param {Phaser.Scene} [gameScene]
 */
export const GamePreloader = (gameScene) => {

    gameScene.load.image(AssetsConsts.background.tileset.name, AssetsConsts.background.tileset.asset);
    gameScene.load.tilemapTiledJSON(AssetsConsts.background.tilemap.name, AssetsConsts.background.tilemap.asset);
    gameScene.load.atlas(AssetsConsts.dog.name, AssetsConsts.dog.asset.png, AssetsConsts.dog.asset.json);

    keyboard.cursor = gameScene.input.keyboard.createCursorKeys();

};