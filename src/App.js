import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component';
import BlogPage from './pages/blog/blog.component';


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        };
        setCurrentUser(userAuth)

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header />
         <Routes>
           <Route exact path='/' element={<HomePage/>} />
           <Route exact path='/shop' element={<ShopPage/>} />
           <Route  exact path='/checkout' element={<CheckoutPage/>} />
           <Route exact path='/signin' element={<SignInAndSignUpPage/>} />
           <Route path="shop/*" element={<ShopPage />} />
           <Route exact path="blog" element={<BlogPage />} />
         </Routes>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: setCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
