import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import About from '../pages/About';
import Post from '../pages/Post';
import Section from '../pages/Section';

import EditPost from '../pages/EditPost';
import NewPost from '../pages/NewPost';

import EditSection from '../pages/EditSection';
import NewSection from '../pages/NewSection';

import Login from '../pages/Login';
import AdminPanel from '../pages/AdminPanel';

function Routes() {
  return (
    <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/about" component={ About } />
    <Route exact path="/login" component={ Login } />
    <PrivateRoute exact path="/admin" component={ AdminPanel } />
    <Route exact path="/:id" component={ Post } />
    <PrivateRoute exact path="/post/:id/edit" component={EditPost} />
    <PrivateRoute exact path="/post/new" component={NewPost} />
    <PrivateRoute exact path="/section/new" component={NewSection} />
    <Route exact path="/section/:id" component={Section} />
    <PrivateRoute exact path="/section/:id/edit" component={EditSection} />
    <Route render={() => <div>Não encontrado</div>} />
  </Switch>
  );
}

export default Routes;