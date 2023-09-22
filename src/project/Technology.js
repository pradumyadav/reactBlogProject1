import { useContext } from "react"

import { dataRoom } from "./Parentdata"
import {NavLink } from "react-router-dom"
import Footer from "./Footer"
export default function Technology() {

    const [technology_From_dataRoom]= useContext(dataRoom)

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
         
       


        <div className="technology_Parent">

            <div className="call_1">
            <h1 className="top_h1">Technology <hr className="hr"/></h1>
            {technology_From_dataRoom.filter((item)=>item.ID>=34 && item.ID<42).map((item,index)=>{
                    return(
                        <div className="childcompo" key={index}>
                             <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}>
                            <div className="titlediv">{item.dataTitle.slice(0,10)}...</div>
                            <div className="img"> <img src={item.dataImage} alt="Not Found" className="all_Left_Image"/></div>
                            <div className="p1">{item.description.slice(0,50)}.....</div>
                            </NavLink>
                        </div>
                    )
            })}
            </div>


            <div  className="call_2">
            <h1 className="top_h1">Top post <hr className="hr"/></h1>
            <div className="latest_post">
            {technology_From_dataRoom.filter((item)=>item.ID ===48).map((item,index)=>{
                return(
                    <div key={index}>
                        <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}>
                        <div><img src={item.dataImage} alt="Not Found" className="all_Top_Post_Images"/></div>
                        <div className="latest_post2"> {item.dataTitle}...</div>
                        </NavLink>
                    </div>
                )
            })}
           </div>

            {technology_From_dataRoom.filter((item)=>item.ID>=42 && item.ID <=49).map((item,index)=>{
                    return(
                        <div className="left_Div"  key={index}>
              <NavLink className="navlink"to={`/ContentDeatails/${item.ID}`}><div  className="right_description">{item.description.slice(0,15)}...<h1 className="count">{index+2}</h1></div> 
                        <img className="right_image" alt="Not Found" src={item.dataImage}/>
                        </NavLink>
                          
                        </div>
                    )
            })}
                 <div className="advertisement">
                <div>
                Advertisement
                </div>
            </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}


