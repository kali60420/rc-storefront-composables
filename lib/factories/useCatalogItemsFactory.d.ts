import { UseCatalogItems, SearchResult } from './../interfaces';
export declare type UseCatalogItemsFactoryParams<CATALOGITEM, CatalogItemsSearchParams> = {
    search: (searchParams: CatalogItemsSearchParams) => Promise<SearchResult<CATALOGITEM>>;
};
export declare function useCatalogItemsFactory<CATALOGITEM, CATALOGITEMS_SEARCH_PARAMS>(factoryParams: UseCatalogItemsFactoryParams<CATALOGITEM, CATALOGITEMS_SEARCH_PARAMS>): (cacheId: string) => UseCatalogItems<CATALOGITEM>;
