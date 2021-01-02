import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function EventItem(props) {
  return (
    <>
      <div className="col-md-6">
        <div className="tn-img">
          <img src={props.pic} alt={props.pic} />
          <div className="tn-title">
            <Link to={props.link}>{props.title}</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventItem;
