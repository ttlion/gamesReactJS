import { AssetsConsts } from "../consts/AssetsConsts";

export const GameCreator = (gameScene) => {

    let map = gameScene.make.tilemap({ key: AssetsConsts.background.tilemap.name });
    let tileset = map.addTilesetImage(AssetsConsts.background.tileset.name, AssetsConsts.background.tileset.name);
    map.createStaticLayer(AssetsConsts.background.tilemap.layers.layer1, tileset);

}