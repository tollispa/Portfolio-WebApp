import img1 from "../ImageOfProjects/1.png";
import img2 from "../ImageOfProjects/2.png";
import img3 from "../ImageOfProjects/3.png";
import img4 from "../ImageOfProjects/4.png";
import img5 from "../ImageOfProjects/5.png";
import img6 from "../ImageOfProjects/6.png";
import img7 from "../ImageOfProjects/7.png";
import img8 from "../ImageOfProjects/8.png";
import img9 from "../ImageOfProjects/9.png";
import img10 from "../ImageOfProjects/10.png";
import img11 from "../ImageOfProjects/11.png";
import img12 from "../ImageOfProjects/12.png";
import img13 from "../ImageOfProjects/13.png";
import img14 from "../ImageOfProjects/14.png";
import img15 from "../ImageOfProjects/15.png";
import img16 from "../ImageOfProjects/16.png";
import img17 from "../ImageOfProjects/17.png";
import img18 from "../ImageOfProjects/18.png";
import img19 from "../ImageOfProjects/19.png";
import img20 from "../ImageOfProjects/20.png";
import img21 from "../ImageOfProjects/21.png";
import img22 from "../ImageOfProjects/22.png";
import img23 from "../ImageOfProjects/23.png";
import img24 from "../ImageOfProjects/24.png";

import AOS from "aos";
import "aos/dist/aos.css";

import MySwiperComponent from "./Swiper";

