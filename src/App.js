import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./components/Profile";



function App() {

  const user = useSelector(selectUser);
 const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged(userAuth=>{
      if (userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email,
        }))

      }else{
        dispatch(logout())

      }
    });
    return unsubscribe;
   
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
                <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
