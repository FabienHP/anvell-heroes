import React from 'react';
import "./style.css";
import ReactPageScroller from "react-page-scroller";
import Carousel from 'react-bootstrap/Carousel'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null
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
                <img className="perso" src="https://zupimages.net/up/20/23/8wjn.png" alt="assassin" />
                <div className="hr"></div>
                <img className="stats" src="https://zupimages.net/up/20/23/jtyd.png" alt="stats assassin" />
              </div>

              {/* Role bouton */}
              <div className="page2-button column">
                <div className="ligne1 row">
                  <div className="column">
                    <img className="assassin" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png/revision/latest?cb=20181117143556" alt="assassin bouton" />
                    <p>ASSASSIN</p>
                  </div>
                  <div className="column">
                    <img className="tank" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png/revision/latest?cb=20181117143558" alt="assassin bouton" />
                    <p>TANK</p>
                  </div>
                </div>
                <div className="ligne1 row">
                  <div className="column">
                    <img className="archer" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png/revision/latest?cb=20181117143555" alt="assassin bouton" />
                    <p>ARCHER</p>
                  </div>
                  <div className="column">
                    <img className="mage" src="https://vignette.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png/revision/latest?cb=20181117143555" alt="assassin bouton" />
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