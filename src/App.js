

import './App.css';

import { GoogleLogin } from 'react-google-login';



function App() {

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)
  }
  return (
    <>
      <h1>Login with Google </h1>
      <GoogleLogin
        clientId={'515196952454-1vdfp9qqi7bif4ck2p29jo9b5t7fg4f7.apps.googleusercontent.com'}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
       
      >

        <span> Login with Google</span>

      </GoogleLogin>
    </>
  );
}

export default App;
