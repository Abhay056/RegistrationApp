import React from "react";

export default function Grid(props) {
  return (
    <>
        <h3 className="grid-title">{props.name}</h3>
        <div class="grid text-center">
        <div class="g-col-6">
            <img src="/" alt=""/>
        </div>
        <div class="g-col-6">
            <img src="/" alt=""/>
        </div>

        <div class="g-col-6">
            <img src="/"alt="" />
        </div>
        <div class="g-col-6">
            <img src="/" alt=""/>
        </div>
        </div>
    </>
  );
}
