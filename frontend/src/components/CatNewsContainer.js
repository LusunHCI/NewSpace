import React, { useEffect, useState } from "react";
import smallpic1 from "../img/news-350x223-1.jpg";
import smallpic2 from "../img/news-350x223-2.jpg";
import smallpic3 from "../img/news-350x223-3.jpg";
import CatNews from "./CatNews";
import Axios from "axios";

function CatNewsContainer(props) {
  let target = props.name;
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    let catMap = new Map();
    async function fetchNewsData() {
      try {
        const response = await Axios.get(`http://127.0.0.1:8000/api/event/`);
        const categories = await Axios.get(
          `http://127.0.0.1:8000/api/category`
        );
        categories.data.forEach(category => {
          catMap[category.id] = category.name;
        });
        var title = [];
        let start = 6,
          idx = 0;
        while (start + idx < response.data.length) {
          var cat = catMap[response.data[start + idx].category[0]];
          console.log(cat);
          if (cat == target) {
            title.push(response.data[start + idx]);
            if (title.length > 2) {
              break;
            }
          }
          idx++;
        }
        setTitles(title);
        console.log(title);
      } catch (error) {
        console.log("error or the request is cancelled");
        console.log(error);
      }
    }
    fetchNewsData();
  }, []);
  return (
    <>
      <div className="col-md-6">
        <h2>{props.name}</h2>
        <div className="row cn-slider">
          {titles.map((d, i) => (
            <CatNews key={i} pic={i} id={props.name} title={d.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CatNewsContainer;
