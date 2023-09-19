import { useContext } from "react"
import {dataRoom} from "./Parentdata"


import "./Apply.css"
import { Link,NavLink } from "react-router-dom"

export default function Bollywood(){

    const [data_for_Bollywood]=useContext(dataRoom)

    return(
        <>
         <nav>
                <Link to="/">Home</Link>
                <Link to="/bollywood">Bollywood</Link>
                <Link to="/hollywood">Hollywood</Link>
                <Link to="/technology">Technology</Link>
                <Link to="/fitness"> Fitness</Link>
                <Link to="food"> Food</Link>
            </nav>
            <h1>Bollywood</h1>
            <hr className="HR"/>

            <span className="top_Post">Top post </span>
            <hr className="HR1"/>


        <div className="bollywood_Parent">
            <div className="call_1">
                 {data_for_Bollywood.filter((item)=>item.ID >=1 && item.ID<=8)
                 .map((item,index)=>{ 
                return(
                <div className="childcompo" key={index}>
                     <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`} >
                     <div className="titlediv">{item.dataTitle.slice(0,30)}...</div>
             <div  className="img">  <img src={item.dataImage} style={{width:"300px"}}></img></div> 
              <div className="p1">{item.description.slice(0,100)}..... </div>
                     </NavLink>
                 
                
                 </div>
            
                )
                }
            )}
            </div>

           <div  className="call_2">
           <div className="latest_post">

            {data_for_Bollywood.filter((item)=>item.ID ===8).map((item,index)=>{
                return(
                    <div key={index}>
                        <NavLink to={`/ContentDeatails/${item.ID}`}><div><img src={item.dataImage} style={{width:"330px",height:"210px"}}/></div>
                        <div className="latest_post2"> {item.dataTitle}...<div className="one">{index+1}</div></div>
                        </NavLink>
                    </div>
                )
            })}
           </div>
           
            {data_for_Bollywood.filter((item)=>item.ID >8 && item.ID<=15).map((item,index)=>{ 
                return(
                 <div className="left_Div" key={index}>
                    <NavLink to={`/ContentDeatails/${item.ID}`}>
                    <div  className="right_description">{item.description.slice(0,29)}... <h1 className="count">{index+2}</h1></div>
                    
                    <img  className="right_image" src={item. dataImage} style={{width:"130px",height:"80px"}}></img>
                    </NavLink>
                   
                 </div>
                
                )
                }
            )}
              <div className="advertisement">
                <div>
                Advertisement
                </div>
            </div>

            </div> 
        </div>
        </>
    )
}

