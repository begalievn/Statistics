import axios from "axios";
import { makeAutoObservable } from "mobx";

export class DocumentStore {

  public readonly rootStore: any;
  public documentList: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      rootStore: false,
    });
  }

  public async getDocByIdMobx(): Promise<void> {
    const token = "6947d3496cc81d2c43d9d34ad1152d4f28784fd503a80b3c0159b3fda4f78a56";
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      };
      const response = await axios.get(
        `https://api.opop.unionedev.ru/list/63284b21d786cc50bd7106f7`,
        config
      );
      console.warn(response);
    } catch (error) {
      console.warn(error);
    }
  }
}
