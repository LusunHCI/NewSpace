import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pic1 from "../img/news-450x350-1.jpg";
import pic2 from "../img/news-450x350-2.jpg";
import smallpic1 from "../img/news-350x223-1.jpg";
import smallpic2 from "../img/news-350x223-2.jpg";
import smallpic3 from "../img/news-350x223-3.jpg";
import smallpic4 from "../img/news-350x223-4.jpg";
import smallpic5 from "../img/news-350x223-5.jpg";
import EventItem from "./EventItem";
function TopNewsContainer() {
  return (
    <>
      <div className="top-news">
        <div className="container">
          <div className="row">
            <div className="col-md-6 tn-left">
              <div className="row">
                <EventItem
                  link="/Coronavirus"
                  title="Coronavius-News23"
                  pic={pic1}
                />
                <EventItem
                  link="/Coronavirus"
                  title="Coronavius-News23"
                  pic={pic2}
                />
              </div>
            </div>
            <div className="col-md-6 tn-right">
              <div className="row">
                <EventItem
                  link="/Coronavirus"
                  title="Coronavius-News23"
                  pic={smallpic1}
                />
                <EventItem
                  link="/Coronavirus"
                  title="Coronavius-News23"
                  pic={smallpic2}
                />
                <EventItem
                  link="/Coronavirus"
                  title="Coronavius-News23"
                  pic={smallpic3}
                />
                <EventItem
                  link="/Coronavirus"
                  title="Coronavius-News23"
                  pic={smallpic4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNewsContainer;
