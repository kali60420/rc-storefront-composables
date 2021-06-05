import { onSSR } from './default';
interface UseSSRValues {
    initialState: any;
    saveToInitialState: (value: any) => void;
}
declare type UseSSR = (key: string) => UseSSRValues;
interface SSRConfiguration {
    useSSR: UseSSR;
}
declare let useSSR: (key: string) => {
    saveToInitialState: (value: any) => void;
    initialState: any;
};
declare const configureSSR: (config: SSRConfiguration) => void;
export { onSSR, configureSSR, useSSR };
