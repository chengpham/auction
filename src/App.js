import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage'
import AuctionsIndexPage from './components/AuctionsIndexPage'
import AuctionsShowPage from './components/AuctionsShowPage'
import AuctionNewPage from './components/AuctionNewPage'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import { Session, User } from './requests';

const App = () => {
  const [user, setUser] = useState({})

  useEffect(()=>{
    Session.currentUser()
    .then(res=>{
      setUser({user: res})
    })
  }, [])

  const handleSignIn = (params)=>{
    Session.create(params)
    .then((res)=>{
      setUser({user: res})
      return Session.currentUser()
    })
    .then(res=>{
      setUser({user: res})
    })
  }
  const handleSignUp = (params)=>{
    User.create(params)
    .then(()=>{
      return Session.currentUser()
    }).then((user)=>{
      setUser({user: user})
    })
  }
  const destroySession = ()=>{
    Session.destroy()
    .then(res=>{
      setUser({user:null})
    })
  }
  return (
    
      <BrowserRouter>
      <Navbar current_user={user} destroySession={destroySession} />
      <div className='app container-fluid'>
      <Switch>
      <Route exact path='/auction' component={WelcomePage} />
      <AuthRoute exact path='/auctions/new' isAuth={user.user} component={AuctionNewPage}/>
      <Route path='/auctions/:id' render={(routeProps)=><AuctionsShowPage current_user={user} {...routeProps} />} />
      <Route path='/auctions' render={(routeProps)=><AuctionsIndexPage current_user={user} {...routeProps} />} />
      <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={handleSignIn} {...routeProps}/>} />
      <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSubmit={handleSignUp} {...routeProps}/>} />
      </Switch>
      </div>
      </BrowserRouter>
    
  )
}

export default App
