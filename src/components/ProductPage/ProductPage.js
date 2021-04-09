import React ,{useEffect,useRef} from "react";
import classes from "./ProductPage.module.css";
import { NavLink } from "react-router-dom";
import placeholederImage from "..//..//assets/images/testImage.jpeg"
import QuickViewProduct from "../QuickViewProduct/QuickViewProduct";
import Comment from "..//Comment/Comment"
import AddComment from "..//Comment/AddComment"


//ova da se stavi vo nekoj shared folder poso dosta korisna stvar e
// ako nejkesh nekoj state na first render da ti go pokazuva
// vo ovoj primer komentarot e prazen i otkoa ke go smeni vo useEffect togash se dodava, inaku dodoava prazen komentar na prv render
export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

const comms =[
    {
        user:"Teodor Nikola",
        comment:"This is a very good product. Delivery time was excellent. Very good quality!!! (Y)",
        image:placeholederImage,
        date:"01/21/2021, 11:52:13 AM"  
    },
    {
        user:"Naum Anteski",
        comment:"I got the same product on amazon. Looking forward for a mobile site. Keep up the good work",
        image:placeholederImage,
        date:"01/21/2021, 11:52:13 AM"
    },
    {
        user:"Nina Pjevac",
        comment:"Very nice. The best!!!",
        image:placeholederImage,
        date:"01/21/2021, 11:52:13 AM"
    },
    {
        user:"Damjan Jovanovski",
        comment:"Can I buy it with bitcoins???MNAV is better",
        image:placeholederImage,
        date:"01/21/2021, 11:52:13 AM"
    }
]



const ProductPage = () =>{

    const firstRender = useFirstRender();
    const [newComment,setNewComment] = React.useState()
    const [commentList,setCommentList] = React.useState(comms)

    useEffect(()=>{
        if(!firstRender){
            const newCommentList =[...commentList]
            const date = new Date().toLocaleString() + ''
            const commentObject={
                user:"Petko Petkovski",
                comment:newComment,
                image:placeholederImage,
                date: date
                }
            
            newCommentList.push(commentObject)
            console.log(newCommentList)
            setCommentList(newCommentList)
        }
        
    },[newComment])
    
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
            <AddComment 
                newComment={newComment}
                setNewComment = {setNewComment}
                />
            {commentList.map((comment,id)=>(
                <Comment key={id} {...comment}/>
            ))}           
        </div>
    )
}

export default ProductPage