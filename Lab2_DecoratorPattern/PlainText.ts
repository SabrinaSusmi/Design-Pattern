import { Text } from "./Text";

export class PlainText implements Text{
    
    s_text: string;


    constructor(text:string) {
        this.s_text=text
    }

    getModifiedText(): any {
        return this.s_text;
    }
}