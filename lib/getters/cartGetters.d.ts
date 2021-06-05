import { AgnosticPrice, AgnosticTotals, CartGetters } from "./../interfaces";
import { Cart, FulfillmentMethod, FulfillmentGroup } from "@kali604/reactioncommerce-api/lib/types";
import { CartItem } from "@kali604/reactioncommerce-api/lib/types/graphql";
export declare const getCartId: (cart: Cart) => string;
export declare const getCartItems: (cart: Cart) => CartItem[];
export declare const getCartTotalItems: (cart: Cart) => number;
export declare const getCartTotals: (cart: Cart) => AgnosticTotals;
export declare const getCartItemName: (product: CartItem) => string;
export declare const getCartItemVariantName: (product: CartItem) => string;
export declare const getCartItemQty: (product: CartItem) => number;
export declare const getCartItemSku: (product: CartItem) => string;
export declare const getCartItemImage: (product: CartItem) => string;
export declare const getCartItemStaffel: (product: CartItem) => number;
export declare const getCartItemMOQ: (product: CartItem) => number;
export declare const getCartItemDisplayPrice: (product: CartItem) => AgnosticPrice;
export declare const getCartItemPrice: (product: CartItem) => AgnosticPrice;
export declare const getShippingMethods: (group: FulfillmentGroup) => FulfillmentMethod[];
export declare const getFulfillmentGroup: (cart: Cart) => FulfillmentGroup;
export declare const getCartShippingPrice: (group: FulfillmentGroup) => number;
export declare const getSelectedShippingMethod: (group: FulfillmentGroup) => FulfillmentMethod;
declare const cartGetters: CartGetters<Cart, CartItem, FulfillmentGroup, FulfillmentMethod>;
export default cartGetters;
