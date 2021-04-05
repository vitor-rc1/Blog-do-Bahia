import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';
import Loading from '../components/Loading';

import './Home.css';

import { getPosts } from '../services/api';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      shouldLoading: false,
      isVideoFinish: false,
    };
    this.loadPosts = this.loadPosts.bind(this);
    this.hiddeVideo = this.hiddeVideo.bind(this);
  }

  componentDidMount() {
    this.loadPosts();
    const videoHasPlayed = sessionStorage.getItem('videoPlayer');
    if (videoHasPlayed) {
      this.setState({ isVideoFinish: true })
    }
  }

  async loadPosts() {
    const posts = await getPosts();
    this.setState({ posts }, () => {
      this.setState({ shouldLoading: true });
    });
    console.log(posts)
    if (posts.length) {
      const postsIds = posts
        .sort((a, b) => a.id - b.id);
      sessionStorage.setItem('posts', JSON.stringify(postsIds));
    }
  }

  hiddeVideo() {
    this.setState({ isVideoFinish: true })
    sessionStorage.setItem('videoPlayer', true);
  }

  render() {
    const { posts, shouldLoading, isVideoFinish } = this.state;
    if (!isVideoFinish) {
      return (
        <div className="video-playing">
          <ReactPlayer
            muted={true}
            playing
            width={800}
            height={600}
            onEnded={this.hiddeVideo}
            url={'https://www.youtube.com/watch?v=bpdd5-UFIok'}
            className="react-player"
          />
        </div>
      )
    }
    if (!shouldLoading) {
      return <Loading />;
    }
    return (
      <div className="home" >

        <Header />
        <SideBar />
        <div className="sobre">
          <p className="zeca"><em> Para Zeca. </em></p>
          <br/>
          <p>
          &emsp;&emsp;Escrever Esquecer é aquilo que permanece da voz de alguém que calhou chamar-se Vítor Ribeiro-Santos. Há aqui a forma possível que assumiram diversos processos, ciclos, ritos nos quais um corpo e suas condições mergulharam, juntos, desde 2014, como maneira de se fazer sentir e dizer o mundo. Escrever Esquecer é também parte de um título de Jeanne-Marie Gagnebin, em um texto sobre a obra de Walter Benjamin: coincidência alguma nisso.
          </p>
          <br/>
          <p>
          &emsp;&emsp;<em>Escrever Esquecer</em>, além disso: Beatriz Calheta, Letícia Hayashi e Vítor Rodrigues – editoras/criadoras e realizador/criador das formas de tudo que está aqui. A eles, simplesmente tudo.
          </p>
          <br/>
          <p>
          &emsp;&emsp;Nosso sítio está dividido em algumas seções: <em>Algumas cartas, Escrever com os pés, olhos/água, No meio dia das coisas, Prosa dos dias, Ter olhos pra ver, Toamasina</em>. Cada uma dessas seções diz respeito a um ciclo crítico ou criativo diferente, oriundo de anos diferentes, com intenções diferentes. Um continente em suas cidades. Por isso, mesmo como unidades autônomas, cada pedaço deste lugar funciona interdependentemente, pode ser acessado por novas estradas – <em>o botão Leve-me a qualquer lugar</em> é parte desta ideia modesta.
          </p>
          <br/>
          <p>
          &emsp;&emsp;Mas por que criar isto aqui, a esta altura dos acontecimentos? Ora, sim. Pra mais urgente das perguntas, talvez nenhuma resposta seja necessária. Escrever Esquecer quer existir da mesma maneira como é possível que espécies chamem – de alguma forma – a escuridão abissal de casa. A vida persiste a contragosto de si. Se você trouxe sua voz, se você está agora aqui, seu corpo diz ao mundo que, uma vez mais, prosseguimos.
          </p>
          <br/>
          <p> &emsp;&emsp;Obrigado. E mais nada resta a falar. </p>

        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
