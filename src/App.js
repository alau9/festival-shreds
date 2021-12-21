import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  render(){
    return (
      <div >
        <Header />
         <Routes>
           <Route exact path='/' element={<HomePage/>} />
           <Route exact path='/shop' element={<ShopPage/>} />
           <Route exact path='/signin' element={<SignInAndSignUpPage/>} />
         </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
