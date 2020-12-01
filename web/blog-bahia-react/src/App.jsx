import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PostForm from './components/PostForm';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/new" component={PostForm} />
        <Route exact path="/post/:id/edit" component={PostForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;