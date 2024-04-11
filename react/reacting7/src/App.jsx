import { useState } from 'react'
import Card from './components/Card'

function App() {



  const data = [
    { userName: 'John Doe', profession: "Musician", img: "https://plus.unsplash.com/premium_photo-1664036154109-31e0624d29c7?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", follow: false},
    { userName: 'Pratik', profession: "Teacher", img: "https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", follow: false},
    { userName: 'Neha', profession: "Painter", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", follow: false},
    { userName: 'Priya', profession: "Engineer", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", follow: false},
  ];


  const [val, setVal] = useState(data);
  const follow = (name) => setVal(
    () => val.map((e)=> e.userName === name ? {...e, follow: !e.follow} : e)
  );


  return (
    <div className='w-screen h-fit min-h-screen p-4 bg-purple-800 flex justify-center items-center gap-4 flex-wrap '>
    {val.map((e, index)=><Card key={index} name= {e.userName} profession={e.profession} img={e.img} func={follow} isfollow={e.follow}/>)}
    </div>
  )
}

export default App
