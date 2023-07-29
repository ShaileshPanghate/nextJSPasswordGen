"use client"

import React, { useState ,useRef } from 'react';


type lengthType = number;
type typesInput = boolean;
type passwordtype = string;

 function  Home() {
  const [passwordLength, setPasswordLength] = useState<lengthType>(10);
  const [includeSymbols, setIncludeSymbols] = useState<typesInput>(false);
  const [includeNumber, setIncludeNumber] = useState<typesInput>(false);
  const [includeCapital, setIncludeCapital] = useState<typesInput>(false);
  const [includeString, setIncludeString] = useState<typesInput>(true);
  const [password, setPassword] = useState<passwordtype>('');
  const passwordDataRef = useRef<HTMLTextAreaElement>(null);
  
function handlechangeLength(event: React.ChangeEvent<HTMLInputElement>){
  let newLength : string = event.target.value;
  const parsed = parseInt(newLength, 10);
  setPasswordLength(parsed);
 }

function handleChangeNumber(){
  setIncludeNumber(!includeNumber);
}
function handlechangeSymbol(){
  setIncludeSymbols(!includeSymbols)
}
function handlechangeCapital(){
  setIncludeCapital(!includeCapital)
}
function handleChangeString(){
  setIncludeString(!includeString)
}

const handleGeneratePassword = () => {
  setPassword("");
  const passwordTxt = document.querySelector("textarea");
    generatePassword(passwordLength, includeSymbols, includeNumber, includeCapital, includeString)
 
};

const handleCopy =() =>{

if (passwordDataRef.current) {
  passwordDataRef.current.select();
}
   document.execCommand('copy');   
   alert('Text copied to clipboard!');
}


const generatePassword = (passwordLength:number, includeSymbols:typesInput, includeNumber:typesInput, includeCapital:typesInput, includeString:typesInput) =>{
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let validChars = "";

  if(includeString)
  {
     validChars += lowerChars;    
  }
 
  if(includeCapital)
  {
    validChars += upperChars;
  }
  if(includeSymbols)
  {
    validChars += symbolChars;
  }
  if(includeNumber)
  {
    validChars += numberChars;
  }
  let password = '';
  if(includeSymbols==false && includeNumber==false && includeCapital==false && includeString==false)
  {
    alert("Please select character type!!")
  }
  else
  {
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }
  }
 
  console.log(password);
  setPassword(password);
}

  return (
    <div className="text-white bg-black" >
     
      <div className="grid justify-items-center mb-20 mt-6">

       <h1 className="uppercase font-bold tracking-wider hover:tracking-widest text-5xl" style={{textShadow:" 2px 3px #145485"}}>Password Generator</h1>
      </div>
       
       <div className="grid justify-items-center">

          <div className="flex mb-10 ">

              <textarea name="" id="" value={password}  ref={passwordDataRef} cols={80} rows={1} placeholder='Password will show here!' className="text-stone-950 rounded-lg border-solid border-2 border-black-400 hover:border-blue-400  py-2 pl-9 pr-3 bg-indigo-50"></textarea>&nbsp;&nbsp;&nbsp;&nbsp;

                <button  className="rounded-lg border-black text-lg text-white px-8 py-2 bg-sky-500 hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring focus:ring-sky-300"
                    onClick={handleCopy} >
                  Copy
                  </button>
          </div>
          
          
          <div className="mb-14">
            <button onClick={handleGeneratePassword} className="rounded-lg border-black text-lg text-white px-8 py-2 ml-10 bg-sky-500 hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring focus:ring-sky-300">
              Generate Password
              </button>
          </div>
          
          <div className="ml-10">
                <div className="mb-10">
                    <label htmlFor="" style={{textShadow:" 1px 2px #0284c7"}} className="text-lg hover:tracking-wide">Length : </label> &nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor=""style={{textShadow:" 1px 2px #0284c7"}}>4 </label>
                      <input type="range"  min="4" max="20"   value={passwordLength}
                                onChange={handlechangeLength} className="hover:cursor-pointer"/>
                        <label htmlFor="" style={{textShadow:" 1px 2px #0284c7"}}> 20 </label>
                </div>
              
                <div>

                      <div className="div1">
                          <label htmlFor="" className="text-lg hover:tracking-wide" style={{textShadow:" 1px 2px #0284c7"}}> Number : </label>
                          <div className="t_btn1">
                              <label className="toggle-switch ">
                                  <input type="checkbox" checked={includeNumber} onChange={handleChangeNumber}/>
                                  <span className="slider"></span>
                              </label>
                            </div>
                      </div>
                      <br />

                    <div className="div1">
                        <label htmlFor="" className="text-lg hover:tracking-wide" style={{textShadow:" 1px 2px #0284c7"}}> Symbol : </label>
                        <div className="t_btn2">
                              <label className="toggle-switch">
                                <input type="checkbox" checked={includeSymbols} onChange={handlechangeSymbol}/>
                                <span className="slider"></span>
                              </label>
                        </div>
                    </div>
                    <br />

                    <div className="div1">
                        <label htmlFor="" className="text-lg hover:tracking-wide" style={{textShadow:" 1px 2px #0284c7"}}> Capital : </label>
                        <div className="t_btn3">
                              <label className="toggle-switch">
                                <input type="checkbox" checked={includeCapital} onChange={handlechangeCapital}/>
                                <span className="slider"></span>
                              </label>
                        </div>
                    </div>
                    
                    <br />
                    <div className="div1">
                        <label htmlFor="" className="text-lg hover:tracking-wide" style={{textShadow:" 1px 2px #0284c7"}}> String : </label>
                        <div className="t_btn4">
                              <label className="toggle-switch">
                                <input type="checkbox" checked={includeString} onChange={ handleChangeString}/>
                                <span className="slider"></span>
                              </label>
                        </div>
                    </div>
                    

                  <br />
                </div>

              
          </div>
        </div>
    </div>
  );
};


export default Home;