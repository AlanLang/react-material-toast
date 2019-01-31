import React, { Component } from 'react';
import Notification from 'rc-notification';
import Toast from './Toast'
import './index.css'

let notification = null;
Notification.newInstance({}, (n) => notification = n);

const showToast = () => {
  notification.notice({
    content: <Toast></Toast>,
    duration:null,
    onClose() {
      console.log('simple close');
    },
  });
}

export default {
  success(props) {
    return showToast();
  }
};
