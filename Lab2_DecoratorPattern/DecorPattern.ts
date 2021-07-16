// interface TextObject {
//     getModifiedText(): string;
// }

// class PlainText implements TextObject {
//     givenText: string;


//     constructor(text:string) {
//         this.givenText=text
//     }

//     getModifiedText(): string {
//         return this.givenText;
//     }
// }

// abstract class TextDecorator implements TextObject{
//     givenText:string;
//     text : TextObject;

//     constructor(text : TextObject) {
//         this.text=text;
//     }

//     getModifiedText(): string {
//         this.givenText=this.text.getModifiedText();
        
//         return this.givenText;
//     }
// }


// class BoldText extends TextDecorator {

//     getModifiedText():string {
//         return super.getModifiedText().bold();
//     }
// }


// class ItalicText extends TextDecorator {

//     getModifiedText():string {
//         return super.getModifiedText().italics();
//     }
// }


// class StrikeOutText extends TextDecorator {

//     getModifiedText():string {
//         return super.getModifiedText().strike();
//     }
// }