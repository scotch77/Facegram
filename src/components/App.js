import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { useAuth } from '../hooks';
import { Home, Login, Signup, Settings, UserProfile } from '../pages';
import { Loader, Navbar } from './';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  return auth ? children : <Navigate to="/login" />;
}

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  console.log('auth', auth);
  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Fragment>
      <Navbar />
  
      <Routes>
        <Route exact path="/"  element={<Home  />}>
        </Route>

        <Route exact path="/login" element={<Login />}>
        </Route>

        {/* <Route exact path="/about" element={  <About /> }>
        </Route> */}

        {/* <Route exact path="/user/asdasd" element={<UserInfo />}>
        </Route> */}

        <Route exact path="/register" element={<Signup />}>
        </Route>

        <Route exact path="/settings" element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>}>
        </Route>

        <Route exact path="/user/:userId" element={
          <PrivateRoute>
          <UserProfile />
          </PrivateRoute>}>
        </Route>

        <Route element={<Page404 />}>
        </Route>
      </Routes>
      </Fragment>
    </Router> 
    </div>
  );
}

export default App;