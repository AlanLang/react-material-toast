import React from 'react';
import { render} from 'react-dom';
import toast from '../../src';
import Toast from '../../src/Toast'
const App = () => {
  const onClick = () => {
    toast.success('123')
  }
  return (
    <div>
      <button onClick={onClick} >测试</button>
      <Toast type="success"></Toast>
    </div>
  )
}
render(<App />, document.getElementById("root"));