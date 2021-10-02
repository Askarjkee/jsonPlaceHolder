
import { Header } from './components/Header';
import './App.css';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Posts } from './components/Posts';
import { Post } from './components/Post';
import { Users } from './components/Users';
function App() {

  return (
    <HashRouter>
      <Header />
      <div className='App'>
        <Switch>
          <Route exact path='/'> <Redirect to='/posts' /> </Route>
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/post/:id' component={Post}/>
          <Route path='/users' component={Users}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
