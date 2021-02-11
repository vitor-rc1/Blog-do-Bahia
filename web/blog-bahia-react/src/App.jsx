import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';

import EditPost from './pages/EditPost';
import NewPost from './pages/NewPost';

import EditSection from './pages/EditSection';
import NewSection from './pages/NewSection';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/:id" component={ Post } />
        <Route exact path="/post/:id/edit" component={EditPost} />
        <Route exact path="/post/new" component={NewPost} />
        <Route exact path="/section/new" component={NewSection} />
        <Route exact path="/section/:id/edit" component={EditSection} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
