import { IRootStore } from "../models/stores/root.store";
import { ConfigStore } from "./config.store";
import { DocumentStore } from "./document.store";
import { RegionsStore } from "./regions.store";
import { RequestService} from "./request.service";

export class RootStore implements IRootStore {

  public readonly document: any;
  public readonly config: any;
  public readonly requests: any;
  public readonly regions: any;

  constructor() {
    this.config = new ConfigStore();
    this.document = new DocumentStore(this);
    this.regions = new RegionsStore(this);
    this.requests = new RequestService(this);
  }

}
