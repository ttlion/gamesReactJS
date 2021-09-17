import { AssetsConsts } from "../consts/AssetsConsts";
import { caracters } from "../state/GameStateVars";

/**
 * @param {Phaser.Scene} [gameScene]
 */
export const GameCreator = (gameScene) => {

    let map = gameScene.make.tilemap({ key: AssetsConsts.background.tilemap.name });
    let tileset = map.addTilesetImage(AssetsConsts.background.tileset.name, AssetsConsts.background.tileset.name);
    map.createLayer(AssetsConsts.background.tilemap.layers.layer1, tileset);

    caracters.dog.sprite = gameScene.physics.add.sprite(200, 200, AssetsConsts.dog.name, AssetsConsts.dog.action.idle.prefix + AssetsConsts.dog.action.idle.min + AssetsConsts.dog.action.idle.suffix);

    caracters.dog.sprite.setScale(AssetsConsts.dog.scale);
    caracters.dog.sprite.setSize(caracters.dog.sprite.width * 0.85, caracters.dog.sprite.height)
    caracters.dog.sprite.setCollideWorldBounds(true);

    createDogCaracterAnimations(gameScene);

}

/**
 * @param {Phaser.Scene} [gameScene]
 */
const createDogCaracterAnimations = (gameScene) => {

    // Idle 
    gameScene.anims.create({
        key: AssetsConsts.dog.action.idle.name,
        frames: gameScene.anims.generateFrameNames(AssetsConsts.dog.name, {
            start: AssetsConsts.dog.action.idle.min,
            end: AssetsConsts.dog.action.idle.max,
            prefix: AssetsConsts.dog.action.idle.prefix,
            suffix: AssetsConsts.dog.action.idle.suffix
        }),
        repeat: -1,
        frameRate: 12
    });


    // Walk 
    gameScene.anims.create({
        key: AssetsConsts.dog.action.walk.name,
        frames: gameScene.anims.generateFrameNames(AssetsConsts.dog.name, {
            start: AssetsConsts.dog.action.walk.min,
            end: AssetsConsts.dog.action.walk.max,
            prefix: AssetsConsts.dog.action.walk.prefix,
            suffix: AssetsConsts.dog.action.walk.suffix
        }),
        repeat: -1,
        frameRate: 12
    });

    // Run 
    gameScene.anims.create({
        key: AssetsConsts.dog.action.run.name,
        frames: gameScene.anims.generateFrameNames(AssetsConsts.dog.name, {
            start: AssetsConsts.dog.action.run.min,
            end: AssetsConsts.dog.action.run.max,
            prefix: AssetsConsts.dog.action.run.prefix,
            suffix: AssetsConsts.dog.action.run.suffix
        }),
        repeat: -1,
        frameRate: 12
    });


}