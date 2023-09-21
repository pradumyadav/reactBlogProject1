import { useContext } from "react"
import { dataRoom } from "./Parentdata"
import {NavLink } from "react-router-dom"
import Footer from "./Footer"


export default function Fitness(){
    const [data_from_roomdata]= useContext(dataRoom)

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
         
        <div className="fitnessData">
            <div className="call_1">
            <h1  className="top_h1">Fitness <hr className="hr"/></h1>
            {data_from_roomdata.filter((item)=>item.ID>=51 && item.ID<59)
            .map((item,index)=>{
                return(
                    <div className="childcompo" key={index}>
                       <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}> <div className="titlediv">{item.dataTitle}...</div>
                         <div className="img"> <img src={item.dataImage}  alt="Not Found" style={{width:"300px",height:"170px"}}/></div>
                         <div className="p1">{item. description.slice(0,130)}.....</div>
                         </NavLink>
                    </div>
                )
            })}</div>
            <div className="call_2">
            <h1 className="top_h1">Top post <hr className="hr"/></h1>
            <div className="latest_post">
            {data_from_roomdata.filter((item)=>item.ID ===64).map((item,index)=>{
                return(
                    <div key={index}>
                         <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                         <div><img src={item.dataImage} alt="Not Found" style={{width:"360px",height:"210px"}}/></div>
                        <div className="latest_post2"> {item.dataTitle}...<div className="one">{index+1}</div></div>
                         </NavLink>
                        
                    </div>
                )
            })}
           </div>
            {data_from_roomdata.filter((item)=>item.ID>=60 && item.ID<=64)
            .map((item,index)=>{
                return(
                    <div  className="left_Div" key={index}>
                        <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}><div className="right_description">{item.dataTitle}...<h1 className="count">{index+2}</h1></div>
                         <img  className="right_image" src={item.dataImage} alt="Not Found" style={{width:"120px"}}/></NavLink>
                       
                       
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