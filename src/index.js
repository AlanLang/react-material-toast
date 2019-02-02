import React, { Component } from 'react';
import Notification from 'rc-notification';
import Toast from './Toast'
import './index.css'

const showToast = (notification,content,options,type) => {
  const key = guid();
  const {duration, maxCount, closable} = options;
  const onClost = () => {
    notification.component.remove(key);
    if(options.cb){options.cb()}
  }
  removeMax(notification,maxCount);
  notification.notice({
    content: <Toast type={type} closable={closable} onClose={onClost} duration={duration}>{content}</Toast>,
    key:key,
    duration:duration === 0?null:duration,
    onClose() {
      if(options.cb){options.cb()}
    },
  });
  return key;
}

const removeMax = (notification,maxCount) => {
  const toasts = notification.component.state.notices;
  if(toasts.length >= maxCount){
    notification.component.remove(toasts[0].key);
  }
}

const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

export default {
  new({ place = 'topLeft', maxCount = 8, duration = 4, closable = true }){
    if(['topLeft','topRight','bottomLeft','bottomRight'].findIndex(item=>item === place) < 0){
      console.warn(`react-material-toast: 无法识别的位置：${place}`)
      place = 'topLeft'
    }
    const Toast = {
      notification:null,
      remove(key){
        this.notification.component.remove(key)
      },
      removeAll(){
        const toasts = this.notification.component.state.notices;
        for(const toast of toasts){
          this.notification.component.remove(toast.key);
        }
      },
      _show(content,type,cb){
        return showToast(this.notification,content,{maxCount,duration,closable,cb},type);
      },
      success(content,cb) {
        return this._show(content,'success',cb);
      },
      error(content,cb){
        return this._show(content,'error',cb);
      },
      info(content,cb){
        return this._show(content,'info',cb);
      },
      warning(content,cb){
        return this._show(content,'warning',cb);
      }
    };
    Notification.newInstance({prefixCls:`${place}-notification`}, (n) => Toast.notification = n);
    return Toast;
  }
};
