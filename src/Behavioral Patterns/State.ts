// Very useful for handling object which can be moved to different statuses.
// The main idea is to separate handling logic of each step.

class DocumentItem {
  public text: string;
  private state: DocumentItemState;

  constructor() {
    this.setState(new DraftDocumentItemState());
  }

  getState() {
    return this.state;
  }

  setState(state: DocumentItemState) {
    this.state = state;
    this.state.setContext(this);   // ?????, ??? ?????? ??????
  }

  publishDoc() {
    this.state.publish();
  }

  deleteDoc() {
    this.state.delete();
  }
}

abstract class DocumentItemState {
  public name: string;
  public item: DocumentItem;

  public setContext(item: DocumentItem) {
    this.item = item;
  }

  public abstract publish(): void;

  public abstract delete(): void;
}

class PublishedDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = "PublishedDocument";
  }

  publish(): void {
    console.error("[Can not Publish => Publish!!!]",);
  }

  delete(): void {
    console.log("[Published => Draft]",);
    this.item.setState(new DraftDocumentItemState());
  }

}

class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = "DraftDocument";
  }

  publish(): void {
    console.log("[Draft => Publish]",);
    this.item.setState(new PublishedDocumentItemState());
  }

  delete(): void {
    console.log("[Draft => Deleted]",);
  }
}

const item = new DocumentItem();
item.text = "My text!";
console.log("[Start state: ]", item.getState());
item.publishDoc();
console.log("[Publish state: ]", item.getState());
item.deleteDoc();
console.log("[Delete state: ]", item.getState());

