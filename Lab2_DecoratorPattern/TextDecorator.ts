import { Text } from "./Text";

export abstract class TextDecorator implements Text{
    text : Text;

    constructor(text : Text) {
        this.text=text;
    }

    getModifiedText(): string {
        return this.text.getModifiedText();;
    }
}