import { useState, useEffect } from "react";
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);

  const fadeAnimation = "fade-down";
  const fadeAnimationImage = "fade-up";

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const [h1Tag, seth1Tag] = useState("Login Page");
  const [h1Tag2, seth1Tag2] = useState("Movie Categories");
  const [h1Tag3, seth1Tag3] = useState("Choose Caterogy");
  const [h1Tag4, seth1Tag4] = useState("Home Page, choose difficulty");
  const [h1Tag5, seth1Tag5] = useState("All the ads from users");

  const slides = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

  const slides2 = [{ url: img5 }, { url: img6 }, { url: img7 }, { url: img8 }];
  const slides3 = [
    { url: img9 },
    { url: img10 },
    { url: img11 },
    { url: img12 },
  ];
  const slides4 = [
    { url: img13 },
    { url: img14 },
    { url: img15 },
    { url: img16 },
  ];

  const slides5 = [
    { url: img17 },
    { url: img18 },
    { url: img19 },
    { url: img20 },
    { url: img21 },
    { url: img22 },
    { url: img23 },
    { url: img24 },
  ];

  const total = slides.length;
  const total2 = slides2.length;
  const total3 = slides3.length;
  const total4 = slides4.length;
  const total5 = slides5.length;

  const slideImage = () => {
    if (currentIndex >= total - 1) {
      setCurrentIndex(0);
      seth1Tag("Login page");
      return;
    }
    setCurrentIndex(currentIndex + 1);

    if (currentIndex === 0) {
      seth1Tag("Here you can post blogs");
    }
    if (currentIndex === 1) {
      seth1Tag("Message friends");
    }
    if (currentIndex === 2) {
      seth1Tag("Select Avatar");
    }
  };

  const slideImage2 = () => {
    if (currentIndex2 >= total2 - 1) {
      setCurrentIndex2(0);
      seth1Tag2("Movie categories");
      return;
    }
    setCurrentIndex2(currentIndex2 + 1);

    if (currentIndex2 === 0) {
      seth1Tag2("Single Movie Page");
    }
    if (currentIndex2 === 1) {
      seth1Tag2("Login page");
    }
    if (currentIndex2 === 2) {
      seth1Tag2("Home page");
    }
  };

  const slideImage3 = () => {
    if (currentIndex3 >= total3 - 1) {
      setCurrentIndex3(0);
      seth1Tag3("Quiz categories");
      return;
    }
    setCurrentIndex3(currentIndex3 + 1);

    if (currentIndex3 === 0) {
      seth1Tag3("Quiz Correct Answer");
    }
    if (currentIndex3 === 1) {
      seth1Tag3("Quiz Wrong answer");
    }
    if (currentIndex3 === 2) {
      seth1Tag3("Player completed the quiz");
    }
  };

  const slideImage4 = () => {
    if (currentIndex4 >= total4 - 1) {
      setCurrentIndex4(0);
      seth1Tag4("Home page, player chooses difficulty");
      return;
    }

    setCurrentIndex4(currentIndex4 + 1);

    if (currentIndex4 === 0) {
      seth1Tag4("Start pairing cards!");
    }
    if (currentIndex4 === 1) {
      seth1Tag4("Player gets message that card already paired");
    }
    if (currentIndex4 === 2) {
      seth1Tag4("Player succesfully paired all cards");
    }
  };
  console.log(currentIndex5);
  const slideImage5 = () => {
    if (currentIndex5 >= total5 - 1) {
      setCurrentIndex5(0);
      seth1Tag5("All ads from users");
      return;
    }

    setCurrentIndex5(currentIndex5 + 1);

    if (currentIndex5 === 0) {
      seth1Tag5("Here you can click on the ad and send a message");
    }
    if (currentIndex5 === 1) {
      seth1Tag5("How it looks when you send a message about the ad");
    }
    if (currentIndex5 === 2) {
      seth1Tag5("Simple login page");
    }
    if (currentIndex5 === 3) {
      seth1Tag5(
        "Here you can see all your messages, also click on a specific one"
      );
    }
    if (currentIndex5 === 4) {
      seth1Tag5(
        "Here you can see a single message page, where you can answer with a message"
      );
    }
    if (currentIndex5 === 5) {
      seth1Tag5("Here you can create ads");
    }
    if (currentIndex5 === 6) {
      seth1Tag5("Home Page");
    }
  };

  return (
    <>
      <div
        id="projects"
        className="w-full bg-white py-0 px-4 border-b-2 border-gray-300"
      >
        <h1 className="text-blue-400 inline-block rounded mb-4 font-bold p-2 uppercase sm:text-2xl text-xl">
          here are some of my projects.
        </h1>

        <div className="w-full">
          <MySwiperComponent />
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <p className="text-[#00df9a] uppercase font-bold sm:text-4xl text-xl sm:hidden">
            Fullstack project.
          </p>
          <img
            data-AOS={fadeAnimationImage}
            onClick={() =>
              (window.location.href =
                "https://github.com/tollispa/Fullstack-App-with-React-SQL-Express")
            }
            style={{
              objectFit: "contain",
              maxHeight: "280px",
              minHeight: "280px",
              cursor: "pointer",
            }}
            className="w-full h-full mx-auto my-4 rounded duration-500"
            src={slides[`${currentIndex}`].url}
            alt="/"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />

          <div
            className="flex flex-col justify-center shadow-lg p-4 rounded sm:mb-10 sm:p-3"
            data-aos={fadeAnimation}
          >
            <p className="text-[#00df9a] uppercase font-bold sm:text-2xl text-xl hidden sm:block">
              Fullstack project.
            </p>
            <button
              className="bg-blue-300 hover:bg-blue-400 w-36 text-white rounded py-4 m-4 font-bold"
              onClick={slideImage}
            >
              Next Image
            </button>
            <h1 className="md:text-xl sm:text-2xl font-bold py-2 m-4 text-blue-400">
              {h1Tag} <br />
              <span className="text-black/40">
                {currentIndex + 1}/{total}
              </span>
            </h1>
            <p className="m-4 font-bold">
              Built using Nodejs, React, SQL, Express and Axios
            </p>
            <p className="m-2 shadow-lg p-2 rounded bg-slate-100">
              This project is a social networking platform that allows users to
              register an account, login securely, and create a profile page
              with an avatar. Users can post blogs and interact with other users
              by sending messages and adding friends. The platform also provides
              the option to delete friends and manage friend requests.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4 border-b-2 border-gray-300">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <p className="text-[#00df9a] uppercase font-bold sm:text-4xl text-xl sm:hidden">
            Netflix clone.
          </p>
          <img
            data-AOS={fadeAnimationImage}
            onClick={() =>
              (window.location.href =
                "https://github.com/tollispa/Netflix-clone")
            }
            style={{
              objectFit: "contain",
              maxHeight: "280px",
              minHeight: "280px",
              cursor: "pointer",
            }}
            className="block w-full h-full mx-auto my-4 ease-in-out duration-500 transition"
            src={slides2[`${currentIndex2}`].url}
            alt="/"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />

          <div
            className="flex flex-col justify-center shadow-lg rounded sm:p-3 "
            data-aos={fadeAnimation}
          >
            <p className="text-[#00df9a] uppercase font-bold sm:text-2xl text-xl hidden sm:block">
              Netflix clone.
            </p>
            <button
              className="bg-blue-300 hover:bg-blue-400 w-36 text-white rounded py-4 m-4 font-bold"
              onClick={slideImage2}
            >
              Next Image
            </button>
            <h1 className="md:text-xl sm:text-2xl font-bold py-2 m-4 text-blue-400">
              {h1Tag2} <br />
              <span className="text-black/40">
                {currentIndex2 + 1}/{total2}
              </span>
            </h1>
            <p className=" m-4 font-bold">
              Built using React & Tailwind & Axios
            </p>
            <p className=" m-2 shadow-lg p-2 rounded bg-slate-100">
              This Netflix clone project is a frontend-only project that
              displays a user interface similar to the popular video streaming
              service, Netflix. The platform displays a large collection of
              movies and TV shows, categorized by genre, rating, and popularity,
              with no backend functionality. Users can click on a specific movie
              to go to a Single Movie page for more info about that movie.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4 border-b-2 border-gray-300">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <p className="text-[#00df9a] uppercase font-bold sm:text-4xl text-xl sm:hidden">
            Quiz App.
          </p>
          <img
            data-AOS={fadeAnimationImage}
            onClick={() =>
              (window.location.href =
                "https://github.com/tollispa/javascript-quiz-app")
            }
            style={{
              objectFit: "contain",
              maxHeight: "280px",
              minHeight: "280px",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            className="block w-full rounded h-full mx-auto my-4 ease-in-out duration-500"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            src={slides3[`${currentIndex3}`].url}
            alt="/"
          />

          <div
            className="flex flex-col justify-center shadow-lg sm:p-4 sm:m-3"
            data-aos={fadeAnimation}
          >
            <p className="text-[#00df9a] uppercase font-bold sm:text-2xl text-xl hidden sm:block">
              Quiz App.
            </p>
            <button
              className="bg-blue-300 hover:bg-blue-400 w-36 text-white rounded py-4 m-4 font-bold"
              onClick={slideImage3}
            >
              Next Image
            </button>
            <h1 className="md:text-xl sm:text-2xl font-bold py-2 m-4 text-blue-400">
              {h1Tag3} <br />
              <span className="text-black/40">
                {currentIndex3 + 1}/{total3}
              </span>
            </h1>
            <p className=" m-4 font-bold">Built using React & Tailwind</p>
            <p className=" m-2 shadow-lg p-2 rounded bg-slate-100">
              This quiz project is an interactive platform that allows users to
              test their knowledge on various topics through a quiz. The quiz
              has multiple categories to choose from, and each category has over
              10+ questions. The questions in each category are randomized using
              a function, ensuring that each user gets a unique set of questions
              every time they take the quiz. When a user clicks on a category,
              they are presented with five questions to answer. After completing
              the quiz, the user is provided with their score and the option to
              see their wrong answers, allowing them to learn from their
              mistakes. This game application is fully responsive.
            </p>

            <a
              className="text-blue-400 underline"
              href="https://master--cosmic-axolotl-607d43.netlify.app/?fbclid=IwAR2g7kgHOIHxJZdq3ZhdJqPDcq8FmCBrqN2wgcZjUAs70EdSJyIcC6phjhQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Quiz website
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <p className="text-[#00df9a] uppercase font-bold text-xl sm:text-4xl sm:hidden">
            Picture Pairing Game.
          </p>
          <img
            data-AOS={fadeAnimationImage}
            onClick={() =>
              (window.location.href =
                "https://github.com/tollispa/Pair-cards-game")
            }
            style={{
              objectFit: "contain",
              maxHeight: "280px",
              minHeight: "280px",
              cursor: "pointer",
            }}
            className="block w-full h-full rounded mx-auto my-4 ease-in-out duration-500 transition"
            src={slides4[`${currentIndex4}`].url}
            alt="/"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />

          <div
            className="flex flex-col justify-center shadow sm:p-3 sm:m-3 rounded"
            data-aos={fadeAnimation}
          >
            <p className="text-[#00df9a] uppercase font-bold text-xl sm:text-2xl sm:block hidden">
              Picture Pairing Game.
            </p>
            <button
              className="bg-blue-300 hover:bg-blue-400 w-36 text-white rounded py-4 m-4 font-bold"
              onClick={slideImage4}
            >
              Next Image
            </button>
            <h1 className="md:text-xl sm:text-2xl font-bold py-2 m-4 text-blue-400">
              {h1Tag4} <br />
              <span className="text-black/40">
                {currentIndex4 + 1}/{total4}
              </span>
            </h1>
            <p className=" m-4 font-bold">Built using React & Tailwind</p>
            <p className=" m-2 shadow-lg p-2 rounded bg-slate-100">
              In this game the player has to pair 2 pictures that "matches", for
              each match the "Cards left to pair" goes down. When it reaches 0,
              that means the player has paired all pictures displaying on the
              page correctly and the game ends. This game application is fully
              responsive.
            </p>

            <a
              className="text-blue-400 underline"
              href="https://fascinating-gecko-27250f.netlify.app/?fbclid=IwAR2q2PXpdJb4NVabtbiyXdeeHfyrLYtk6NgG4qcMUyVit1VVWbxgb0GUv4Y"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Picture Pair Game website
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <p className="text-[#00df9a] uppercase font-bold text-xl sm:text-4xl sm:hidden">
            Blocket fullstack app.
          </p>
          <img
            data-AOS={fadeAnimationImage}
            onClick={() =>
              (window.location.href =
                "https://github.com/tollispa/Pair-cards-game")
            }
            style={{
              objectFit: "contain",
              maxHeight: "280px",
              minHeight: "280px",
              cursor: "pointer",
            }}
            className="block w-full h-full rounded mx-auto my-4 ease-in-out duration-500 transition"
            src={slides5[`${currentIndex5}`].url}
            alt="/"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.3)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />

          <div
            className="flex flex-col justify-center shadow sm:p-3 sm:m-3 rounded"
            data-aos={fadeAnimation}
          >
            <p className="text-[#00df9a] uppercase font-bold text-xl sm:text-2xl sm:block hidden">
              Blocket fullstack app.
            </p>
            <button
              className="bg-blue-300 hover:bg-blue-400 w-36 text-white rounded py-4 m-4 font-bold"
              onClick={slideImage5}
            >
              Next Image
            </button>
            <h1 className="md:text-xl sm:text-2xl font-bold py-2 m-4 text-blue-400">
              {h1Tag5} <br />
              <span className="text-black/40">
                {currentIndex5 + 1}/{total5}
              </span>
            </h1>
            <p className=" m-4 font-bold">
              Built using React, Tailwind, MUI, MongoDB
            </p>
            <p className=" m-2 shadow-lg p-2 rounded bg-slate-100">
              In this fullstack blocket app, the user can create and login on
              accounts. You can see create adds when logged in, also message
              people about their adds. You can delete and edit your own adds.
              The DB I'm using for storage is MongoDB
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
