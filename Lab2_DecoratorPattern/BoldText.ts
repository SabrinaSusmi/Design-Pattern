import { TextDecorator } from "./TextDecorator";

export class BoldText extends TextDecorator {

    getModifiedText():string {
        return super.getModifiedText().bold();
    }
}