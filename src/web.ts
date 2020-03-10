import { WebPlugin } from '@capacitor/core';
import { UmfPayPlugin } from './definitions';

export class UmfPayWeb extends WebPlugin implements UmfPayPlugin {
  constructor() {
    super({
      name: 'UmfPay',
      platforms: ['web']
    });
  }

  init(options: { appId: string, isDebug: boolean }): any { 
      
  }

  doWechatPayOrder(options: { merId: string, merCustId: string, tradeNo: string, amount: string, sign: string }): Promise<{}> { 
    return null;
  }

  doAlipay(options: { merId: string, merCustId: string, tradeNo: string, amount: string, sign: string }): Promise<{}> { 
    return null;
  }
}

const UmfPay = new UmfPayWeb();

export { UmfPay };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(UmfPay);
