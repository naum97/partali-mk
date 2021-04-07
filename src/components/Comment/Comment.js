import React from 'react'
import classes from "./Comment.module.css"


const Comment = (props) =>{
    return(
        <div className={classes.Container}>
            <div style={{marginBottom:"10px"}}>
                <img className={classes.ProfilePic} src={props.image} alt=""/>
                <div className={classes.User}>{props.user}</div>     
            </div>
            <div>{props.comment}</div>     
            <div className={classes.Line}></div>
        </div>
    )
}

export default Comment;