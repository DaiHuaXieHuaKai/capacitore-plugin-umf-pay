import { WebPlugin } from '@capacitor/core';
import { UmfPayPlugin, InitOptions, PayOptions } from './definitions';

export class UmfPayWeb extends WebPlugin implements UmfPayPlugin {
  constructor() {
    super({
      name: 'UmfPay',
      platforms: ['web']
    });
  }

  init(options: InitOptions): void { 
    console.log(options);
  }

  doWechatPayOrder(options: PayOptions): Promise<any> { 
    console.log(options);
    return;
  }

  doAlipay(options: PayOptions): Promise<any> { 
    console.log(options);
    return;
  }
}

const UmfPay = new UmfPayWeb();

export { UmfPay };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(UmfPay);
