

export function splitDocumentBySelector(document: HTMLElement, selector : string, callback : (element : HTMLElement = null, document: Document)=>any) : Document[] {
    let elements = document.querySelectorAll(selector);
    let documents = [];

    let startRange = document.createRange();
    startRange.setStart(document.body, 0);

    let currentDocument = document.cloneNode(true) as Document;

    return documents;
}