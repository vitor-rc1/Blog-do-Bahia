import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, getSections, deleteSection, deletePost } from '../services/api';

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
        <div className="sections">
          <h2>Sections</h2>
          <input
            type="button"
            onClick={() => push("/section/new")}
            value="Nova section"
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
                    <input
                      type="button"
                      onClick={() => push(`/section/${id}/edit`)}
                      value="Editar"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.delete(deleteSection, id, 'sections')}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="posts">
          <h2>Posts</h2>
          <input
            type="button"
            onClick={() => push("/post/new")}
            value="Novo post"
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
                    <input
                      type="button"
                      onClick={() => push(`/post/${id}/edit`)}
                      value="Editar"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.delete(deletePost, id, 'posts')}
                    >
                      Deletar
                    </button>
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