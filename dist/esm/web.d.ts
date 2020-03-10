import { WebPlugin } from '@capacitor/core';
import { UmfPayPlugin } from './definitions';
export declare class UmfPayWeb extends WebPlugin implements UmfPayPlugin {
    constructor();
    init(options: {
        appId: string;
        isDebug: boolean;
    }): any;
    doWechatPayOrder(options: {
        merId: string;
        merCustId: string;
        tradeNo: string;
        amount: string;
        sign: string;
    }): Promise<{}>;
    doAlipay(options: {
        merId: string;
        merCustId: string;
        tradeNo: string;
        amount: string;
        sign: string;
    }): Promise<{}>;
}
declare const UmfPay: UmfPayWeb;
export { UmfPay };
