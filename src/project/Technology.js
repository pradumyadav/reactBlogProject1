import { useContext } from "react"

import { dataRoom } from "./Parentdata"
import { Link,NavLink } from "react-router-dom"
export default function Technology() {

    const [technology_From_dataRoom]= useContext(dataRoom)

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
         <h1 >Technology</h1>
         <hr className="HR"/>

         <span className="top_Post">Top post </span>
         <hr className="HR1"/>


        <div className="technology_Parent">

            <div className="call_1">
            {technology_From_dataRoom.filter((item)=>item.ID>=34 && item.ID<42).map((item,index)=>{
                    return(
                        <div className="childcompo" key={index}>
                             <NavLink to={`/ContentDeatails/${item.ID}`}>
                            <div className="titlediv">{item.dataTitle.slice(0,35)}...</div>
                            <div className="img"> <img src={item.dataImage} style={{width:"300px",height:"170px"}}/></div>
                            <div className="p1">{item. description.slice(0,100)}.....</div>
                            </NavLink>
                        </div>
                    )
            })}
            </div>


            <div  className="call_2">

            <div className="latest_post">
            {technology_From_dataRoom.filter((item)=>item.ID ===48).map((item,index)=>{
                return(
                    <div key={index}>
                        <NavLink to={`/ContentDeatails/${item.ID}`}>
                        <div><img src={item.dataImage} style={{width:"330px",height:"210px"}}/></div>
                        <div className="latest_post2"> {item.dataTitle}...<div className="one">{index+1}</div></div>
                        </NavLink>
                    </div>
                )
            })}
           </div>

            {technology_From_dataRoom.filter((item)=>item.ID>=42 && item.ID <=50).map((item,index)=>{
                    return(
                        <div className="left_Div"  key={index}>
              <NavLink to={`/ContentDeatails/${item.ID}`}><div  className="right_description">{item.description .slice(0,20)}...<h1 className="count">{index+2}</h1></div> 
                        <img className="right_image" src={item.dataImage} style={{width:"130px"}}/>
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
        </>
    )
}


