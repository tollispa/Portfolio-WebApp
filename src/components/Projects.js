import img1 from "../ImageOfProjects/1.png"
import img2 from "../ImageOfProjects/2.png"
import img3 from "../ImageOfProjects/3.png"
import img4 from "../ImageOfProjects/4.png"
import img5 from "../ImageOfProjects/5.png"
import img6 from "../ImageOfProjects/6.png"
import img7 from "../ImageOfProjects/7.png"
import img8 from "../ImageOfProjects/8.png"
import img9 from "../ImageOfProjects/9.png"
import img10 from "../ImageOfProjects/10.png"
import img11 from "../ImageOfProjects/11.png"
import img12 from "../ImageOfProjects/12.png"
import img13 from "../ImageOfProjects/13.png"
import img14 from "../ImageOfProjects/14.png"




import { useState} from "react"

const Projects = () => {
const [currentIndex, setCurrentIndex] = useState(0)
const [currentIndex2, setCurrentIndex2] = useState(0)
const [currentIndex3, setCurrentIndex3] = useState(0)
const [currentIndex4, setCurrentIndex4] = useState(0)



const [h1Tag, seth1Tag] = useState("Login Page")
const [h1Tag2, seth1Tag2] = useState("Movie Categories")
const [h1Tag3, seth1Tag3] = useState("Choose Caterogy")
const [h1Tag4, seth1Tag4] = useState("Easy Game Mode")


  const slides = [
    {url: img1},
    {url: img2},
    {url: img3},
    {url: img4},
  
  ]

  const slides2 = [
    {url: img5},
    {url: img6},
    {url: img7},
    {url: img8},
  
  ]
  const slides3 = [
    {url: img9},
    {url: img10},
    {url: img11},
    {url: img12},
  
  ]
  const slides4 = [
    {url: img13},
    {url: img14}
 
  
  ]


  const total = slides.length
  const total2 = slides2.length
  const total3 = slides3.length
  const total4 = slides4.length
 

  const slideImage = () => {
    
    if (currentIndex >= total -1){
       setCurrentIndex(0)
       seth1Tag("Login page")
       return 
       
    }
    setCurrentIndex(currentIndex +1)
  
    if(currentIndex === 0) {
      seth1Tag("Here you can post blogs")
    }
    if(currentIndex === 1) {
      seth1Tag("Message friends")
    }
    if(currentIndex === 2) {
      seth1Tag("Select Avatar")
    }
  }

  const slideImage2 = () => {
    if (currentIndex2 >= total2 -1){
     setCurrentIndex2(0)
     seth1Tag2("Movie categories")
     return
      
   }
   setCurrentIndex2(currentIndex2 +1)
 
   if(currentIndex2 === 0) {
     seth1Tag2("Single Movie Page")
   }
   if(currentIndex2 === 1) {
     seth1Tag2("Login page")
   }
   if(currentIndex2 === 2) {
     seth1Tag2("Home page")
   }
  }
 
  const slideImage3 = () => {
    if (currentIndex3 >= total3 -1){
     setCurrentIndex3(0)
     seth1Tag3("Quiz categories")
     return
      
   }
   setCurrentIndex3(currentIndex3 +1)
 
   if(currentIndex3 === 0) {
     seth1Tag3("Quiz Correct Answer")
   }
   if(currentIndex3 === 1) {
     seth1Tag3("Quiz Wrong answer")
   }
   if(currentIndex3 === 2) {
     seth1Tag3("Final question")
   }
  }
 
  const slideImage4 = () => {
    if (currentIndex4 >= total4 -1){
     setCurrentIndex4(0)
     seth1Tag4("Easy Game Mode")
     return
      
   }
   setCurrentIndex4(currentIndex3 +1)
 
   if(currentIndex4 === 0) {
     seth1Tag4("Hard Game Mode")
   }
 
  
  }

    return (
      <>
        <div id ="projects"className="w-full bg-white py-0 px-4 border-b-2 border-gray-300">
          <h1 className="text-blue-400 shadow-lg inline-block rounded m-2 font-bold p-2 uppercase sm:text-2xl text-xl">PROJECTS.</h1>
         
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <p className="text-[#00df9a] uppercase font-bold sm:text-4xl text-xl">
                Fullstack project
              </p>
            <img 
            onClick={() => window.location.href='https://github.com/tollispa/Fullstack-App-with-React-SQL-Express'}
            style={{objectFit: "contain", maxHeight: "280px", minHeight:"280px", cursor: "pointer"}}className="block w-full h-full mx-auto my-4 rounded duration-500"src={slides[`${currentIndex}`].url} alt="/"/>
            <div className="flex flex-col justify-center">
            
              <button className="bg-black w-36 text-white rounded py-4 m-4" onClick={slideImage}>Next Image</button>
              <h1 className="md:text-4xl sm:text-2xl font-bold py-2 m-4">{h1Tag} <br/><span className="text-black/40">{currentIndex +1}/{total}</span></h1>
              <p className="m-4 font-bold">Built using Nodejs, React, SQL, Express and Axios</p>
              <p className="m-2 shadow-lg p-2 rounded bg-slate-100">This project is a social networking platform that allows users to register an account, login securely, and create a profile page with an avatar. Users can post blogs and interact with other users by sending messages and adding friends. The platform also provides the option to delete friends and manage friend requests. </p>

            </div>

          </div>
       
      </div>
      <div className="w-full bg-white py-16 px-4 border-b-2 border-gray-300">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <p className="text-[#00df9a] uppercase font-bold sm:text-4xl text-xl">
               Netflix clone
              </p>
            <img 
            onClick={() => window.location.href="https://github.com/tollispa/Netflix-clone"}
            style={{objectFit: "contain", maxHeight: "280px", minHeight:"280px", cursor: "pointer"}}className="block w-full h-full mx-auto my-4 ease-in-out duration-500 transition"src={slides2[`${currentIndex2}`].url} alt="/"/>
           
            <div className="flex flex-col justify-center">
              <button className="bg-black w-36 text-white rounded py-4 m-4" onClick={slideImage2}>Next Image</button>
              <h1 className="md:text-4xl sm:text-2xl font-bold py-2 m-4">{h1Tag2} <br/><span className="text-black/40">{currentIndex2 +1}/{total2}</span></h1>
              <p className=" m-4 font-bold">Built using React & Tailwind & Axios</p>
              <p className=" m-2 shadow-lg p-2 rounded bg-slate-100">This Netflix clone project is a frontend-only project that displays a user interface similar to the popular video streaming service, Netflix. The platform displays a large collection of movies and TV shows, categorized by genre, rating, and popularity, with no backend functionality. Users can click on a specific movie to go to a Single Movie page for more info about that movie.</p>

            </div>

          </div>
       
      </div>
      <div className="w-full bg-white py-16 px-4 border-b-2 border-gray-300">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <p className="text-[#00df9a] uppercase font-bold sm:text-4xl text-xl">
              Quiz
              </p>
            <img 
            onClick={() => window.location.href="https://github.com/tollispa/javascript-quiz-app"}
            style={{objectFit: "contain", maxHeight: "280px", minHeight:"280px", cursor: "pointer"}}className="block w-full h-full mx-auto my-4 ease-in-out duration-500 transition"src={slides3[`${currentIndex3}`].url} alt="/"/>
           
            <div className="flex flex-col justify-center">
              <button className="bg-black w-36 text-white rounded py-4 m-4" onClick={slideImage3}>Next Image</button>
              <h1 className="md:text-4xl sm:text-2xl font-bold py-2 m-4">{h1Tag3} <br/><span className="text-black/40">{currentIndex3 +1}/{total3}</span></h1>
              <p className=" m-4 font-bold">Built using React & Tailwind</p>
              <p className=" m-2 shadow-lg p-2 rounded bg-slate-100">This quiz project is an interactive platform that allows users to test their knowledge on various topics through a quiz. The quiz has multiple categories to choose from, and each category has over 10+ questions. The questions in each category are randomized using a function, ensuring that each user gets a unique set of questions every time they take the quiz.

When a user clicks on a category, they are presented with five questions to answer. After completing the quiz, the user is provided with their score and the option to see their wrong answers, allowing them to learn from their mistakes.</p>

              

              <a className="text-blue-400 underline" href="https://master--cosmic-axolotl-607d43.netlify.app/?fbclid=IwAR2g7kgHOIHxJZdq3ZhdJqPDcq8FmCBrqN2wgcZjUAs70EdSJyIcC6phjhQ" target="_blank" rel="noopener noreferrer">Go to Quiz website</a>

            </div>

          </div>
       
      </div>
      <div className="w-full bg-white py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <p className="text-[#00df9a] uppercase font-bold text-xl sm:text-4xl">
              Picture Pairing Game
              </p>
            <img 
            onClick={() => window.location.href="https://github.com/tollispa/Pair-cards-game"}
            style={{objectFit: "contain", maxHeight: "280px", minHeight:"280px", cursor: "pointer"}}className="block w-full h-full mx-auto my-4 ease-in-out duration-500 transition"src={slides4[`${currentIndex4}`].url} alt="/"/>
           
            <div className="flex flex-col justify-center">
              <button className="bg-black w-36 text-white rounded py-4 m-4" onClick={slideImage4}>Next Image</button>
              <h1 className="md:text-4xl sm:text-2xl font-bold py-2 m-4">{h1Tag4} <br/><span className="text-black/40">{currentIndex4 +1}/{total4}</span></h1>
              <p className=" m-4 font-bold">Built using React & Tailwind</p>
              <p className=" m-2 shadow-lg p-2 rounded bg-slate-100">In this game the player has to pair 2 pictures that "matches", for each match the "Cards left to pair" goes down. When it reaches 0, that means the player has paired all pictures displaying on the page correctly and the game ends.</p>

              

              <a className="text-blue-400 underline" href="https://fascinating-gecko-27250f.netlify.app/?fbclid=IwAR2q2PXpdJb4NVabtbiyXdeeHfyrLYtk6NgG4qcMUyVit1VVWbxgb0GUv4Y" target="_blank" rel="noopener noreferrer">Go to Picture Pair Game website</a>

            </div>

          </div>
       
      </div>
      </>
    )
}

export default Projects