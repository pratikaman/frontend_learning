import { useState } from 'react'
import Card from './components/Card'

function App() {
 

  return (
    <div className=' h-screen w-full p-4 flex flex-col flex-shrink items-center justify-center gap-4 bg-slate-800'>
    <Card cta="click" color="bg-purple-400"/>
    <Card cta="download" color="bg-red-400"/>
    </div>
  )
}

export default App
