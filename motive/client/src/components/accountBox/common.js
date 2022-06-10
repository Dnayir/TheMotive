import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;
  
`;

export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  width: 280px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -100px;
  
  padding: 35px;
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: monospace;
  font-size: 25px;
  font-weight: 600;
  justify-content: center;
  line-height: 28px;
  min-height: 64px;
  outline: none;
  overflow: visible;
  
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  word-break: keep-all;
  z-index: 0;

  &:before, :after {
    border-radius: 80px;
  }

  &:before {
    background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }
	
  &:after {
    background-color: initial;
    background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
    bottom: 4px;
    content: "";
    display: block;
    left: 4px;
    overflow: hidden;
    position: absolute;
    right: 4px;
    top: 4px;
    transition: all 100ms ease-out;
    z-index: -1;
  }

  &:hover:not(:disabled):before {
    background: linear-gradient(92.83deg, rgb(255, 116, 38) 0%, rgb(249, 58, 19) 100%);
  }

  &:hover:not(:disabled):after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    transition-timing-function: ease-in;
    opacity: 0;
  }

  &:active:not(:disabled) {
    color: #ccc;
  }

  &:active:not(:disabled):before {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  }

  &:active:not(:disabled):after {
    background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
    bottom: 4px;
    left: 4px;
    right: 4px;
    top: 4px;
  }

  &:disabled {
    cursor:default;
    opacity: .24;
  }
  
`;

export const MutedLink = styled.a`
  font-size: 16px;
  font-weight: 800;
  color: #431c16;
  
  text-decoration: none;
  font-family: monospace;

  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;

  margin-top: -2px;
 
  
`;

export const BoldLink = styled.a`
  font-size: 16px;
  font-weight: 900;
  color: #ff5900;
  text-decoration: none;
  font-family: monospace;
 
  display: flex;
  justify-content: center;
  align-self: center;

  margin-bottom: 40px;
`;

export const Input = styled.input`
  background-color: #431c16;
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 80px;
  padding: 0px 15px 3px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;
  font-weight: 800;
  margin: 0.2em;
  color: #f3be62;

 

  &::placeholder {
    color: white;
    font-size: 14.5px;
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(255, 124, 25);
  }
`;

export const SubmitButton = styled.button`
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: initial;
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: monospace;
  font-size: 25px;
  font-weight: 600;
  justify-content: center;
  line-height: 28px;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 11px 40%;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;

  &:before, :after {
    border-radius: 80px;
  }

  &:before {
    background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
    content: "";
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -2;
  }
	
  &:after {
    background-color: initial;
    background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
    bottom: 4px;
    content: "";
    display: block;
    left: 4px;
    overflow: hidden;
    position: absolute;
    right: 4px;
    top: 4px;
    transition: all 100ms ease-out;
    z-index: -1;
  }

  &:hover:not(:disabled):before {
    background: linear-gradient(92.83deg, rgb(255, 116, 38) 0%, rgb(249, 58, 19) 100%);
  }

  &:hover:not(:disabled):after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    transition-timing-function: ease-in;
    opacity: 0;
  }

  &:active:not(:disabled) {
    color: #ccc;
  }

  &:active:not(:disabled):before {
    background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
  }

  &:active:not(:disabled):after {
    background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
    bottom: 4px;
    left: 4px;
    right: 4px;
    top: 4px;
  }

  &:disabled {
    cursor:default;
    opacity: .24;
  }




  `;
