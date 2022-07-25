import React from 'react'
import ReactDOM from 'react-dom'
import './backDrop.css'

const backdropRoot = document.getElementById('backDrop-root')

export default function BackDrop(props) {
    return ReactDOM.createPortal(<div className='backDrop'>
        {props.children}
    </div>, backdropRoot)
}
