import { UseCatalogItem, SingleResult } from "./../interfaces";
export declare type UseCatalogItemFactoryParams<PRODUCT, CatalogItemSearchParams, SearchCatalogItemParams> = {
    catalogItem: (searchParams: CatalogItemSearchParams) => Promise<SingleResult<PRODUCT>>;
    search: (searchParams: SearchCatalogItemParams) => Promise<SingleResult<PRODUCT>>;
};
export declare function useCatalogItemFactory<PRODUCT, PRODUCT_SEARCH_PARAMS, SEARCH_CATALOGITEM_PARAMS>(factoryParams: UseCatalogItemFactoryParams<PRODUCT, PRODUCT_SEARCH_PARAMS, SEARCH_CATALOGITEM_PARAMS>): (cacheId: string) => UseCatalogItem<PRODUCT>;
