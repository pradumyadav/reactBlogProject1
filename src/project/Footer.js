import { NavLink } from "react-router-dom";


export default function Footer (){
    return(
        <>
        <div className="footer_Parent">
                <div></div>
                <div></div>
                <div></div>
            <div className="footer_Child">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/bollywood">Bollywood</NavLink>
                <NavLink to="/hollywood">Hollywood</NavLink>
                <NavLink to="/technology">Technology</NavLink>
                <NavLink to="/fitness"> Fitness</NavLink>
                <NavLink to="food"> Food</NavLink>
                </div>
                
        </div>
        </>
    )
}


