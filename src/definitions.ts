declare module "@capacitor/core" {
  interface PluginRegistry {
    UmfPay: UmfPayPlugin;
  }
}

export interface UmfPayPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
