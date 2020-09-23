import React from "react";
import loadinGif from "../images/gif/loading-gear.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h4>events data loading...</h4>
      <img src={loadinGif} alt="" />
    </div>
  );
}
