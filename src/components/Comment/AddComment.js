import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import classes from "./Comment.module.css"
import Button from '@material-ui/core/Button';


export default function AddComment(props) {
  
  function handleClick(){
    let comment = document.getElementById("commentArea").value;
    if(comment.length>0){
     props.setNewComment(comment)
     document.getElementById("commentArea").value=""
    }
  }
  return (
    <div className={classes.Container}>
        <TextareaAutosize className={classes.TextArea} rowsMin={4} rowsMax={4}  placeholder="Оставете коментар" id="commentArea" />
        <Button style={{width:"96%",marginBottom:"30px",marginLeft:"10px"}} size="small" variant="contained" color="primary" onClick={handleClick}>
        Оставете Коментар
      </Button>
    </div>
  )
}