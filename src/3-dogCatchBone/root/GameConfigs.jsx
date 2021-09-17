
import Phaser from 'phaser';
import { GamePreloader } from '../game/preload/GamePreloader';
import { GameCreator } from '../game/create/GameCreator';

class DogCatchBoneGame extends Phaser.Scene {
    constructor() { super(gameNames.sceneName); }
    preload = () => GamePreloader(this);
    create = () => GameCreator(this);
}

export const gameNames = {
    rootAppName: 'DogCatchBoneRootApp',
    sceneName: 'DogCatchBoneScene'
}

export const gameConfig = {
    type: Phaser.AUTO,
    parent: gameNames.rootAppName,
    width: 816,
    height: 600,
    scene: DogCatchBoneGame
};
