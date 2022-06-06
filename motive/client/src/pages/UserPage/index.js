import React, { useState, useEffect } from 'react';
import httpClient from '../httpClient';
import { CurrentLocation } from '../../components';
// import { Maps } from '../../components/Maps';
// import { SearchBox } from '../../components/SearchBox';

const UserPage = () => {
  const [user, setUser] = useState({ id: '', email: '' });

  const logoutUser = async () => {
    const resp = await httpClient.post(
      'https://the-motive-one.herokuapp.com/logout'
    );
    window.location.href = '/';
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get(
          'https://the-motive-one.herokuapp.com/@me'
        );
        setUser(resp.data);
      } catch (error) {
        console.log('Not Authenticated');
      }
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to Your Profile page</h1>
      {user != null ? (
        <div>
          <h1>Logged In</h1>
          <h3>Email: {user.email}</h3>
          <h3>ID: {user.id}</h3>
          <h3>
            Your Current Location: <CurrentLocation />
          </h3>
          <div>
            <button onClick={logoutUser}>Logout</button>
          </div>
          <div>
            {/* <div>
              <Maps />
            </div>
            <div>
              <SearchBox />
            </div> */}
          </div>
        </div>
      ) : (
        <div>
          <p>You are not logged in</p>
          <div>
            <a href="/Login">
              <button>Login</button>
            </a>
            <a href="/Register">
              <button>Register</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;


// ---------------------------REGISTER PAGE--------------------------------- // 
// import React, { useState, useEffect } from 'react';
// import httpClient from '../httpClient';

// const RegisterPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const registerUser = async () => {
//     try {
//       const resp = await httpClient.post(
//         'https://the-motive-one.herokuapp.com/register',
//         {
//           email,
//           password,
//         }
//       );

//       window.location.href = '/User';
//     } catch (error) {
//       if (error.response.status === 401) {
//         alert('Invalid Credentials');
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Create an account</h1>
//       <h2>Log into your account</h2>
//       <form>
//         <div>
//           <label>Email</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id=""
//           ></input>
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id=""
//           ></input>
//         </div>
//         <button type="button" onClick={() => registerUser()}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;


// -----------------------------LOGIN PAGE------------------------------//
// import React, { useState } from 'react';
// import httpClient from '../httpClient';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const logInUser = async () => {
//     console.log(email, password);

//     try {
//       const resp = await httpClient.post(
//         'https://the-motive-one.herokuapp.com/login',
//         {
//           email,
//           password,
//         }
//       );

//       window.location.href = '/User';
//     } catch (error) {
//       if (error.response.status === 401) {
//         alert('Invalid Credentials');
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to the login page</h1>
//       <h2>Log into your account</h2>
//       <form>
//         <div>
//           <label>Email</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id=""
//           ></input>
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id=""
//           ></input>
//         </div>
//         <button type="button" onClick={() => logInUser()}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
