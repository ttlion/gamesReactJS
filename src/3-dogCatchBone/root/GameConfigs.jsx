
import Phaser from 'phaser';
import { GamePreloader } from '../gameScene/preload/GamePreloader';
import { GameCreator } from '../gameScene/create/GameCreator';
import { GameUpdator } from '../gameScene/update/GameUpdator';
import { MenuPreloader } from "../menuScene/preload/MenuPreloader";
import { MenuCreator } from "../menuScene/create/MenuCreator";
import { MenuUpdator } from "../menuScene/update/MenuUpdator";

class DogCatchBoneGameScene extends Phaser.Scene {
    constructor() { super(gameNames.gameSceneName); }
    preload = () => GamePreloader(this);
    create = () => GameCreator(this);
    update = () => GameUpdator(this);
}

class DogCatchBoneMenuScene extends Phaser.Scene {
    constructor() { super(gameNames.menuSceneName); }
    preload = () => MenuPreloader(this);
    create = () => MenuCreator(this);
    update = () => MenuUpdator(this);
}

export const gameNames = {
    rootAppName: 'DogCatchBoneRootApp',
    gameSceneName: 'DogCatchBoneGameScene',
    menuSceneName: 'DogCatchBoneMenuScene'
}

export const gameConfig = {
    type: Phaser.AUTO,
    parent: gameNames.rootAppName,
    width: 816,
    height: 600,
    scene: [DogCatchBoneGameScene, DogCatchBoneMenuScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
};
