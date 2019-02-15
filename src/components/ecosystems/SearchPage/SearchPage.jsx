import React, { Component } from 'react';
import Youtube from 'simple-youtube-api';
import SearchBox from '../../molecules/SearchBox';
import VideoList from '../../organisms/VideoList';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.youtube = new Youtube('AIzaSyAEkXDwf_a9cwy-za2cDgTE8erN4Pqw8sk');
    this.state = {
      search: '',
      videoList: [],
    }; 
  }

  onTextChange(e) {
    const text = e.target.value;
    this.setState({ search: text });
  }

  onSearch() {
    this.youtube.searchVideos(this.state.search).then((result) => {
      const videos = result.map((video) => ({
        id: video.id,
        title: video.title,
        thumbnail: video.thumbnails.default.url,
      }));

      this.setState({ videoList: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBox 
          onSearch={this.onSearch.bind(this)}
          searchText={this.state.search}
          onChange={this.onTextChange.bind(this)}
        />
        <br />
        <VideoList videos={this.state.videoList} />
      </div>
    );
  }
}

export default SearchPage;
