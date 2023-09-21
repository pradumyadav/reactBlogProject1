import { useNavigate, useParams } from "react-router-dom"
import { dataRoom } from "./Parentdata"
import { useContext } from "react"

import d1img from "../asset/facebook.png"
import d2img from "../asset/instagram.png"
import d3img from "../asset/twitter.png"
import d4img from "../asset/github.png"
import d5img from "../asset/icons8-share-48.png"
import d6img from "../asset/icons8-thumb.gif"
   export default function ContentDeatails (){
                const back= useNavigate()

                const ID=useParams().ID
                console.log(ID)
               
                const [data_Fro_ContentDeatails]=useContext(dataRoom)
                console.log(data_Fro_ContentDeatails)
                const cat_of_useconte = data_Fro_ContentDeatails[ID].Type ;
                console.log(cat_of_useconte)
               
              
            
            return(

                <div>

                <div className="parent_Of_dynamic">

                    <div className="subparent_Of_dynamic">
                    {data_Fro_ContentDeatails.filter((item)=>item.ID===parseInt(ID))
                    .map((item,index)=>{
                        return(
                            <div key={index}>
                                 <div className="title_for_dynamic">{item.dataTitle}</div>
                                 <div className="sticker_parent">
                                 <div className="sticker">🏋️‍♂️</div>
                                 <div className="name_surname-parent">
                                 <div className="name">Pradum Yadav</div>    
                                 <div className="date">Sep 18,2023 .15 min read </div>
                                 </div>
                                 <span><img className="d1img"src={d1img}/></span>
                                 <span><img className="d2img"src={d2img}/></span>
                                 <span><img className="d3img"src={d3img}/></span>
                                 <span><img className="d4img"src={d4img}/></span>
                                 </div>
                                <div><img className="image_for_dynamic"src= {item.dataImage}/> </div>  
                                  <div className="description_for_dynamic"> {item. description}</div> 
                            </div>
                        )
                    })}


                    <div className="parent_Thumb_share">
                  <div><img src={d6img}/></div>
                    <div><img src={d5img}/></div>
                    </div>
                    <div className="sticker_Bottom_Border">
                    <div className="sticker_parent">
                                 <div className="sticker">🏋️‍♂️</div>
                                 <div className="name_surname-parent">
                                 <div className="name">Pradum Yadav</div>    
                                 <div className="date">Sep 18,2023 .15 min read </div>
                                 </div>
                                 </div>
                    </div>
                    <button className="back_button"  onClick={()=>back(-1)}>Back</button>
                    </div>
                    {/* dynamic related DIVs */}
                 
                </div>
                <div className="dynamicSpan">More From The Siren</div>
                <div className="dynamic_Related_Footer">
                
                       
                       {data_Fro_ContentDeatails.filter((item)=>item.Type===cat_of_useconte ).slice(0,3)
                       .map((item,index)=>{
                           return(
                               <div className="dynamic_Subchild" key={index}>
                                 
                                   <div><img className="image_for_dynamic2"src= {item.dataImage}/> </div>  
                                    <div className="title_for_dynamic2">{item.dataTitle .slice(0,100)}...</div>
                                 
                                   

                                    
                                    <div className="sticker_parent">
                                 <div className="sticker">🏋️‍♂️</div>
                                 <div className="name_surname-parent">
                                 <div className="name">Pradum Yadav</div>    
                                 <div className="date">Sep 18,2023 .15 min read </div>
                                 </div>
                                 </div>
                            
                               </div>
                           )
                       })}
                           
                       </div>
                </div>
            )
        }





