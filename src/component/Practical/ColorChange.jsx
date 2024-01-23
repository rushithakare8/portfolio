import React from "react";
import { useState } from "react";
import "./colorChange.css";

const ColorChange = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className={`w-full h-screen duration-200 animation ${color}`}
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("#1ABC9C")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "#1ABC9C" }}
            >
              Cyan
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("#1E8449")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              style={{ backgroundColor: "#1E8449" }}
            >
              Green white
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorChange;
