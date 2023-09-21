import { useContext } from "react"
import {dataRoom} from "./Parentdata"


import "./Apply.css"
import {NavLink } from "react-router-dom"
import Footer from "./Footer"

export default function Bollywood(){

    const [data_for_Bollywood]=useContext(dataRoom)

    return(
        <>
         <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/bollywood">Bollywood</NavLink>
                <NavLink to="/hollywood">Hollywood</NavLink>
                <NavLink to="/technology">Technology</NavLink>
                <NavLink to="/fitness"> Fitness</NavLink>
                <NavLink to="/food"> Food</NavLink>
            </nav>

        <div className="bollywood_Parent">
            <div className="call_1">
            <h1 className="top_h1">Bollywood  <hr className="hr"/></h1>
           
                 {data_for_Bollywood.filter((item)=>item.ID >=1 && item.ID<=9)
                 .map((item,index)=>{ 
                return(
                <div className="childcompo" key={index}>
                     <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`} >
                     <div className="titlediv">{item.dataTitle.slice(0,30)}...</div>
            <img src={item.dataImage} alt="Not Found" style={{width:"300px",height:"170px"}}></img>
              <div className="p1">{item.description.slice(0,100)}..... </div>
                     </NavLink>
            
                 </div>
            
                )
                }
            )}
            </div>

           <div  className="call_2">
          
            <h1 className="top_h1">Top Post <hr className="hr"/></h1>
           <div className="latest_post">

            {data_for_Bollywood.filter((item)=>item.ID ===8).map((item,index)=>{
                return(
                    <div key={index}>
                        <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}>
                            <div><img src={item.dataImage} alt="Not Found" style={{width:"360px",height:"210px"}}/></div>
                        <div className="latest_post2"> {item.dataTitle}...<div className="one">{index+1}</div></div>
                        </NavLink>
                    </div>
                )
            })}
           </div>
           
            {data_for_Bollywood.filter((item)=>item.ID >9 && item.ID<=13).map((item,index)=>{ 
                return(
                 <div className="left_Div" key={index}>
                    <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}>
                    <div  className="right_description">{item.description.slice(0,29)}... <h1 className="count">{index+2}</h1></div>
                    
                   <div className="right_image"> <img src={item.dataImage} alt="Not Found" style={{width:"130px",height:"70px"}}></img></div>
                    </NavLink>
                   
                 </div>
                
                )
                }
            )}
              <div className="advertisement">
               
                Advertisement
                
            </div>

            </div> 
        </div>
        
        <Footer/>
       
        </>
    )
}

