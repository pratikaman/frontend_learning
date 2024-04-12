import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {

  const data = [
    {songName: "HUMBLE", artist:"Kendrik Lamar", image:"https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png", added: false},
    {songName: "No Role Modelz", artist:"J Cole", image:"https://upload.wikimedia.org/wikipedia/en/2/2a/2014ForestHillsDrive.jpg", added: false},
    {songName: "Diamonds", artist:"Rihanna", image:"https://upload.wikimedia.org/wikipedia/en/e/e8/Diamonds_-_Rihanna.png", added: false},
    {songName: "Black Beatles", artist:"Rae sremmurd", image:"https://upload.wikimedia.org/wikipedia/en/8/88/Rae_Sremmurd_%E2%80%93_Black_Beatles.jpg", added: false},
    {songName: "Ambitionz Az A Ridah", artist:"2 Pac", image:"https://upload.wikimedia.org/wikipedia/en/1/16/Alleyezonme.jpg", added: false},
    {songName: "All of the Lights", artist:"Kanye west", image:"https://images.genius.com/93c0d1b54a6bdd54ca43b09daebf7e31.1000x1000x1.jpg", added: false},
  ]

  const [val, setVal] = useState(data)

  const handleClick = (songIndex) => {
    setVal((prev)=>{
      return prev.map(
        (e, index) => (songIndex === index ? {...e, added: !e.added} : e)
      );
    })
  }


  return (
    <div className="w-screen h-fit min-h-screen bg-purple-500 ">
      <Navbar songs={val}/>
      <div className="px-20 flex justify-center gap-x-10 gap-y-20 mt-10 flex-wrap">
      {val.map((e, index)=> <Card key={index} songName={e.songName} artist={e.artist} image={e.image} added={e.added} index={index} handleCLick={handleClick}/>)}  
      </div>
    </div>
  );
}

export default App;
