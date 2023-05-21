import React from "react";
import "../App.css";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    setMeme({
      topText: document.getElementById("topText").value,
      bottomText: document.getElementById("bottomText").value,
      memeImage: allMeme[randomNumber].url,
    });
  }
  return (
    <main className="form">
      <input
        type="text"
        id="topText"
        placeholder="Top Text"
        className="form-input"
        name="topText"
        value={meme.topText}
        onChange={handleChange}
      />
      <input
        type="text"
        id="bottomText"
        placeholder="Bottom Text"
        className="form-input"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
      />
      <input
        type="button"
        value="Get a new meme image"
        className="form-button"
        onClick={getMemeImage}
      />
      <div className="meme">
        <img src={meme.memeImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
