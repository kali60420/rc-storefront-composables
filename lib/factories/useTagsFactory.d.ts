import { UseTags, SearchResult, DefaultSearchParams } from '../interfaces';
export declare type UseTagsFactoryParams<TAG, TagsSearchParams extends DefaultSearchParams> = {
    search: (searchParams: TagsSearchParams) => Promise<SearchResult<TAG>>;
};
export declare function useTagsFactory<TAG, TAG_SEARCH_PARAMS>(factoryParams: UseTagsFactoryParams<TAG, TAG_SEARCH_PARAMS>): (cacheId: string) => UseTags<TAG>;
