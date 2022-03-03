import "./App.css";
import "./fonts/lazy_dog.ttf";

function App() {
  return (
    // <div className="container">
    //   <div className="lazyDog header_text">
    //     <p className="header_t1">m</p>
    //     <p className="header_t2">E</p>
    //     <p className="header_t3">m</p>
    //     <p className="header_t4">S</p>
    //   </div>

    //   <div className="secondary">
    //     <p className="secondary_text">restoring earth’s memory</p>
    //   </div>
    // </div>

    <div className="main_div">
      <div className="div_second">
        <div className="div_second_text1">
          <p className="div_second_text1_para lazyDog">MEMS</p>
        </div>
        <div className="div_second_text2 dm">
          <p className="div_second_text2_para">restoring earth's memory</p>
        </div>
        <div className="div_second_text3">
          <p className="div_second_text3_para">Coming soon!</p>
        </div>
      </div>

      <div className="div_images">
        <img className="image-1" src="/image/man_pencil.png" />
        <img className="image-2" src="/image/base.png" />
      </div>
    </div>
  );
}

// 54
// group_21

export default App;
