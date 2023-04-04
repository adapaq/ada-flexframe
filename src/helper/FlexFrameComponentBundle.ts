import {FlexFrameComponent} from "./FlexFrameComponent";


export interface FlexFrameComponentBundle {
    getName() : string;
    render(content : HTMLTemplateElement, output : HTMLDivElement, element : FlexFrameComponent) : void;
}
