import { AssetsConsts } from "../consts/AssetsConsts";

export const GamePreloader = (gameScene) => {

    gameScene.load.image(AssetsConsts.background.tileset.name, AssetsConsts.background.tileset.asset);
    gameScene.load.tilemapTiledJSON(AssetsConsts.background.tilemap.name, AssetsConsts.background.tilemap.asset);

};