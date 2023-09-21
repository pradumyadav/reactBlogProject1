import { useContext } from "react"
import { dataRoom } from "./Parentdata"
import { Link, NavLink } from "react-router-dom"
import Footer from "./Footer"


export default function Home(){
    const [homedata_from_roomData] = useContext(dataRoom)
    return(
            <>
            {/* <Navbar/> */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/bollywood">Bollywood</Link>
                <Link to="/hollywood">Hollywood</Link>
                <Link to="/technology">Technology</Link>
                <Link to="/fitness"> Fitness</Link>
                <Link to="food"> Food</Link>
            </nav>
            <div>
            {homedata_from_roomData.filter((item)=>item.ID === 0 )
            .map((item,index)=>{
                return(
                    <div className="home_Header"key={index}>
                
                     <img src={item.dataImage1} alt="Not Found" style={{width:"800px",height:"460px",marginRight:"65px",borderRadius:"20px"}}/>
                         <div className="home_Header2">
                       <img src={item.dataImage2} alt="Not Found" style={{width:"350px",height:"220px",marginBottom:"20px",borderRadius:"20px"}}/>
                       <img src={item.dataImage3} alt="Not Found" style={{width:"350px",height:"220px",borderRadius:"20px"}}/>
                     
                       </div>
                     
                    </div>
                )
            })}
            
            </div>
                
            <div className="the_Latest"><h2>The Latest   <hr className="hr"/></h2></div>
            
            {/* Section 2 */}
           <div className="home_flex">
            {homedata_from_roomData.filter((item)=>{return(item.ID===30||item.ID===43||item.ID===77)})
            .map((item,index)=>{
                return(
                   <div className="home_body"key={index}>
                     <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                     <div>  <img className="home_body_img"src={item.dataImage} alt="Not Found" style={{width:"370px",borderRadius:"15px"}}/></div>
                    <div className="home_Title ">{item.dataTitle.slice(0,50)}...</div>
                        <div className="home_description">{item.description.slice(0,150)}.....</div>
                     </NavLink>
                  
                   </div>
                )
            })}

               </div> 

                <h2 className="home_H2">Top Stories  <hr className="hr"/></h2>
                <h2 className="home_top_post">Top Post  <hr className="hr"/></h2>

               <div className="home_flex2">
                <div>
                {homedata_from_roomData.filter((item)=>{return(item.ID===4||item.ID===18||item.ID===45||item.ID===51||item.ID===59||item.ID===60||item.ID===81)})
            .map((item,index)=>{
                return (
                <div className="childcompo"key={index}>
                    <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                    <div className="titlediv">{item.dataTitle.slice(0,40)}...</div>
                 <div><img className="home_img" alt="Not Found" src={item.dataImage} style={{width:"300px"}}/> </div>
                    <div className="p1">{item.description.slice(0,130)}.....</div>  
                    </NavLink>
                     
                </div>
                )
            })}
                </div>

                <div>
                   
                <div className="latest_post">
            {homedata_from_roomData.filter((item)=>item.ID ===29).map((item,index)=>{
                return(
                    <div key={index}>
                         <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                         <div><img src={item.dataImage} alt="Not Found" style={{width:"330px",height:"210px"}}/></div>
                        <div className="latest_post2"> {item.dataTitle.slice(0,70)}...<div className="homeone">{index+1}</div></div>
                         </NavLink>
                       
                    </div>
                )
            })}
           </div>
                {homedata_from_roomData.filter((item)=>{return(item.ID===1||item.ID===16||item.ID===41||item.ID===84)})
            .map((item,index)=>{
                return (
                <div  className="left_Div" key={index}>

                    <NavLink className="navlink" to={`/ContentDeatails/${item.ID}`}>
                    <div className="right_description">{item.description.slice(0,29)}...<h1 className="count">{index+2}</h1></div>
                  <img className="right_image"src={item.dataImage} alt="Not Found" style={{width:"130px",height:"70px"}}/>
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


