import config from "../config.json";

import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = { 
    // backgroundColor: "red" 
  };

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner {
    width: 100vw;
  }
  .bannerImg {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className="banner">
      <img className="bannerImg" src="https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      </div>

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h1>{config.name}</h1>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(propriedades) {
  console.log("Dentro do componente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);

  // o Map é usado por que ele consegue "converter" de uma coisa para outra
  // aqui no caso, vai ser convertido de uma lista de nomes para componentes React

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        // console.log(playlistName);
        // console.log(videos);
        return (
          <section>
            <h2>
              {playlistName}
              </h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
      
    </StyledTimeline>
  );
}
