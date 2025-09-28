import { makeAutoObservable } from "mobx";

export class CommonStore {
    isLoading = false;
    
    constructor() {
        makeAutoObservable(this)
    }

    setLoading(value: boolean) {
        this.isLoading = value
    }
}