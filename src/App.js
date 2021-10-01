
import { Header } from './components/Header';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Posts } from './components/Posts';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Switch>
        <Route exact path='/'> <Redirect to='/posts'/> </Route>
        <Route path='/posts' component={Posts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
