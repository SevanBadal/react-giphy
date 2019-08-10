import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx'

const GIPHY_API_KEY = '3pQcygwzdaXXEbWq3ZdVcpacuoZHLjz6';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedId: "9Pmfi0HtSpGSiuB991"
    }
    // this.search("disney");
  }
  search = (query) => {
    // giphy api
    giphy(GIPHY_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      })
    });
  }

  selectGif = (id) => {
    console.log(id)
    this.setState({
      selectedId: id
    })
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={ this.state.gifs } selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
