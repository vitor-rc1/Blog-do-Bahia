import React from 'react';
import SectionForm from '../components/SectionForm';
import { Redirect } from 'react-router-dom';
import { getSection, updateSection } from '../services/api';

class EditSection extends React.Component {
  constructor() {
    super();
    this.state = { shouldRedirect: false, shouldLoading: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(section) {
    updateSection(section);
    this.setState({ shouldRedirect: true });
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }
  async loadPost(idPost) {
    const data = await getSection(idPost);
    this.setState({ data }, () => {
      this.setState({ shouldLoading: true });
    });
  }

  render() {
    if (this.state.shouldRedirect) {
    return (<Redirect to="/" />);
    }else if(this.state.shouldLoading) {
    return (
      <SectionForm handleSubmit={ this.handleSubmit } editSection={true} post={this.state.data[0]}/>
    )}
    return '';
  }
}

export default EditSection;