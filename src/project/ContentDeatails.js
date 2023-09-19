import { useParams } from "react-router-dom"
import { dataRoom } from "./Parentdata"
import { useContext } from "react"



   export default function ContentDeatails (){

                const ID=useParams().ID
                console.log(ID)
                const [data_Fro_ContentDeatails]=useContext(dataRoom)
                console.log(data_Fro_ContentDeatails)
              
            
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
                                 
                                 </div>
                                <div><img className="image_for_dynamic"src= {item.dataImage}/> </div>  
                                  <div className="description_for_dynamic"> {item. description}</div> 
                            </div>
                        )
                    })}
                    
                    </div>
                    {/* dynamic related DIVs */}


                   
                 
                </div>

                <div className="dynamic_Related_Footer">
                       
                       {data_Fro_ContentDeatails.filter((item)=>item.ID>parseInt(ID)&&item.ID%4===0)
                       .map((item,index)=>{
                           return(
                               <div key={index}>
                                  
                                    <div className="title_for_dynamic">{item.dataTitle}</div>
                                   <div><img className="image_for_dynamic"src= {item.dataImage}/> </div>  
                                     <div className="description_for_dynamic"> {item. description}</div> 
                                     
                                   
                               </div>
                           )
                       })}
                           
                       </div>
                </div>
            )
        }





