
export let flexFrameComponentsById : FlexFrameComponent[] = []
export let flexFrameComponentId : number = 0;

export abstract class FlexFrameComponent extends HTMLElement {

    protected originalContent : HTMLTemplateElement
    protected output : HTMLElement = document.createElement("div");
    protected componentId : number = flexFrameComponentId++;

    /**
     * This method is called when the component is rendered
     * or the size of the window changes
     */
    abstract render() : void;

    /**
     * This method is called when the component is added to the DOM
     */
    connectedCallback() {
        this.originalContent = new HTMLTemplateElement();
        this.originalContent.innerHTML = this.innerHTML;
        this.innerHTML = "";
        this.append(this.originalContent);
        this.append(this.output);
        flexFrameComponentsById[this.componentId] = this;
    }

    /**
     * This method is called when the component is removed from the DOM
     */
    disconnectedCallback() {
        delete flexFrameComponentsById[this.componentId];
    }
}
