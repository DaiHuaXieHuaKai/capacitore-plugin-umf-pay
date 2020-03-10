declare module "@capacitor/core" {
  interface PluginRegistry {
    UmfPay: UmfPayPlugin;
  }
}

export interface UmfPayPlugin {
  init(options: InitOptions): void;
  doWechatPayOrder(options: PayOptions): Promise<any>;
  doAlipay(options: PayOptions): Promise<any>;
}

export interface InitOptions {
  appId: string;
  isDebug: boolean;
}

export interface PayOptions {
  merId: string;
  merCustId: string;
  tradeNo: string;
  amount: string;
  sign: string;
}