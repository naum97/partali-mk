import React from "react";
import classes from "./ProductPage.module.css";
import { NavLink } from "react-router-dom";
import placeholederImage from "..//..//assets/images/testImage.jpeg"
import QuickViewProduct from "../QuickViewProduct/QuickViewProduct";
import Comment from "..//Comment/Comment"
import AddComment from "..//Comment/AddComment"

const comments =[
    {
        user:"Teodor Nikola",
        comment:"This is a very good product. Delivery time was excellent. Very good quality!!! (Y)",
        image:placeholederImage
        
    },
    {
        user:"Naum Anteski",
        comment:"I got the same product on amazon. Looking forward for a mobile site. Keep up the good work",
        image:placeholederImage
    },
    {
        user:"Nina Pjevac",
        comment:"Very nice. The best!!!",
        image:placeholederImage
    },
    {
        user:"Damjan Jovanovski",
        comment:"Can I buy it with bitcoins???MNAV is better",
        image:placeholederImage
    }
]
const ProductPage = () =>{
    return (
        <div className={classes.Container}>
            <nav className={classes.Menu}>
                <ul className={classes.Menu}>
                    <li>
                        <NavLink exact to="/">
                             Дома
                        </NavLink>
                     </li>
                </ul>
            </nav>
            <QuickViewProduct/>
            <AddComment/>
            {comments.map((comment,id)=>(
                <Comment key={id} {...comment}/>
            ))}
            
        </div>
    )
}

export default ProductPage