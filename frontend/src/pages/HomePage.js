import React from "react";
import smallpic1 from "../img/news-350x223-1.jpg";
import smallpic2 from "../img/news-350x223-2.jpg";
import smallpic3 from "../img/news-350x223-3.jpg";
import smallpic4 from "../img/news-350x223-4.jpg";
import smallpic5 from "../img/news-350x223-5.jpg";
import TopNewsContainer from "../components/TopNewsContainer";
import CatNewsContainer from "../components/CatNewsContainer";

function HomePage() {
  return (
    <>
      <div>
        <TopNewsContainer />
        <div className="cat-news">
          <div className="container">
            <div className="row">
              <CatNewsContainer name="Covid-19" />
              <CatNewsContainer name="Technology" />
            </div>
          </div>
        </div>

        <div className="cat-news">
          <div className="container">
            <div className="row">
              <CatNewsContainer name="International" />
              <CatNewsContainer name="Environment" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
