import { PlainText } from "./PlainText";
import {BoldText} from "./BoldText";
import { ItalicText} from "./ItalicText";
import { StrikeOutText } from "./StrikeOutText";


const text = 'Hello World';

 const decoratedText = new StrikeOutText(new ItalicText(new BoldText(new PlainText(text))));

//const decoratedText = new PlainText(text);
console.log("Decorated :" + decoratedText);