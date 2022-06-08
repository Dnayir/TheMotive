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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const registerUser = async () => {
    try {
      const resp = await httpClient.post(
        'https://the-motive-one.herokuapp.com/register',
        {
          username,
          email,
          password
        }
      );
      window.location.href = '/User';
    } catch (error) {
      if (error.response.status === 401) {
        alert('Invalid Credentials');
      }
    }
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <Input type="password"  placeholder="Password" />
        <Input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="button" onClick={() => registerUser()}>Sign Up</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign In
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    
  );
}
