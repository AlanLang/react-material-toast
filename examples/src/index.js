import React from 'react';
import { render} from 'react-dom';
import toast from '../../src';
const App = () => {
  const onClick = () => {
    toast.success('123')
  }
  return (
    <div>
      <button onClick={onClick} >测试</button>
    </div>
  )
}
render(<App />, document.getElementById("root"));