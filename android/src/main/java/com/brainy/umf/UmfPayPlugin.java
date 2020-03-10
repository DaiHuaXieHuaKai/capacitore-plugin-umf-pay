package com.brainy.umf;

import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.umf.pay.plugin.UmfPayment;
import com.umf.pay.sdk.UmfPay;
import com.umf.pay.sdk.UmfRequest;

@NativePlugin()
public class UmfPayPlugin extends Plugin {

    private static final String DEBUG_TAG = "UMF_PAY";

    @PluginMethod()
    public void init(PluginCall call){
        Log.d(DEBUG_TAG,"enter init function");
        String appId = call.getString("appId");
        boolean isDebug = call.getBoolean("isDebug",false);
        Log.d(DEBUG_TAG,"appId:"+appId);
        if(appId == null){
            Log.d(DEBUG_TAG, "handling request permission result");
        }else{
            saveCall(call);
            UmfPay.setDebug(isDebug);
            UmfPay.init((Application) getContext());
            UmfPay.setWeChatAppId(appId);
        }
    }

    /*
    * 微信支付
    * */
    @PluginMethod()
    public void doWechatPayOrder(PluginCall call){
        Log.d(DEBUG_TAG,"enter doWechatPayOrder function");
        String merId = call.getString("merId");
        String merCustId = call.getString("merCustId");
        String tradeNo = call.getString("tradeNo");
        String amount = call.getString("amount");
        String sign = call.getString("sign");
        if(merId == null || merId == ""){
            call.reject("merId不能为空");
        }
        if(merCustId == null || merCustId == ""){
            call.reject("merCustId不能为空");
        }
        if(tradeNo == null || tradeNo == ""){
            call.reject("tradeNo不能为空");
        }
        if(amount == null || amount == ""){
            call.reject("amount不能为空");
        }
        if(sign == null || sign == ""){
            call.reject("sign不能为空");
        }
        UmfRequest request = new UmfRequest();
        request.channel = UmfPay.CHANNEL_WECHAT;
        request.merId = merId;
        request.merCustId = merCustId;
        request.tradeNo = tradeNo;
        request.amount = amount;
        request.sign = sign;
        UmfPayment.pay(getActivity(), request);
    }

    /**
     * 支付宝支付
     */
    @PluginMethod()
    public void doAlipay(PluginCall call) {
        String merId = call.getString("merId");
        String merCustId = call.getString("merCustId");
        String tradeNo = call.getString("tradeNo");
        String amount = call.getString("amount");
        String sign = call.getString("sign");
        if(merId == null || merId == ""){
            call.reject("merId不能为空");
        }
        if(merCustId == null || merCustId == ""){
            call.reject("merCustId不能为空");
        }
        if(tradeNo == null || tradeNo == ""){
            call.reject("tradeNo不能为空");
        }
        if(amount == null || amount == ""){
            call.reject("amount不能为空");
        }
        if(sign == null || sign == ""){
            call.reject("sign不能为空");
        }
        UmfRequest request = new UmfRequest();
        request.channel = UmfPay.CHANNEL_ALIPAY;
        request.merId = merId;
        request.merCustId = merCustId;
        request.tradeNo = tradeNo;
        request.amount = amount;
        request.sign = sign;
        UmfPayment.pay(getActivity(), request);
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);
        PluginCall saveCall = getSavedCall();
        if (requestCode == UmfPay.REQUEST_CODE) {
            if (resultCode == Activity.RESULT_OK) {
                String result = data.getStringExtra(UmfPay.RESULT_MSG);
                Log.i(DEBUG_TAG,"支付成功:"+result);
            } else {
                String msg = data.getStringExtra(UmfPay.RESULT_MSG);
                Log.i(DEBUG_TAG,"[商户]" + msg);
            }
        }
        //商户以商户后台查单结果为准
        if (data != null) {
            String payCode = data.getStringExtra(UmfPay.RESULT_CODE);
            String payMsg = data.getStringExtra(UmfPay.RESULT_MSG);
            JSObject result = new JSObject();
            result.put("payCode",payCode);
            result.put("payMsg",payMsg);
            saveCall.resolve(result);
        }
    }
}
