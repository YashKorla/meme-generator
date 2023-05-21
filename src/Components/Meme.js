import React from "react";
import "../App.css";
import memesData from "../MemesData";

function Meme() {
  const [memeData, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(
    memesData.data.memes
  );

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    setMeme({
      topText: document.getElementById("topText").value,
      bottomText: document.getElementById("bottomText").value,
      memeImage: allMemeImages[randomNumber].url,
    });
  }
  return (
    <main className="main">
      <input
        type="text"
        id="topText"
        placeholder="Top Text"
        className="input-fields mg-rt"
      />
      <input
        type="text"
        id="bottomText"
        placeholder="Bottom Text"
        className="input-fields"
      />
      <input
        type="button"
        value="Get a new meme image"
        className="btn"
        onClick={getMemeImage}
      />
      <div className="meme-image-box">
        <img src={memeData.memeImage} className="meme-image" />
      </div>
    </main>
  );
}

export default Meme;
