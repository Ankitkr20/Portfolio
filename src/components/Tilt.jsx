import React,{useEffect, useRef} from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
    const tiltRef = useRef(null);

    useEffect(() =>{
        if(tiltRef.current){
            VanillaTilt.init(tiltRef.current,{
                max: 45,
                glare: true,
                speed: 400,
                "max-glare": 0.2
            })
        }
    },[])
  return (
    <div ref= {tiltRef} className=''>
    {children}
    </div>
  )
}

export default Tilt