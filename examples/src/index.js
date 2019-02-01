import React from 'react';
import { render} from 'react-dom';
import ToastServive from '../../src';
const toast = ToastServive.new({
  place:'topRight',
  duration:0,
  maxCount:8,
  closable: true
});

const App = () => {
  const onClick = () => {
    const id = toast.success('helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld',()=>{
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
      <h2>react-material-toast</h2>
      <button onClick={onClick} >success</button>
      <button onClick={onErrorClick} >error</button>
      <button onClick={onInfoClick} >info</button>
      <button onClick={onWarningClick} >warning</button>
      <button onClick={onRemoveAll} >RemoveAll</button>
    </div>
  )
}
render(<App />, document.getElementById("root"));