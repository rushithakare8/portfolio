import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useState } from "react";
import { useEffect } from "react";

const Home = ({ profilePic }) => {
  // console.log(props);
  const [text, setText] = useState("");
  const fullText = [
    "Frontend Developer",
    "Angular Developer",
    "React Developer",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    const startTyping = () => {
      const currentText = fullText[currentIndex];
      let currentTextIndex = 0;

      intervalId = setInterval(() => {
        setText((prevText) => currentText.slice(0, currentTextIndex));
        currentTextIndex += 1;

        if (currentTextIndex >= currentText.length) {
          clearInterval(intervalId);

          setTimeout(() => {
            if (currentIndex + 1 < fullText.length) {
              setCurrentIndex((prevIndex) => prevIndex + 1);
              startTyping(); // Initiate typing effect for the next string
            } else {
              setCurrentIndex(0); // Reset to the first string after printing the last one
              startTyping(); // Initiate typing effect again after a delay
            }
          }, 2000);
        }
      }, 150);
    };

    startTyping();

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="h-screen w-full back-img">
        <div className="row">
          <div className="relative">
            <h1 className="name text-7xl absolute top-20 left-20 logo typing-effect text-sky-800">
              Rushikesh Thakare
            </h1>
            <p className="absolute text-2xl top-36 left-20">
              I am a <span className="underline">{text}</span>
            </p>
          </div>
          <div className="col-5">
            {/* <img src={profilePic} alt="Rushikesh" /> */}
          </div>
        </div>
      </div>
      <div className="container abc">
        <div className="parent card2">
          <Link to="login">
            <div className="card">
              <div className="content-box">
                <h1 className="card-title">Login Page</h1>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione eligendi minus voluptas, quisquam nulla dolores
                  repudiandae architecto eius nihil, qui voluptatum quos et!
                  Provident?
                </p>
                <span className="see-more">See More</span>
              </div>
              <div className="date-box">
                <span className="month">July</span>
                <span className="date">30</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="parent card1">
          <Link to="color">
            <div className="card">
              <div className="content-box">
                <h1 className="card-title">Color Change</h1>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione eligendi minus voluptas, quisquam nulla dolores
                  repudiandae architecto eius nihil, qui voluptatum quos et!
                  Provident?
                </p>
                <span className="see-more">See More</span>
              </div>
              <div className="date-box">
                <span className="month">July</span>
                <span className="date">30</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="parent card4">
          <Link to="login">
            <div className="card">
              <div className="content-box">
                <h1 className="card-title">Login Page</h1>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione eligendi minus voluptas, quisquam nulla dolores
                  repudiandae architecto eius nihil, qui voluptatum quos et!
                  Provident?
                </p>
                <span className="see-more">See More</span>
              </div>
              <div className="date-box">
                <span className="month">July</span>
                <span className="date">30</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="parent card5">
          <Link to="login">
            <div className="card">
              <div className="content-box">
                <h1 className="card-title">Login Page</h1>
                <p className="card-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione eligendi minus voluptas, quisquam nulla dolores
                  repudiandae architecto eius nihil, qui voluptatum quos et!
                  Provident?
                </p>
                <span className="see-more">See More</span>
              </div>
              <div className="date-box">
                <span className="month">July</span>
                <span className="date">30</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
