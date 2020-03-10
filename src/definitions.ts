declare module "@capacitor/core" {
  interface PluginRegistry {
    UmfPay: UmfPayPlugin;
  }
}

export interface UmfPayPlugin {
  init(options: { appId: string,isDebug:boolean });
  doWechatPayOrder(options: { merId: string,merCustId:string,tradeNo: string,amount:string,sign: string }):Promise<{}>;
  doAlipay(options: { merId: string,merCustId:string,tradeNo: string,amount:string,sign: string }):Promise<{}>;
}
