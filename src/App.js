
import { Link, Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./Pages/LoginPage";
import HomePage from "./Pages/Homepage";
import ProtectedRoute from "./Components/utils/ProtectedRoutes";

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/Homepage" component={HomePage} />
          {/* <Route component={Page404} />
          <Redirect to="/notFound" /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default App;
