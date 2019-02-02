## react-material-toast
[![NPM](https://nodei.co/npm/react-material-toast.png)](https://nodei.co/npm/react-material-toast/)

## 效果
[live demo](https://react-material-toast.netlify.com/)

![](https://dada-image-bed.oss-cn-shenzhen.aliyuncs.com/20190201125142.png)
## instalation
using yarn 
```
yarn add react-material-toast
```
using npm
```
npm install --save react-material-toast
```
## usage
[live demo](https://react-material-toast.netlify.com/)
```
import React from 'react';
import ToastServive from 'react-material-toast';
const toast = ToastServive.new({
  place:'topRight',
  duration:2,
  maxCount:8
});

const App = () => {
  const onClick = () => {
    const id = toast.success('hello world',()=>{
      console.log('closed')
    });
  }
  const onErrorClick = () => {
    const id = toast.error('hello world');
  }
  const onInfoClick = () => {
    const id = toast.info('hello world');
  }
  const onWarningClick = () => {
    const id = toast.warning('hello world');
  }
  const onRemoveAll = () => {
    toast.removeAll();
  }
  return (
    <div>
      <button onClick={onClick} >success</button>
      <button onClick={onErrorClick} >error</button>
      <button onClick={onInfoClick} >info</button>
      <button onClick={onWarningClick} >warning</button>
      <button onClick={onRemoveAll} >RemoveAll</button>
    </div>
  )
}

export default App;
```
## API
### toast
组件提供了一些服务方法，使用方式和参数如下：
* toast.success(content,[closedCallBack])
* toast.error(content,[closedCallBack])
* toast.info(content,[closedCallBack])
* toast.warning(content,[closedCallBack])

| 参数  | 说明                                                         | 类型   | 默认值   |
| ----- | ------------------------------------------------------------ | ------ | -------- |
| content | 消息内容 | string | topRight |
| closedCallBack | 关闭时的回调                           | function | - |

### 全局配置
```
const toast = ToastServive.new(props);
```
props details:

| 参数  | 说明                                                         | 类型   | 默认值   |
| ----- | ------------------------------------------------------------ | ------ | -------- |
| place | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | topRight |
| maxCount | 同一时间可展示的最大提示数量                              | number | 8 |
| duration | 持续时间(秒)，当设置为0时不消失                           | number | 4 |
| closable | 是否允许手动关闭                                        | Boolean | true |