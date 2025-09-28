import { makeAutoObservable } from "mobx";
import { ProductSortOptions } from "../enums/enums";


export class ProductCatalogStore {
    apiVersion = "v1";
    settings: ProductCatalogSettings = {
        q: "",
        category: "",
        min_price: 0,
        max_price: undefined,
        page: 1,
        page_size: 20
    }
    sort = ProductSortOptions.negative_created_at;
    filter_modal_open = false;

    constructor() {
        makeAutoObservable(this)
    }
    
    setCategory = (category: string) => {
        this.settings.category = category;
    }
    
    setFilterModalOpen = (filter_modal_open: boolean) => {
        this.filter_modal_open = filter_modal_open;
    }
    
    setMinPrice = (price: number) => {
        this.settings.min_price = price;
    }
    
    setMaxPrice = (price: number) => {
        this.settings.max_price = price;
    }
    
    setPage = (page: number) => {
        this.settings.page = page;
    }
    
    setPageSize = (size: number) => {
        this.settings.page_size = size;
    }

    setSearchString = (q: string) => {
        this.settings.q = q;
    }

    setProductFilterSettings = (settings: ProductCatalogSettings) => {
        this.settings = settings;
    }

    setSortOptions = (sort: ProductSortOptions) => {
        this.sort = sort;
    }

    setApiVersion = (version: string) => {
        this.apiVersion = version;
    }
}