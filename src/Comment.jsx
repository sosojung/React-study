import { useState } from 'react';
import './App.css'

function Comment (props) {
    const [like, setLike] = useState(0);
    const [unLike, setUnLike] = useState(0)

    return (
      <div className = "wrapper">
        <div className = "imageContainer">
          <img
            className="image" style={{width: "50px", height: "50px"}}
            src="https://lh4.googleusercontent.com/proxy/q0EiUZhIOyLHiHMUyswmKoIMIc32WsKTM-IKDwRllm0LQ_ca7yrIrRPshhLkpDCYBiA0ZN3NnCSwf-R9HSsXdtyehh0W4GCQpfh6Cs_DvZN5uVcLesDsljLE-Z0zhLGDG-3GItr0TcZ3x8i3EObJx5-LXSORuCviimu7JZKUND-jFXLbPXU"
          />
        </div>
        <div className =  "contentontainer">
          <span
            className = "nameText"
            style={{color : "darkcyan", fontWeight: "bold"}}
          >
            {props.name}
          </span>

          <span className = "okText">
            <span onClick={()=>setLike(like+1)}>👍{like}</span>
            <span onClick={()=>setUnLike(unLike+1)}>👎🏿{unLike}</span>
          </span>
          <span className = "commentText">{props.content}</span>
        </div>
      </div>
    )
  }

  export default Comment;