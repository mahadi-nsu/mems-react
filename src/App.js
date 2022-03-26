import "./App.css";
import "./fonts/Lazydog.otf"

function App() {
  return (
    <div className="main_div">
      <img className="stars" src="/image/stars.png" alt="" />
      <div className="div_second">
        <div className="text-div">
          <p className="div_second_text1_para lazyDog">MEMS</p>
          <p className="div_second_text2_para">6000+ mems on the ethereum blockchain</p>
        </div>

        <div className="div_second_text3">
          Coming soon
        </div>
      </div>
      <div className="image_div">
        <img className="the_image" alt="mems" src="/image/image_61.png" />
      </div>

      <div className="social_div">
        <img src="/image/twitter.png" alt="twitter" className="social_logo" />
        <img src="/image/Shape.png" alt="Shape" className="social_logo" />
        <img src="/image/discord.png" alt="discord" className="social_logo" />
        <img src="/image/opensea.png" alt="opensea" className="social_logo" />
      </div>
    </div>
  );
}

export default App;
