import React, { useEffect, useState } from "react";
import smallpic1 from "../img/news-350x223-1.jpg";
import smallpic2 from "../img/news-350x223-2.jpg";
import smallpic3 from "../img/news-350x223-3.jpg";
function CatNews(props) {
  const pics = [smallpic1, smallpic2, smallpic3];
  return (
    <>
      <div className="col-md-6">
        <div className="cn-img">
          <img src={pics[props.pic % 3]} alt={smallpic1} />
          <div className="cn-title">
            <a href="">{props.title}</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatNews;
