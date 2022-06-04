import React, { useState, useEffect } from 'react';
import httpClient from '../httpClient';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      const resp = await httpClient.post(
        'https://the-motive-one.herokuapp.com/register',
        {
          email,
          password,
        }
      );

      window.location.href = '/User';
    } catch (error) {
      if (error.response.status === 401) {
        alert('Invalid Credentials');
      }
    }
  };

  return (
    <div>
      <h1>Create an account</h1>
      <h2>Log into your account</h2>
      <form>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id=""
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id=""
          ></input>
        </div>
        <button type="button" onClick={() => registerUser()}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
