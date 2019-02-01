import React from 'react';
import { render} from 'react-dom';
import ToastServive from '../../src';
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
render(<App />, document.getElementById("root"));