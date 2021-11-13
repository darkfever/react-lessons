import logo from './logo.svg';
import './App.css';
import Main from './containers/main';
import List from './containers/list';
import User from './containers/user';
import Products from './containers/products';
import Blog from './containers/blog';
import Post from './containers/post';
import PostDetails from './containers/post-details';
import BlogComments from './components/blog-comments';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    {/* <Main/> */}
      {/* <List/> */}
      {/* <User/> */}
      {/* <Products/> */}
      <Router>
        <Switch>
            <Route path={'/users'} component={User} exact/>
            <Route path={'/main'} component={Main} exact/>
            <Route path={'/blog'} component={Blog} exact/>
            <Route path={'/post'} component={Post} exact/>
            <Route path={'/post/:id'} component={PostDetails} exact/>
            <Route path={'/post/:id/comments'} component={BlogComments} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
