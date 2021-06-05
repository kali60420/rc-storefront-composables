import { Ref } from "@vue/composition-api";
import { UseCheckout, CheckoutMutationResult, SearchResult } from "./../interfaces";
export declare type UseCheckoutFactoryParams<ORDER, DISABLED, PERSONALDETAILS, SHIPPINGDETAILS, PAYMENTMETHODS, PLACE_ORDER_PARAMS, PAYMENTMETHODS_PARAMS, PERSONALDETAILS_PARAMS, SHIPPINGDETAILS_PARAMS> = {
    disabled: Ref<DISABLED>;
    personalDetails: Ref<PERSONALDETAILS>;
    shippingDetails: Ref<SHIPPINGDETAILS>;
    billingDetails: Ref<SHIPPINGDETAILS>;
    paymentMethods: Ref<PAYMENTMETHODS[]>;
    chosenPaymentMethod: Ref<string>;
    orderReferenceId: Ref<string>;
    placeOrder: (params: PLACE_ORDER_PARAMS) => Promise<CheckoutMutationResult<ORDER>>;
    availablePaymentMethods: (params: PAYMENTMETHODS_PARAMS) => Promise<SearchResult<PAYMENTMETHODS>>;
    setPersonalDetails: (params: PERSONALDETAILS_PARAMS) => Promise<void>;
    setShippingDetails: (params: SHIPPINGDETAILS_PARAMS) => Promise<void>;
    setBillingDetails: (params: SHIPPINGDETAILS_PARAMS) => Promise<void>;
    setPaymentMethod: (method: string) => Promise<void>;
};
export declare function useCheckoutFactory<ORDER, DISABLED, PERSONALDETAILS, SHIPPINGDETAILS, PAYMENTMETHODS, PLACE_ORDER_PARAMS, PAYMENTMETHODS_PARAMS, PERSONALDETAILS_PARAMS, SHIPPINGDETAILS_PARAMS>(factoryParams: UseCheckoutFactoryParams<ORDER, DISABLED, PERSONALDETAILS, SHIPPINGDETAILS, PAYMENTMETHODS, PLACE_ORDER_PARAMS, PAYMENTMETHODS_PARAMS, PERSONALDETAILS_PARAMS, SHIPPINGDETAILS_PARAMS>): (cacheId: string) => UseCheckout<ORDER, PERSONALDETAILS, SHIPPINGDETAILS>;
