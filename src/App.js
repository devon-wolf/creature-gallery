import React, { Component } from 'react';
import creatureData from './data/image-data.js';
import GalleryApp from './components/GalleryApp.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <GalleryApp data={creatureData} />
        <GalleryApp data={creatureData} />
        <GalleryApp data={creatureData} />
      </div>
    )
  }
}
