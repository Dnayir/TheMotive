import React, { useContext, useState } from "react";
import httpClient from '../../pages/httpClient';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const logInUser = async () => {
    console.log(email, password);

    try {
      const resp = await httpClient.post(
        'https://the-motive-one.herokuapp.com/login',
        {
          email,
          password,
        }
      );

      window.location.href = '/motive';
    } catch (error) {
      if (error.response.status === 401) {
        alert('Invalid Credentials');
      }
    }
  };


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="" placeholder="Email" />
        <Input type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={() => logInUser()}>Sign In</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
