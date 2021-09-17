import { caracters } from "../state/GameStateVars";
import { keyboard, speed } from "../state/GameStateVars";
import { AssetsConsts } from "../consts/AssetsConsts";

export const GameUpdator = () => {

    if (!keyboard.cursor) {
        return;
    }

    let animation = AssetsConsts.dog.action.idle.name;
    let speedX = 0, speedY = 0;
    let scaleX = AssetsConsts.dog.scale, scaleY = AssetsConsts.dog.scale

    caracters.dog.sprite.body.setOffset(0, 0);

    if (keyboard.cursor.down.isDown) {
        animation = AssetsConsts.dog.action.run.name;
        speedY = keyboard.cursor.shift.isDown ? 2 * speed.normalSpeed : speed.normalSpeed;
    }

    if (keyboard.cursor.up.isDown) {
        animation = AssetsConsts.dog.action.run.name;
        speedY = keyboard.cursor.shift.isDown ? -2 * speed.normalSpeed : -speed.normalSpeed;
    }

    if (keyboard.cursor.right.isDown) {
        animation = AssetsConsts.dog.action.run.name;
        speedX = keyboard.cursor.shift.isDown ? 2 * speed.normalSpeed : speed.normalSpeed;
    }

    if (keyboard.cursor.left.isDown) {
        animation = AssetsConsts.dog.action.run.name;
        speedX = keyboard.cursor.shift.isDown ? -2 * speed.normalSpeed : -speed.normalSpeed;
        scaleX = -scaleX;
        caracters.dog.sprite.body.setOffset(450, 0);
    }

    caracters.dog.sprite.anims.play(animation, true);
    caracters.dog.sprite.setVelocity(speedX, speedY);
    caracters.dog.sprite.setScale(scaleX, scaleY);


};