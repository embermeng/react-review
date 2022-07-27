import React from 'react'
import Counter from '../../UI/Counter/Counter'
import classes from './Meal.module.css'


export default function Meal() {
  return (
    <div className={classes.meal}>
      <div className={classes.imgBox}>
        <img src="/img/meals/汉堡1.webp" />
      </div>
      <div>
        <h2 className={classes.title}>汉堡包</h2>
        <p className={classes.desc}>百分百纯牛肉，口感丰富，极致美味，让你无法抵挡</p>
        <div className={classes.priceBox}>
          <span className={classes.price}>12</span>
          <Counter amount={1}></Counter>
        </div>
      </div>
    </div>
  )
}
