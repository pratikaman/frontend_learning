import React from 'react'

function Card() {

  const data = [
    {
      image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1709968005_4121325.jpg?format=webp&w=480&dpr=2.0",
      itemName: "Venom: Desi",
      inStock: true,
      itemDesc: "Venom: Desi T-shirt. Official Marvel Merchandise. 100% Cotton. Regular Fit. Round Neck. Half Sleeves. Machine Wash Cold"
    },
    {
      image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710915257_2453511.jpg?format=webp&w=480&dpr=2.0",
      itemName: "Batman: Supervillain",
      inStock: false,
      itemDesc: "Batman: Supervillain T-shirt. Official DC Merchandise. 100% Cotton. Regular Fit. Round Neck. Half Sleeves. Machine Wash Cold"
    },
    {
      image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1692772880_7977730.jpg?format=webp&w=480&dpr=2.0",
      itemName: "TSS Originals: Retro Gamer",
      inStock: true,
      itemDesc: "TSS Originals: Retro Gamer T-shirt. Official The Souled Store Merchandise. 100% Cotton. Regular Fit. Round Neck. Half Sleeves. Machine Wash Cold"
    },
    {
      image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711810629_6965660.jpg?format=webp&w=480&dpr=2.0",
      itemName: "SS Originals: Cyber Vigilante",
      inStock: false,
      itemDesc: "SS Originals: Cyber Vigilante T-shirt. Official The Souled Store Merchandise. 100% Cotton. Regular Fit. Round Neck. Half Sleeves. Machine Wash Cold"
    }
  ];


  return (
    <div className='w-full h-screen bg-violet-900 flex items-center justify-center gap-10' >


      {

        data.map(
          
        (e,index)=>(
          
        <div  key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
          <img className='w-full h-full object-cover object-center ' src={e.image}></img>
        </div>
        <div className='w-full px-3 py-4 max-h-[150px] overflow-y-scroll'>
          <h2 className='font-semibold '>{e.itemName}</h2>
          <p className='text-sm '>{e.itemDesc}</p>
          <button className={`px-4 py-1 ${e.inStock ? 'bg-blue-500' : 'bg-red-600'}  text-xs rounded text-zinc-100 mt-3 `}>
            {e.inStock ? "In Stock" : "Out of Stock"}
          </button>
        </div>
      </div>

      )
      
      )
      
      }

      
    </div>
  )
}

export default Card