import { useState , useCallback ,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number , setNumber] = useState(false);
  const [char , setChar] = useState(false);
  const [password , setPassword] = useState("")

  const passwordRef = useRef(null);
  const btn = document.querySelector('.btn');

  const copyClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,31);
    window.navigator.clipboard.writeText(password);
    btn.style.color = 'black'
  },[password])
  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(number) str += '0123456789';
    if(char) str += '@#$%*';

    for(let i=1; i<=length; i++){
      let character = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(character)
    }

    setPassword(pass)
  } , [length , number , char , setPassword])

  useEffect(()=>{
    passwordGenerator();
  } , [length , number , char , passwordGenerator]);

  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-4 pb-3 text-orange-500 bg-gray-700">
          <h1 className='text-white text-center text-4xl my-3'>Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" 
              value={password}
              placeholder='password'
              className='w-full outline-none py-1 px-3'
              readOnly
              ref={passwordRef}
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 btn' onClick={copyClipBoard}>copy</button>
          </div>

          <div className="flex text-sm gap=x-2">
            <div className="flex items-center">
              <input type="range" min={8} max={30} value={length} onChange={(e)=>{setLength(e.target.value)}}
              className='cursor-pointer'/>
              <label className='mx-2'>Length : {length}</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" 
                id='numberChange'
                onChange={()=>{setNumber((prev)=> !prev)}}
              />
              <label className='mx-2'>Numbers</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" 
              defaultChecked={setChar}
                id='charInput'
                onChange={()=>{setChar((prev)=> !prev)}}
              />
              <label className='mx-2'>Character</label>
            </div>
          </div>
        </div>

    </>
  )
}

export default App
