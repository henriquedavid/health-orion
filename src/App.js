import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Manager from './screens/Manager';
import CadastrarDadosVitais from './screens/CadastrarDadosVitais';
import CadastrarUsuario from './screens/CadastrarUsuario';
import User from './screens/User';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Subscriber from './screens/Subscriber';

function App() {
  return (
    <Router>
      <div>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">Usuário</Link>
            </li>
          </ul> */}
        <Switch>
          <Route path="/manager">
            <Manager />
          </Route>
          <Route path="/cadastrardadosvitais">
            <CadastrarDadosVitais />
          </Route>
          <Route path="/cadastrarusuario">
            <CadastrarUsuario />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/subscriber">
            <Subscriber />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
