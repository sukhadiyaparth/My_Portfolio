import React from 'react'
import "./Ex.css";
import { getImageUrl } from "../../utils";
function Experience() {
  return (
    <div className='Experience exp-md exp-sm'>
<div className="title">
  <h1 className='title-md'>Experience
  </h1>
  <p> These are The Technologies I've Worked With </p>
</div>

<div class="grid-container grid-co-md">
  <div class="grid-item1">     
<img src={getImageUrl("skills/html.png")} alt="" />
  <h3>Html</h3>
  </div>
  <div class="grid-item2">
  <img src={getImageUrl("skills/css.png")} alt="" />
  <h3>Css</h3>
  </div>
  <div class="grid-item3">
    
  <img src={getImageUrl("skills/github.png")} width="100px" alt="" />
  <h3>Github</h3>
    </div>  
  <div class="grid-item4">
  <img src={getImageUrl("skills/javascript.png")} width="100px" alt="" />
  <h3>Javascript</h3>
  </div>
  <div class="grid-item5">
  <img src={getImageUrl("skills/react.png")} width="100px" alt="" />
  <h3>React</h3>
  </div>
  <div class="grid-item6">
  <img src={getImageUrl("skills/tailwind.png")} width="100px" alt="" />
  <h3>Tailwind</h3>
  </div>  
  <div class="grid-item7">
  <img src={getImageUrl("skills/node.png")} width="100px"alt="" />
  <h3>Node</h3>
  </div>
  <div class="grid-item8">
  <img src={getImageUrl("skills/mongodb.png")} width="100px"alt="" />
  <h3>Mongodb</h3>
  </div>
  <div class="grid-item9">
  <img src={getImageUrl("skills/graphql.png")}width="100px" alt="" />
  <h3>Graphql</h3>
    </div>  
</div>
    </div>
  )
}

export default Experience