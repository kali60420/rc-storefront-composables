declare type Handler = (value?: any) => void;
declare const emit: (eventName: string, value: any) => void;
declare const on: (eventName: string, handler: Handler) => void;
export { emit, on };
