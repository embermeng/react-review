import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

export default function FilterMeals(props) {
    const inputChange = (event) => {
        const keyword = event.target.value.trim()
        props.onFilter(keyword)
    }
    return (
        <div className={classes.filterMeals}>
            <div className={classes.inputOuter}>
                <input type="text" placeholder='请输入关键字' className={classes.inputBox} onChange={inputChange} />
                <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
            </div>
        </div>
    )
}
