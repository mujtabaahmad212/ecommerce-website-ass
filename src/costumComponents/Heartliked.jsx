import {useState} from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Heartliked() {
  let [isliked , setisliked] = useState(false)
  let togglelike = ()=>{
    setisliked(!isliked);
  }
  let styles ={color: 'red',
    cursor:'pointer',
    width: '1.5rem',
  }
  return(
    <div className="w-6 flex justify-center items-center h-6 ">
      <h2 onClick={togglelike}>
        {isliked ? <FaHeart style={styles} />  : <CiHeart className="cursor-pointer w-6 h-6"/>}
      </h2>
    </div>
  )
}