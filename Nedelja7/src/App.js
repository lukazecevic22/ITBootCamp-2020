import React from 'react';
import './App.css';
import Forma from './Forma/inputbutton';
import Forma1 from './Forma/inputbuttonklase';
import DescEm from './Card/card';
import CardClass from './Card/cardclass';



function App() {
  return (
<>
<Forma string="Dugme"/>
<Forma1 string="Dugme1"/>
<DescEm description="Smile" url="https://png.pngitem.com/pimgs/s/51-510099_clipart-animated-moving-smiley-face-hd-png-download.png"/>
<CardClass description="neki tekst" url="https://i7.pngguru.com/preview/456/732/964/internet-meme-sadness-face-crying-jordan-sad-face-meme-png-thumbnail.jpg"/>
</>
  );
}

export default App;
