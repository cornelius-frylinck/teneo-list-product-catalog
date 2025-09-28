import { createContext } from "react";
import { CommonStore } from "./commonStore";
import { ProductCatalogStore } from "./productCatalogStore";

interface Store {
    commonStore: CommonStore,
    productCatalog: ProductCatalogStore
}

export const store: Store = {
    commonStore: new CommonStore(),
    productCatalog: new ProductCatalogStore()
}

export const StoreContext = createContext(store);