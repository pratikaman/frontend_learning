import React, {useState} from "react";

function Card() {


  // use state returns a array. 1st element is the state and 2nd element is the function to update the state.
  // const ans = useState(4); 
  const [value, setValue] = useState(true); 

  const songs = [
    {
      songName: "WAP",
      lyrics: `Whores in this house There's some whores in this house
      There's some whores in this house
      There's some whores in this house (hol' up)
      I said certified freak, seven days a week
      Wet ass pussy, make that pullout game weak, woo! (Ah)`,
    },
    {
      songName: 'DNA.',
      lyrics: `I got, I got, I got, I got
      Loyalty, got royalty inside my DNA
      Cocaine quarter piece, got war and peace inside my DNA
      I got power, poison, pain and joy inside my DNA
      I got hustle though, ambition, flow inside my DNA
      I was born like this, since one like this, immaculate conception
      I transform like this, perform like this, was Yeshua new weapon
      I don't contemplate, I meditate, then off your fucking head
      This that put-the-kids-to-bed`
    }
  ];

  const handleClickDownload = () => {alert("wanna downlaod?")};

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-10 items-center justify-center">

    <div className="text-4xl text-red-500 ">{value.toString()}</div>
    <button onClick={()=>setValue(!value)} className="px-2 py-1 bg-purple-700 rounded text-zinc-200">Click me</button>


      {songs.map((e, index)=>(
        <div key={index}  className="song w-80 px-3 py-2 bg-zinc-100 rounded">
        <h3 className="font-semibold  text-xl">{e.songName}</h3>
        <p className="text-xs mt-2">{
         e.lyrics
            }
        </p>
        <button onMouseOver={handleClickDownload} className="px-2 py-1 bg-blue-400 rounded-md mt-3 text-sm text-zinc-100 font-semibold">
          Download now
        </button>
      </div>
      ))}
    </div>
  );
}

export default Card;
