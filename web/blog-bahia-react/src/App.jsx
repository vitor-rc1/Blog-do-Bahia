import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';

import EditPost from './pages/EditPost';
import NewPost from './pages/NewPost';

import EditSection from './pages/EditSection';
import NewSection from './pages/NewSection';

import SideBar from './components/SideBar/SideBar';


import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => {
          return (
            <div className="app-content-side">
              <Home {...props} /> 
              <SideBar />
            </div>
          )
        }} />
        <Route exact path="/about" render={(props) => {
          return (
            <div className="app-content-side">
              <About {...props} /> 
              <SideBar />
            </div>
          )
        }} />
        <Route exact path="/:id" render={(props) => {
          return (
            <div className="app-content-side">
              <Post {...props} /> 
              <SideBar />
            </div>
          )
        }} />
        <Route exact path="/post/:id/edit" component={EditPost} />
        <Route exact path="/post/new" component={NewPost} />
        <Route exact path="/section/new" component={NewSection} />
        <Route exact path="/section/:id/edit" component={EditSection} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
