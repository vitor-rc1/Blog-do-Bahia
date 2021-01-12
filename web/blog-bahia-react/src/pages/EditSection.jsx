import React from 'react';
import SectionForm from '../components/SectionForm';
import { Redirect } from 'react-router-dom';

class EditSection extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false, shouldLoading: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(section) {
    const URL = `http://localhost:3001/section/update/${this.state.id}`;
    await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(section),
    });
    this.setState({ shouldRedirect: true })
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }
  async loadPost(idPost) {
    const URL = `http://localhost:3001/section/load/${idPost}`;
    const response = await fetch(URL);
    const [{id, section}] = await response.json();
    this.setState({ section, id }, () => {
      this.setState({ shouldLoading: true })
    });
  }

  render() {
    if (this.state.shouldRedirect) {
    return (<Redirect to="/" />);
    }else if(this.state.shouldLoading) {
    return (
      <SectionForm handleSubmit={ this.handleSubmit } editSection={true} post={this.state.section}/>
    )}
    return '';
  }
}

export default EditSection;