import React ,  {useState}  from"react";   
 function Header() {
    const[ hed, setHed] =useState('hed')

    function darkFunc(){
        setHed('dark')
        
    }
    function lghitFunc(){
        setHed('lghit')
    }
    return(
        <div className={hed}>
            <h1>logo</h1>
            <div className="link">
                <a href="">home</a>
                <a href="">home</a>
                <a href="">home</a>
                <a href="">home</a>
        
            </div>
            <div>
                <button onClick={()=>{darkFunc()}}> dark</button>
                <button onClick={()=>{ lghitFunc()}}>lghit</button>
            </div>

        </div>
    )
 }
 export default Header