import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {CloseIcon, TypeIcon} from './Icon'

class Toast extends Component{
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  
  render(){
    const { type, closable, duration, children } = this.props;
    return (
      <ToastGroup>
        <ToastConent type={type} duration={duration}>
          <Message>
            <MessageSpan>
              <TypeIcon type={type}></TypeIcon>
              <MessageText>{children}</MessageText>
            </MessageSpan>
          </Message>
          {closable?<CloseContent onClick={this.props.onClose}>
            <ClostButton>
              <CloseIcon></CloseIcon>
            </ClostButton>
          </CloseContent>:null}
        </ToastConent>
      </ToastGroup>
    )
  }
}

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  closable: PropTypes.bool
};

export default Toast;


const ToastGroup = styled.div`
  margin-bottom:12px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  @media (min-width: 960px){
    top: 24px;
    left: auto;
    right: 24px;
    justify-content: flex-end;
  }
`;

const ToastConent = styled.div`
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  color: #fff;
  display: flex;
  padding: 6px 24px;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${props => getColor(props.type)};
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.46429em;
  @media (min-width: 960px){
    min-width: 288px;
    max-width: 568px;
    border-radius: 4px;
  }
  @media (max-width: 959.95px){
    flex-grow: 1;
  }
  &::after{
    content: '';
    opacity: 0.2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    border-radius: 3px;
    animation: animate-shine ${props => getTimes(props.duration)} ease-out infinite;
    animation-iteration-count:1;
  }
  @keyframes animate-shine
  {
    from {right:100%;}
    to {right:0;}
  }
`
const getTimes = (duration) => {
  return (duration+0.5)+'s';
}
const getColor = (type) => {
  switch(type){
    case 'success':
      return '#43a047';
    case 'error':
      return '#d32f2f';
    case 'warning':
      return '#ffa000';
    case 'info':
      return '#303f9f';
    default:
      return '#43a047';
  }
}

const Message = styled.div`
  max-width:88%;
  padding: 8px 0;
`
const MessageSpan = styled.span`
  display: flex;
  align-items: center;
  white-space: pre-line;
`

const MessageText = styled.div`
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; //需要显示的行数
  overflow: hidden;
  text-overflow: ellipsis;
`
const CloseContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: -8px;
`

const ClostButton = styled.div`
  color:white;
  flex: 0 0 auto;
  width:44px;
  height:44px;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  -moz-appearance: none;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  &:hover{
    background-color: rgba(0, 0, 0, 0.08);
  }
`