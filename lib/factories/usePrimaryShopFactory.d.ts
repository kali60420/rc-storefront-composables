import { UsePrimaryShopId, SingleResult } from './../interfaces';
export declare type UsePrimaryShopIdFactoryParams<PRIMARYSHOPID> = {
    getPrimaryShopId: () => Promise<SingleResult<PRIMARYSHOPID>>;
};
export declare function usePrimaryShopIdFactory<PRIMARYSHOPID>(factoryParams: UsePrimaryShopIdFactoryParams<PRIMARYSHOPID>): (cacheId: string) => UsePrimaryShopId<PRIMARYSHOPID>;
