import { gameConfig } from "../../root/GameConfigs";
import { AssetsConsts } from "../consts/AssetsConsts";
import { caracters, score } from "../state/GameStateVars";

import { gameNames } from "../../root/GameConfigs";


/**
 * @param {Phaser.Scene} [gameScene]
 */
export const GameCreator = (gameScene) => {
    createBackground(gameScene);
    createDogCaracter(gameScene);
    createBone(gameScene);
    createBoneAndDogCollider(gameScene);
    createScoreIndicator(gameScene);
    gameScene.scene.launch(gameNames.menuSceneName);
}


/**
 * @param {Phaser.Scene} [gameScene]
 */
const createBackground = (gameScene) => {
    let map = gameScene.make.tilemap({ key: AssetsConsts.background.tilemap.name });
    let tileset = map.addTilesetImage(AssetsConsts.background.tileset.name, AssetsConsts.background.tileset.name);
    map.createLayer(AssetsConsts.background.tilemap.layers.layer1, tileset);
};



/**
 * @param {Phaser.Scene} [gameScene]
 */
const createDogCaracter = (gameScene) => {

    caracters.dog.sprite = gameScene.physics.add.sprite(200, 200, AssetsConsts.dog.name, AssetsConsts.dog.action.idle.prefix + AssetsConsts.dog.action.idle.min + AssetsConsts.dog.action.idle.suffix);

    caracters.dog.sprite.setScale(AssetsConsts.dog.scale);
    caracters.dog.sprite.setBodySize(caracters.dog.sprite.width * 0.85, caracters.dog.sprite.height, true)
    caracters.dog.sprite.setCollideWorldBounds(true);

    createDogCaracterAnimations(gameScene);

};



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

/**
 * @param {Phaser.Scene} [gameScene]
 */
const createBone = (gameScene) => {
    caracters.bone.sprite = gameScene.physics.add.sprite(400, 100, AssetsConsts.bone.name);
    caracters.bone.sprite.setScale(AssetsConsts.bone.scale);
    caracters.bone.sprite.setCollideWorldBounds(true);
};



/**
 * @param {Phaser.Scene} [gameScene]
 */
const createBoneAndDogCollider = (gameScene) => {
    caracters.dogCatchBoneAudio.audio = gameScene.sound.add(AssetsConsts.dogCatchBoneAudio.name)
    gameScene.physics.add.collider(caracters.dog.sprite, caracters.bone.sprite, handleDogAndBoneCollision, undefined, gameScene);
};

/**
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} [dog]
 * @param {Phaser.Types.Physics.Arcade.SpriteWithDynamicBody} [bone]
 */
const handleDogAndBoneCollision = (dog, bone) => {

    bone.setPosition(Math.random() * gameConfig.width, Math.random() * gameConfig.height);
    bone.setVelocity(0, 0);
    caracters.dogCatchBoneAudio.audio.play();

    score.value++;
    score.screenText.setText('Score: ' + score.value);

};


/**
 * @param {Phaser.Scene} [gameScene]
 */
const createScoreIndicator = (gameScene) => {
    score.value = 0;
    score.screenText = gameScene.add.text(16, 16, 'Score: ' + score.value, { fontSize: '32px', fill: '#000' });
};