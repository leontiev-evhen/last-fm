import React from 'react';
import { Link } from "react-router-dom";

export function ListItem({track}) {
  return (
    <div className="col">
      <div className="track-box">
        <div className="title">
          <Link to="/track/1">{track.name}</Link>
        </div>
        <img src={track.image[3]['#text']} alt="" />
      </div>
    </div>
  );
}
