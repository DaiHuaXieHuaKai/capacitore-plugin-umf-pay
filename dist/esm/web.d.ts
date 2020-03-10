import { WebPlugin } from '@capacitor/core';
import { UmfPayPlugin } from './definitions';
export declare class UmfPayWeb extends WebPlugin implements UmfPayPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const UmfPay: UmfPayWeb;
export { UmfPay };
