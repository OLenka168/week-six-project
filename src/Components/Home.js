import { useState } from "react";
import { data } from "./data/data";
import { dataMew } from "./data/dataMew";
import Items from "./Items";
import CEO from "./img/CEO.jpg";
import Buttons from "./Buttons";
import lifejacket from "./img/lifejacket.jpg";
import ball from "./img/ball.jpg";
import lifebuoy from "./img/lifebuoy.jpg";

function Home() {
  const [product, setProduct] = useState(data);
  const [rightMew, setRightMew] = useState(0);
  const { title, pic } = dataMew[rightMew];
  const chosenItem = (category) => {
    const newItems = data.filter((element) => element.category === category);
    setProduct(newItems);
  };

  const previous = () => {
    setRightMew((rightMew) => {
      rightMew--;
      if (rightMew < 0) {
        return dataMew.length - 1;
      }
      return rightMew;
    });
  };

  const next = () => {
    setRightMew((rightMew) => {
      rightMew++;
      if (rightMew > dataMew.length - 1) {
        rightMew = 0;
      }
      return rightMew;
    });
  };

  return (
    <div>
      <div className="heading">
        <h1>WOW MEW.</h1>
      </div>
      <div className="heading">
        <h2>The first internet shop run entirely by cats!</h2>
      </div>
      <div className="heading">
        <img src={CEO} alt="pic" />
      </div>
      <div className="heading">
        <p>Our CEO</p>
      </div>
      <div className="heading">
        <h3>What's Mew? (newest things)</h3>
      </div>
      <div className="btnSlides">
        <button className="btn_left" onClick={previous}></button>
        <img src={pic} width="200px" alt="pic" />
        <button className="btn_right" onClick={next}></button>
      </div>
      <div className="btnSlides">
        <p className="title">{title}</p>
      </div>
      <div className="heading">
        <h3>Mewst Popular (the most popular things)</h3>
      </div>
      <div className="popular">
        <img className="popular_img" src={lifejacket} alt="pic" width="200px" />
        <img src={ball} alt="pic" width="200px" />
        <img src={lifebuoy} alt="pic" width="200px" />
      </div>
      <div className="heading">
        <h2>OFFURRRS</h2>
      </div>
      <div className="buttons">
        <Buttons filteredItems={chosenItem} />
      </div>
      <div>
        <Items anyProduct={product} />
      </div>
    </div>
  );
}

export default Home;
