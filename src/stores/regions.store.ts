import {makeAutoObservable, runInAction} from "mobx";

export class RegionsStore {

  public readonly rootStore: any;
  public regionsData: any;

  constructor(rootStore: any) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      rootStore: false
    });
  }

  public async getRegionsData(query = {}): Promise<void> {
    const token = "3bf61385113b6a85167a3e7c736fcb2da045fa99a61ad23042b427cff37af7b2";
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`
        }
      };

      let route = `/stat/by-regions`;
      if (query?.regionId) {
        route += `?regionId=${query?.regionId}`;
      }

      const response = await this.rootStore.requests.json({
        method: "GET",
        baseURL: 'https://api.opop.unionedev.ru',
        route,
        token
      });

      console.log("response", response);


      runInAction(() => {
        this.dataFormatter(response);
      });
    }
    catch (err) {
      console.warn(err);
    }
  }

  private dataFormatter(data) {
    // eslint-disable-next-line no-restricted-syntax
    const resData = [];
    data.forEach((item) => {
      item?.opops.map((opops) => {
        const dataItem = {};
        dataItem.key = opops.id;
        dataItem.nameOPOP = opops.name;
        dataItem.downloadsCount = opops.count;
        opops.modules.forEach((module) => {
          dataItem[module.name] = module.count;
        });
        resData.push(dataItem);
      });
    });

    console.log("resData", resData);
    this.regionsData = resData;
  }

}
