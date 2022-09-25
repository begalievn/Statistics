import {makeAutoObservable} from "mobx";
import axios, { AxiosRequestHeaders } from 'axios';
import {IRootStore} from "../models/stores/root.store";
import {IRequestOptions} from "../models/requests/http.models";


export class RequestService {
    public readonly rootStore: IRootStore;

    constructor(rootStore: IRootStore) {
        makeAutoObservable(this, {
            rootStore: false
        })

        this.rootStore = rootStore;
    }

    public async text(options: IRequestOptions): Promise<string> {
        const { route, token, ...axiosOptions } = options;

        const headers: AxiosRequestHeaders = {
            ...options.headers,
        }

        if(typeof options.token === 'string') {
            headers.authorization = options.token;
        }

        const response = await axios({
            ...axiosOptions,
            url: options.route,
            headers,
            responseType: 'text',
            transformResponse: (res) => res,
        })

        if(typeof response.data !== 'string') {
            throw new Error('Invalid response data');
        }

        return response.data;
    }

    public async json<TResponse>(options: IRequestOptions): Promise<TResponse> {
        const response = await this.text(options);
        const data: TResponse = JSON.parse(response);
        return data;
    }
}
