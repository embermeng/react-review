import React from 'react'
import Card from '../Card/Card'
import BackDrop from '../BackDrop/BackDrop'
import './modal.css'

export default function Modal(props) {
    return (
        <BackDrop>
            <Card className='modal'>
                <div className='modalText'><p>{props.text}</p></div>
                <div className='modalBtn'>
                    <button onClick={props.onCancel}>取消</button>
                    <button onClick={props.onOk} style={{ backgroundColor: 'red', color: 'white' }} >确认</button>
                </div>
            </Card>
        </BackDrop>
    )
}
