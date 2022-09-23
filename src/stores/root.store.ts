import { IRootStore } from "../models/stores/root.store";
import { ConfigStore } from "./config.store";
import { DocumentStore } from "./document.store";

export class RootStore implements IRootStore   {

  public readonly document: any
  public readonly config: any;
  constructor() {
    this.config = new ConfigStore();
    this.document = new DocumentStore(this);
}
}