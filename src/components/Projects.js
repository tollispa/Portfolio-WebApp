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




import { useState , useEffect} from "react"

const Projects = () => {
const [currentIndex, setCurrentIndex] = useState(0)
const [currentIndex2, setCurrentIndex2] = useState(0)
const [currentIndex3, setCurrentIndex3] = useState(0)


const [h1Tag, seth1Tag] = useState("")
const [h1Tag2, seth1Tag2] = useState("")
const [h1Tag3, seth1Tag3] = useState("")

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


  useEffect(() => {
seth1Tag(currentIndex === 0 ? "Login Page" : "Login Page")
  },[])
  useEffect(() => {
    seth1Tag2(currentIndex2 === 0 ? "Movie categories" : "Movie categories")
      },[])

      useEffect(() => {
        seth1Tag3(currentIndex3 === 0 ? "Choose Quiz Category" : "Choose Quiz Category")
          },[])
  const total = slides.length
  const total2 = slides2.length
  const total3 = slides3.length
 

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
 

    return (
      <>
        <div id ="projects"className="w-full bg-white py-0 px-4">
          <h1 className="text-[#00df9a] font-bold p-2 uppercase text-3xl"> MY PROJECTS.</h1>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img 
            onClick={() => window.location.href='https://github.com/tollispa/Fullstack-App-with-React-SQL-Express'}
            style={{objectFit: "contain", maxHeight: "280px", minHeight:"280px", cursor: "pointer"}}className="block w-full h-full mx-auto my-4 rounded duration-500"src={slides[`${currentIndex}`].url} alt="/"/>
            <div className="flex flex-col justify-center">
              <p className="text-[#00df9a] uppercase font-bold m-2 sm:text-4xl">
                Fullstack project
              </p>
              <button className="bg-black w-36 text-white rounded py-4 m-4" onClick={slideImage}>Next Image</button>
              <h1 className="md:text-4xl sm:text-2xl font-bold py-2 m-4">{h1Tag} <br/><span className="text-black/40">{currentIndex +1}/{total}</span></h1>
              <p className="m-4 font-bold">Built using Nodejs, React, SQL, Express and Axios</p>
            </div>

          </div>
       
      </div>
      <div className="w-full bg-white py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img 
            onClick={() => window.location.href="https://github.com/tollispa/Netflix-clone"}
            style={{objectFit: "contain", maxHeight: "280px", minHeight:"280px", cursor: "pointer"}}className="block w-full h-full mx-auto my-4 ease-in-out duration-500 transition"src={slides2[`${currentIndex2}`].url} alt="/"/>
           
            <div className="flex flex-col justify-center">
              <p className="text-[#00df9a] uppercase font-bold m-2 sm:text-4xl">
               Netflix clone
              </p>
              <button className="bg-black w-36 text-white rounded py-4 m-4" onClick={slideImage2}>Next Image</button>
              <h1 className="md:text-4xl sm:text-2xl font-bold py-2 m-4">{h1Tag2} <br/><span className="text-black/40">{currentIndex2 +1}/{total2}</span></h1>
              <p className=" m-4 font-bold">Built using React & Tailwind & Axios</p>
            </div>

          </div>
       
      </div>
      <div className="w-full bg-white py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img 
            onClick={() => window.location.href="https://github.com/tollispa/javascript-quiz-app"}
            style={{objectFit: "contain", maxHeight: "280px", minHeight:"280px", cursor: "pointer"}}className="block w-full h-full mx-auto my-4 ease-in-out duration-500 transition"src={slides3[`${currentIndex3}`].url} alt="/"/>
           
            <div className="flex flex-col justify-center">
              <p className="text-[#00df9a] uppercase font-bold m-2 sm:text-4xl">
              Quiz
              </p>
              <button className="bg-black w-36 text-white rounded py-4 m-4" onClick={slideImage3}>Next Image</button>
              <h1 className="md:text-4xl sm:text-2xl font-bold py-2 m-4">{h1Tag3} <br/><span className="text-black/40">{currentIndex3 +1}/{total3}</span></h1>
              <p className=" m-4 font-bold">Built using React & Tailwind</p>
              <a className="text-blue-400 underline" href="https://master--cosmic-axolotl-607d43.netlify.app/?fbclid=IwAR2g7kgHOIHxJZdq3ZhdJqPDcq8FmCBrqN2wgcZjUAs70EdSJyIcC6phjhQ" target="_blank" rel="noopener noreferrer">Go to Quiz website</a>

            </div>

          </div>
       
      </div>
      </>
    )
}

export default Projects