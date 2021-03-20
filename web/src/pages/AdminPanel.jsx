import React, { Component } from 'react';
import { getPosts, getSections, deleteSection, deletePost } from '../services/api';
import { 
  RiEdit2Fill, 
  RiDeleteBin2Line, 
  RiAddCircleLine,
  RiHome2Line 
} from "react-icons/ri";
import './AdminPanel.css';

class AdminPanel extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      sections: [],
      postsLoaded: false,
      sectionsLoaded: false,
    }
    this.loadPosts = this.loadPosts.bind(this);
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
    this.loadPosts();
    this.loadSections();
  }

  async loadPosts() {
    const posts = await getPosts();
    this.setState({ posts }, () => {
      this.setState({ postsLoaded: true });
    });
  }
  async loadSections() {
    const sections = await getSections();
    this.setState({ sections }, () => {
      this.setState({ sectionsLoaded: true });
    });
  }

  async delete(deleteApi, id, type) {
    const response = await deleteApi(id);
    alert(response.statusText);
    const state = this.state[type];
    const newState = state.filter(item => item.id !== id);
    this.setState({
      [type]: newState,
    });
  }

  render() {
    const { postsLoaded, sectionsLoaded, posts, sections } = this.state;
    const { history: { push } } = this.props;
    if (!postsLoaded && !sectionsLoaded) {
      return (
        <div>
          ...Carregando
        </div>
      )
    }
    return (
      <div className="admin-panel">
        <RiHome2Line 
          className="home-icon"
          onClick={() => push("/")}
        />
        <div className="sections">
          <h2>Sections</h2>
          <RiAddCircleLine
            className="new-section-icon"
            onClick={() => push("/section/new")}
          />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sections.map(({ id, title }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>
                    <RiEdit2Fill
                      className="edit-icon"
                      onClick={() => push(`/section/${id}/edit`)}
                    />
                  </td>
                  <td>
                    <RiDeleteBin2Line
                      className="delete-icon"
                      onClick={() => this.delete(deleteSection, id, 'sections')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="posts">
          <h2>Posts</h2>
          <RiAddCircleLine
            className="new-post-icon"
            onClick={() => push("/post/new")}
          />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map(({ id, cardtitle }) => (
                <tr key={id} >
                  <td>{id}</td>
                  <td>{cardtitle}</td>
                  <td>
                    <RiEdit2Fill
                      className="edit-icon"
                      onClick={() => push(`/post/${id}/edit`)}
                    />
                  </td>
                  <td>
                    <RiDeleteBin2Line
                      className="delete-icon"
                      onClick={() => this.delete(deletePost, id, 'posts')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminPanel;