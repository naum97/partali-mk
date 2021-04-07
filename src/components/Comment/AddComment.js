import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import classes from "./Comment.module.css"
import Button from '@material-ui/core/Button';


export default function AddComment() {
  return (
    <div className={classes.Container}>
        <TextareaAutosize className={classes.TextArea} rowsMin={4} rowsMax={4} placeholder="Оставете коментар" />
        <Button className={classes.TextArea} size="small" variant="contained" color="primary">
        Оставете Коментар
      </Button>
    </div>
  )
  
}