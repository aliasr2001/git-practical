import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState('8')
  const [numAllowed, setNumAllowed] = useState(false)
  const [scharAllowed, setScharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef()

  let copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,65)
    window.navigator.clipboard.writeText(password)
  }, [password])

  let passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numAllowed) str += '0123456789'
    if(scharAllowed) str += '!@#$%^&*-_+=~'

    for(let i = 1; i <= length; i++){
      let charNum = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charNum)
    }
    setPassword(pass)

  }, [length, numAllowed, scharAllowed, setPassword])
   useEffect(() => {
      passwordGenerator()
   }, [length, numAllowed, scharAllowed]) 


  return (
    <>
    
    <div className='w-full max-w-lg mx-auto bg-gray-700 px-4 py-3 my-8 rounded-lg shadow-md '>
      <h1 className='text-3xl text-center text-white my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        className="outline-none w-full py-1 px-3 text-lg text-orange-500"
        placeholder='Password'
        value={password}
        readOnly
        ref={passwordRef}
        />
        <button className={`bg-blue-500 p-3 text-white text-lg hover:bg-blue-400 transition-all duration-200`} onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='flex gap-x-2'>
        <div className="flex items-center gap-x-1">
        <input type="range" 
        min={8}
        max={64}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label className='text-orange-400 text-lg'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}
          />
          <label className='text-orange-400 text-lg'>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={scharAllowed}
          id='charInput'
          onChange={() => {
            setScharAllowed((prev) => !prev)
          }}
          />
          <label className="text-orange-400 text-lg">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
