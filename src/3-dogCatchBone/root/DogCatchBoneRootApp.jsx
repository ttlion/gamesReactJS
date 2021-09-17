import React from 'react';
import Phaser from 'phaser';
import { gameConfig } from './GameConfigs';

export class DogCatchBoneRootApp extends React.PureComponent {
    componentDidMount = () => new Phaser.Game(gameConfig);
    render = () => <></>;
}
