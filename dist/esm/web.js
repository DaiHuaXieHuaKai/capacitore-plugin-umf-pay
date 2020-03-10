import { WebPlugin } from '@capacitor/core';
export class UmfPayWeb extends WebPlugin {
    constructor() {
        super({
            name: 'UmfPay',
            platforms: ['web']
        });
    }
    init(options) {
    }
    doWechatPayOrder(options) {
        return null;
    }
    doAlipay(options) {
        return null;
    }
}
const UmfPay = new UmfPayWeb();
export { UmfPay };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(UmfPay);
//# sourceMappingURL=web.js.map