import React from 'react'
import ReactDOM from 'react-dom'
import classes from './BackDrop.module.css'

const backDrop = document.getElementById('backDrop')
export default function BackDrop(props) {
    return ReactDOM.createPortal(<div className={`${classes.backDrop} ${props.className}`}>
        {props.children}
    </div>, backDrop)
}
