import { TextDecorator } from "./TextDecorator";

export class StrikeOutText extends TextDecorator {

    getModifiedText():string {
        return super.getModifiedText().strike();
    }
}