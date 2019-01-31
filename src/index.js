import React, { Component } from 'react';
import Notification from 'rc-notification';
import Toast from './Toast'
let notification = null;
Notification.newInstance({}, (n) => notification = n);

const showToast = () => {
  notification.notice({
    content: <Toast></Toast>,
    onClose() {
      console.log('simple close');
    },
  });
}

export default {
  success(props) {
    console.log('123')
    return showToast();
  }
};
