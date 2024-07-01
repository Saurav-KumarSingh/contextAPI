import React from 'react'
import UserContextProvider from './context/UserContextProvider';
import Login from './component/Login';
import Profile from './component/Profile';

const App = () => {
  return (
    <UserContextProvider>
      <h1 className='text-center text-2xl'>Welcome to context API</h1> <br />
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App;