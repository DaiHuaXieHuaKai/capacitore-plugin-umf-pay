import { WebPlugin } from '@capacitor/core';
import { UmfPayPlugin } from './definitions';

export class UmfPayWeb extends WebPlugin implements UmfPayPlugin {
  constructor() {
    super({
      name: 'UmfPay',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const UmfPay = new UmfPayWeb();

export { UmfPay };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(UmfPay);
