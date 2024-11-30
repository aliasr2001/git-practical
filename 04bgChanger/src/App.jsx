import { useState } from "react";

function App(){
  const [color, setColor] = useState('')
  return (
      <>
      <div className="w-full h-screen flex justify-center items-end text-white transition-all duration-200" style={{backgroundColor: color}}>
        <div className="cont bg-white flex ex-wrap px-3 py-2 mb-6 rounded-3xl shadow-xl gap-3">
          <button onClick={() => setColor('')} className="outline-none text-black bg-slate-200 py-2 px-5 rounded-3xl shadow-xl">Default</button>
          <button onClick={() => setColor('red')} className="outline-none bg-red-500 py-2 px-5 rounded-3xl">Red</button>
          <button onClick={() => setColor('gray')} className="outline-none bg-slate-500 py-2 px-5 rounded-3xl">Slate</button>
          <button onClick={() => setColor('blue')} className="outline-none bg-blue-500 py-2 px-5 rounded-3xl">Blue</button>
        </div>
      </div>
      </>
  )
}

export default App;