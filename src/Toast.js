import React, { Component } from 'react';
import styled from 'styled-components';
import {CloseIcon, SussesIcon} from './Icon'
const ToastGroup = styled.div`
  justify-content: center;
  display:flex;
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
  background-color: #43a047;
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
`

const Message = styled.div`
  padding: 8px 0;
`
const MessageSpan = styled.span`
  display: flex;
  align-items: center;
  white-space: pre-line;
`
const CloseContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-left: 24px;
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

class Toast extends Component{
  render(){
    return (
      <ToastGroup>
        <ToastConent>
          <Message>
            <MessageSpan><SussesIcon></SussesIcon>Hello World</MessageSpan>
          </Message>
          <CloseContent>
            <ClostButton>
              <CloseIcon></CloseIcon>
            </ClostButton>
          </CloseContent>
        </ToastConent>
      </ToastGroup>
    )
  }
}


export default Toast;