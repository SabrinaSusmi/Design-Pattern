import { TextDecorator } from "./TextDecorator";

export class ItalicText extends TextDecorator {

    getModifiedText():string {
        return super.getModifiedText().italics();
    }
}