import { Ref } from "@vue/composition-api";
import { PersonalDetails, Order, ShippingDetails, PaymentMethods } from "@kali604/reactioncommerce-api/lib/types";
export declare const personalDetails: Ref<PersonalDetails>;
export declare const shippingDetails: Ref<ShippingDetails>;
export declare const billingDetails: Ref<ShippingDetails>;
export declare const paymentMethods: Ref<PaymentMethods[]>;
export declare const chosenPaymentMethod: Ref<string>;
export declare const orderReferenceId: Ref<string>;
declare const _default: (cacheId: string) => import("./../interfaces").UseCheckout<Order, PersonalDetails, ShippingDetails>;
export default _default;
