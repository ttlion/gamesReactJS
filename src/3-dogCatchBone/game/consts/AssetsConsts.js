
export const AssetsConsts = {
    background: {
        tileset: {
            name: 'background-tileSet',
            asset: 'phaserAssets/3-dogCatchBone/background/background-tileSet.png'
        },
        tilemap: {
            name: 'background-tileMap',
            asset: 'phaserAssets/3-dogCatchBone/background/background-tileMap.json',
            layers: {
                layer1: 'Background-Layer1'
            }
        }
    },
    dog: {
        name: 'dog',
        asset: {
            png: 'phaserAssets/3-dogCatchBone/dog/dog.png',
            json: 'phaserAssets/3-dogCatchBone/dog/dog.json'
        },
        scale: 0.25,
        action: {
            idle: {
                name: 'dog-idle',
                prefix: 'Idle (',
                suffix: ').png',
                min: 1,
                max: 10
            },
            walk: {
                name: 'dog-walk',
                prefix: 'Walk (',
                suffix: ').png',
                min: 1,
                max: 10
            },
            run: {
                name: 'dog-run',
                prefix: 'Run (',
                suffix: ').png',
                min: 1,
                max: 10
            }
        }
    },
    bone: {
        name: 'bone',
        asset: 'phaserAssets/3-dogCatchBone/bone/bone.png',
        scale: 0.35,
    },

    dogCatchBoneAudio: {
        name: 'dogCatchBoneAudio',
        asset: 'phaserAssets/3-dogCatchBone/sounds/dogEatsBoneSound.wav'
    }

}

