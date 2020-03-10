
  Pod::Spec.new do |s|
    s.name = 'CapacitorePluginUmfPay'
    s.version = '0.0.1'
    s.summary = 'a plugin umf for alipay and wxpay.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/DaiHuaXieHuaKai/capacitore-plugin-umf-pay.git'
    s.author = 'brainy'
    s.source = { :git => 'https://github.com/DaiHuaXieHuaKai/capacitore-plugin-umf-pay.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end