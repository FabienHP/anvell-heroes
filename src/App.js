import React from 'react';
import "./style.css";
import ReactPageScroller from "react-page-scroller";
import Carousel from 'react-bootstrap/Carousel'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
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

          <div className="page2 row" >
            <div className="page2-max row">
              {/* Perso/stats */}
              <div className="page2-perso column">
                <Carousel activeIndex={this.state.activeIndex} controls={false} indicators={false} pause={false} interval={0}>
                  <Carousel.Item>
                    <img className="perso" src="./images/retake_seketh.png" alt="assassin" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="perso" src="./images/png_arendar.png" alt="guerrier" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="perso" src="./images/png_archer.png" alt="archer" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="perso" src="./images/mage.png" alt="mage" />
                  </Carousel.Item>
                </Carousel>
                <div className="hr"></div>
                <img className="stats" src="https://zupimages.net/up/20/23/jtyd.png" alt="stats assassin" />
              </div>

              {/* Role bouton */}
              <div className="page2-button">
                <div className="ligne">
                  <div className="column" onClick={() => this.setState({ activeIndex: 0 })}>
                    <img className="assassin" src="./images/assassin.png" alt="assassin bouton" />
                    <p>ASSASSIN</p>
                  </div>
                  <div className="column" onClick={() => this.setState({ activeIndex: 1 })}>
                    <img className="tank" src="./images/guerrier.png" alt="guerrier bouton" />
                    <p>GUERRIER</p>
                  </div>
                </div>
                <div className="ligne">
                  <div className="column" onClick={() => this.setState({ activeIndex: 2 })}>
                    <img className="archer" src="./images/archer.png" alt="archer bouton" />
                    <p>ARCHER</p>
                  </div>
                  <div className="column" onClick={() => this.setState({ activeIndex: 3 })}>
                    <img className="mage" src="./images/mage.png" alt="mage bouton" />
                    <p>MAGE</p>
                  </div>
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

          <div className="column">
            <div>
              <p>L'équipe d'Avell's Heroes est composé de :</p>
            </div>
            <div className="row">
              <div className="column">
                <img src="" alt="logo anvell's" />
                <p>GAME ART :</p>
                <p>Gad ELBEZE</p>
                <p>Alex DUVIVIER</p>
                <p>Martin BULTEAU</p>
              </div>

              <div className="column">
                <img src="" alt="logo anvell's" />
                <p>GAME DESIGN :</p>
                <p>Valentin FIETTE</p>
              </div>

              <div className="column">
                <img src="" alt="logo anvell's" />
                <p>TECH ART :</p>
                <p>Baptiste RYKNER</p>
                <p>Elias KABLI</p>
                <p>Pablo BERTON</p>
              </div>
            </div>
          </div>

        </ReactPageScroller>
      </>
    )
  }
}

export default App;