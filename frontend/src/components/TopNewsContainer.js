import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic1 from "../img/news-450x350-1.jpg";
import pic2 from "../img/news-450x350-2.jpg";
import smallpic1 from "../img/news-350x223-1.jpg";
import smallpic2 from "../img/news-350x223-2.jpg";
import smallpic3 from "../img/news-350x223-3.jpg";
import smallpic4 from "../img/news-350x223-4.jpg";
import smallpic5 from "../img/news-350x223-5.jpg";
import EventItem from "./EventItem";
import Axios from "axios";

var url = "http://127.0.0.1:8000/api/event/";
const pics = [
  pic1,
  pic2,
  smallpic1,
  smallpic2,
  smallpic3,
  smallpic4,
  smallpic5,
];
function TopNewsContainer() {
  const [twoTitles, setTwoTitle] = useState([]);
  const [fourTitles, setFourTitle] = useState([]);
  const [internationTitles, setInternationalTitle] = useState([]);
  const [covidTitles, setCovidTitle] = useState([]);

  const first = 2;
  const second = 4;
  let catMap = new Map();
  useEffect(() => {
    async function fetchNewsData() {
      try {
        const response = await Axios.get(`http://127.0.0.1:8000/api/event/`);
        const categories = await Axios.get(
          `http://127.0.0.1:8000/api/category`
        );
        categories.data.forEach(category => {
          catMap[category.id] = category.name;
        });
        var firstTwo = [];
        var lastFour = [];
        var internation = [];
        var covid = [];
        var environment = [];
        var tech = [];
        for (var i = 0; i < first; i++) {
          firstTwo.push(response.data[i]);
        }
        for (var i = first; i < first + second; i++) {
          lastFour.push(response.data[i]);
        }

        let start = first + second;
        let count = 8,
          idx = 0;
        while (count >= 0 && start + idx < response.data.length) {
          var cat = catMap[response.data[start + idx].category[0]];
          switch (cat) {
            case "International":
              if (internation.length < 2) {
                internation.push(response.data[start + idx]);
              } else {
                count++;
              }
              break;
            case "Covid-19":
              if (covid.length < 2) {
                covid.push(response.data[start + idx]);
              } else {
                count++;
              }
              break;
            case "Environment":
              if (environment.length < 2) {
                environment.push(response.data[start + idx]);
              } else {
                count++;
              }
              break;
            case "Technology":
              if (tech.length < 2) {
                tech.push(response.data[start + idx]);
              } else {
                count++;
              }
          }
          idx++;
          count--;
        }
        setTwoTitle(firstTwo);
        setFourTitle(lastFour);
      } catch (error) {
        console.log("error or the request is cancelled");
        console.log(error);
      }
    }
    fetchNewsData();
  }, []);
  return (
    <>
      <div className="top-news">
        <div className="container">
          <div className="row">
            <div className="col-md-6 tn-left">
              <div className="row">
                {twoTitles.map(news => (
                  <EventItem
                    key={news.id}
                    link={news.title}
                    title={news.title}
                    pic={pics[news.id]}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6 tn-right">
              <div className="row">
                {fourTitles.map(news => (
                  <EventItem
                    key={news.id}
                    link={news.title}
                    title={news.title}
                    pic={pics[news.id]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNewsContainer;
