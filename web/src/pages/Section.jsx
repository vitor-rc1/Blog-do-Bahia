import React, { Component } from 'react';
import './Section.css'
import SectionContent from '../components/SectionContent';
import { getSection } from '../services/api';

class Section extends Component {
  constructor(props) {
    super();
    this.state = {
      shouldLoading: false, 
      section: {
        colornavfooter : '#176E8C'
      },
      id: props.match.params.id,
      posts: [],
    };
    this.loadSection = this.loadSection.bind(this);
    this.goToFirstPost = this.goToFirstPost.bind(this);
    this.loadCards = this.loadCards.bind(this);

  }

  componentDidMount() {
    this.loadSection(this.state.id);
    this.loadCards(this.state.id)
  }

  componentDidUpdate(){
    const newId = this.props.match.params.id;
    const { id } = this.state;
    if(newId !== id) {
      this.loadSection(newId);
      this.loadCards(newId)
      this.setState({ id: newId });
    }
  }

  loadCards(idSection) {
    const cards = JSON.parse(sessionStorage.getItem("posts"))
      .filter(({section}) => section == idSection);
    this.setState({ posts: cards });
    console.log(cards);
  }

  loadSection(idSection) {
    this.setState({shouldLoading: false}, async () => {
      const [section] = await getSection(idSection);
      this.setState({ section }, () => {
        this.setState({ shouldLoading: true })
      });
    })
  }

  goToFirstPost(sectionId) {
    const allPosts = JSON.parse(sessionStorage.getItem('posts')); 
    const firstPost = allPosts.find(post => post.section === sectionId).id;
    const { history } = this.props;

    history.push(`/${firstPost}`);
  }

  render() {
    const { shouldLoading, section, posts, id } = this.state;
    if (!shouldLoading) {
      return '...Carregando';
    }
    return (
      <div>
        <SectionContent 
          section={ section } 
          goToFirstPost={ this.goToFirstPost } 
          preview={false}
          posts={posts}
        />
      </div>
    );
  }
}

export default Section;