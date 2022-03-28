import "./App.css";
import "./fonts/Lazydog.otf";

function App() {
  return (
    <div className="main_div">
      <img className="stars" src="/image/stars.png" alt="" />
      <div className="div_second">
        <div className="text-div">
          <p className="div_second_text1_para lazyDog">MEMS</p>
          <p className="div_second_text2_para">
            6000+ mems on the ethereum blockchain
          </p>
        </div>

        <div className="coming_soon_div">
          <span className="coming_soon_text">Coming soon</span>
        </div>
        {/* <div className="div_second_text3">Coming soon</div> */}
      </div>
      <div className="image_div">
        <img className="the_image" alt="mems" src="/image/meme-landing.svg" />
      </div>

      <div className="social_div">
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img src="/image/twitter.png" alt="twitter" className="social_logo" />
        </a>
        <a href="https://www.medium.com" target="_blank" rel="noreferrer">
          <img src="/image/Shape.png" alt="medium" className="social_logo" />
        </a>
        {/* <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <img src="/image/discord.png" alt="discord" className="social_logo" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <img src="/image/opensea.png" alt="opensea" className="social_logo" />
        </a> */}
      </div>
    </div>
  );
}

export default App;
