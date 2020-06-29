import React from 'react';
import "./style.css";
import ReactPageScroller from "react-page-scroller";
import Carousel from 'react-bootstrap/Carousel'
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      activeIndex: 0
    };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  render = () => {
    return (
      <>
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          customPageNumber={this.state.currentPage}
        >

          <div className="back-main row" >
            <img src="https://zupimages.net/up/20/23/unee.png" alt="background" />
          </div>

          <div className="w-100 h-100">
            <iframe className="video" width="100%" height="100%" title="Youtube video" src="https://www.youtube.com/embed/eZLqcrDu1tE?autoplay=1&loop=1&controls=0&mute=1"></iframe>
            <a className="download-link" href="https://drive.google.com/u/0/uc?export=download&confirm=Frq4&id=1gwjOHuXEzffKCaL61OhgKVtaSLtavT17" target="_blank" download>
              <Button>Télécharger le jeux</Button>
            </a>
          </div>

          <div className="page2 row" >
            <div className="page2-max row">
              {/* Perso/stats */}
              <div className="page2-perso column">
                <Carousel activeIndex={this.state.activeIndex} controls={false} indicators={false} pause={false} interval={0}>
                  <Carousel.Item>
                    <img className="perso m-4" src="./images/retake_seketh.png" alt="assassin" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="perso m-4" src="./images/png_arendar.png" alt="guerrier" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="perso m-4" src="./images/png_archer.png" alt="archer" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="perso m-4" src="./images/althea.png" alt="archer" />
                  </Carousel.Item>
                </Carousel>
                <div className="hr"></div>
                <Carousel activeIndex={this.state.activeIndex} controls={false} indicators={false} pause={false} interval={0}>
                  <Carousel.Item>
                    <img className="stats" src="./images/stats_assassin.png" alt="stats assassin" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="stats" src="./images/stats_guerrier.png" alt="stats guerrier" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="stats" src="./images/stats_archer.png" alt="stats archer" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="stats" src="./images/mage.png" alt="stats mage" />
                  </Carousel.Item>
                </Carousel>
              </div>

              {/* Role bouton */}
              <div className="page2-button">
                <div className="column" onClick={() => this.setState({ activeIndex: 0 })}>
                  <img className="mb-4" src="./images/sebeth_button.png" alt="assassin bouton" />
                </div>
                <div className="column" onClick={() => this.setState({ activeIndex: 1 })}>
                  <img className="mb-4" src="./images/arendar.png" alt="guerrier bouton" />
                </div>
                <div className="column" onClick={() => this.setState({ activeIndex: 2 })}>
                  <img className="mb-4" src="./images/illyzel_button.png" alt="archer bouton" />
                </div>
                <div className="column" onClick={() => this.setState({ activeIndex: 3 })}>
                  <img className="mb-4" src="./images/althea_button.png" alt="archer bouton" />
                </div>
              </div>
              {/* */}
            </div>
          </div>

          <Carousel controls={false} pause={false}>
            <Carousel.Item>
              <div className="d-block w-100 map1"></div>
              <Carousel.Caption>
                <h3>MAP ANVELL</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-block w-100 map2"></div>
              <Carousel.Caption>
                <h3>MAP JORGHELM</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-block w-100 map3"></div>
              <Carousel.Caption>
                <h3>MAP SHANUR</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-block w-100 map4"></div>
              <Carousel.Caption>
                <h3>MAP MOYOCAN</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-block w-100 map5"></div>
              <Carousel.Caption>
                <h3>MAP NEBULOS</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="column col-10">
              <div className="mb-3 mt-5">
                <h2>L'équipe d'Anvell's Heroes est composé de :</h2>
              </div>
              <div className="row align-items-start">
                <div className="column p-5">
                  <div className="text-center pb-3">
                    <img src="./images/icon.png" alt="logo anvell's" />
                    <h4>GAME ART :</h4>
                  </div>
                  <a href="https://www.artstation.com/gadelbeze" target="_blank" rel="noopener noreferrer">
                    <h5><u>Gad ELBEZE</u></h5>
                  </a>
                  <a href="https://www.artstation.com/alexduvivier" target="_blank" rel="noopener noreferrer">
                    <h5><u>Alex DUVIVIER</u></h5>
                  </a>
                  <a href="https://www.artstation.com/martinbulteau" target="_blank" rel="noopener noreferrer">
                    <h5><u>Martin BULTEAU</u></h5>
                  </a>
                </div>

                <div className="column p-5">
                  <div className="text-center pb-3">
                    <img src="./images/icon.png" alt="logo anvell's" />
                    <h4>GAME DESIGN :</h4>
                  </div>
                  <a href="https://www.behance.net/OriHope" target="_blank" rel="noopener noreferrer">
                    <h5 className="text-"><u>Valentin FIETTE</u></h5>
                  </a>
                </div>

                <div className="column p-5">
                  <div className="text-center pb-3">
                    <img src="./images/icon.png" alt="logo anvell's" />
                    <h4>TECH ART :</h4>
                  </div>
                  <a href="https://www.artstation.com/felyx" target="_blank" rel="noopener noreferrer">
                    <h5><u>Baptiste RYKNER</u></h5>
                  </a>
                  <a href="https://www.artstation.com/bbrody" target="_blank" rel="noopener noreferrer">
                    <h5><u>Elias KABLI</u></h5>
                  </a>
                  <h5>Pablo BERTON</h5>
                </div>
              </div>
            </div>
          </div>

        </ReactPageScroller>
      </>
    )
  }
}

export default App;