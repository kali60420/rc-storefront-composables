import { Ref } from "@vue/composition-api";
import { UseUser, SingleResult, DefaultSearchParams, UserMutationResult, SearchResult } from "./../interfaces";
export declare type UseUserFactoryParams<USER, USERORDER, UserParams extends DefaultSearchParams, UpdateUserParams extends DefaultSearchParams, UserOrdersParams extends DefaultSearchParams, AddAddressBookEntryParams extends DefaultSearchParams, UpdateAddressBookEntryParams extends DefaultSearchParams> = {
    user: Ref<USER>;
    userorders: Ref<USERORDER[]>;
    loadAccount: (searchParams: UserParams) => Promise<SingleResult<USER>>;
    updateAccount: (searchParams: UpdateUserParams) => Promise<UserMutationResult<USER>>;
    getOrders: (searchParams: UserOrdersParams) => Promise<SearchResult<USERORDER>>;
    addAddressBookEntry: (searchParams: AddAddressBookEntryParams) => Promise<UserMutationResult<USER>>;
    updateAddressBookEntry: (searchParams: UpdateAddressBookEntryParams) => Promise<UserMutationResult<USER>>;
};
export declare function useUserFactory<USER, USERORDER, USER_PARAMS, UPDATE_USER_PARAMS, USER_ORDERS_PARAMS, ADD_ADDRESSBOOK_ENTRY_PARAMS, UPDATE_ADDRESSBOOK_ENTRY_PARAMS>(factoryParams: UseUserFactoryParams<USER, USERORDER, USER_PARAMS, UPDATE_USER_PARAMS, USER_ORDERS_PARAMS, ADD_ADDRESSBOOK_ENTRY_PARAMS, UPDATE_ADDRESSBOOK_ENTRY_PARAMS>): (cacheId: string) => UseUser<USER>;
