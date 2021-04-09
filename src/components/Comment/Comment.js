import React from 'react'
import classes from "./Comment.module.css"


const Comment = (props) =>{
    return(
        <div className={classes.Container}>
            <div style={{marginBottom:"10px"}}>
                <img className={classes.ProfilePic} src={props.image} alt=""/>
                <div style={{display:"inline-block"}}>
                <div className={classes.User}>{props.user}</div>
                <div className={classes.Date}>{props.date}</div>  
                </div>
                 
            </div>
            <div>{props.comment}</div>     
            <div className={classes.Line}></div>
        </div>
    )
}

export default Comment;