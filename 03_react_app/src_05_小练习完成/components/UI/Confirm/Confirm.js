import React from 'react'
import BackDrop from '../BackDrop/BackDrop'
import classes from './Confirm.module.css'

export default function Confirm(props) {
  return (
    <BackDrop className={classes.confirmOuter}>
        <div className={classes.confirm}>
            <p className={classes.confirmText}>{props.confirmText}</p>
            <div>
                <button onClick={() => props.onCancel()}>取消</button>
                <button onClick={() => props.onOk()}>确认</button>
            </div>
        </div>
    </BackDrop>
  )
}
