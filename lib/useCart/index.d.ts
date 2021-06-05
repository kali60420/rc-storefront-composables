import { CartMutationResult } from "./../interfaces";
import { Ref } from "@vue/composition-api";
import { Cart, FulfillmentMethod } from "@kali604/reactioncommerce-api/lib/types";
export declare const cart: Ref<Cart>;
export declare const token: Ref<string>;
export declare const shippingMethods: Ref<FulfillmentMethod[]>;
export declare const selectedFulfillmentMethod: Ref<string>;
export declare const setShippingAddress: (params: {
    cartId: string;
    cartToken: string;
    address: {
        firstName: string;
        lastName: string;
        streetName: string;
        streetNumber: string;
        phone: string;
        city: string;
        country: string;
        postalCode: string;
        company: string;
    };
}) => Promise<CartMutationResult<Cart>>;
export declare const updateShippingMethods: (params: {
    cartId: string;
    cartToken: string;
    fulfillmentGroupId: string;
}) => Promise<CartMutationResult<Cart>>;
export declare const setFulfillmentMethod: (params: {
    cartId: string;
    cartToken: string;
    fulfillmentGroupId: string;
    fulfillmentMethodId: string;
}) => Promise<CartMutationResult<Cart>>;
export declare const finalizeCart: () => Promise<void>;
declare const _default: (cacheId: string) => import("./../interfaces").UseCart<Cart>;
export default _default;
