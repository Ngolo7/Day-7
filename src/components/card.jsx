import React from "react";

function Card() {
  return (
    <div className="card w-96  mb-6 text-slate-300 bg-yellow-800">
      <div className="card-body ">
        <h2 className="card-actions font-semibold">Card Title</h2>
        <p className="italic ">
          This is a card using DaisyUI components to demonstrate styling
          capabilities.
        </p>
        <div className="card-actions  justify-end">
          <button className=" btn btn-primary">Action</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
