import React from 'react';
import "./style.css";
import ReactPageScroller from "react-page-scroller";

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

          <div className="back-main" >
            <img src="https://zupimages.net/up/20/23/unee.png"
              alt="background" />
          </div>

          <div className="page2" >
            <img src="https://zupimages.net/up/20/23/1a7o.png"
              alt="background" />
          </div>

        </ReactPageScroller>
      </>
    )
  }
}

export default App;