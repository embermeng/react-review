import React, { useState } from 'react'
import Meals from './components/Meals/Meals'
import Test from './components/Test'
import Test2 from './components/Test2'
import TestContext from './store/testContext'

const MEALS_DATA = [
    {
        id: '1',
        title: '板烧鸡腿堡',
        desc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        price: 22,
        img: '/img/meals/汉堡1.webp'
    },
    {
        id: '2',
        title: '香香鸡',
        desc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        price: 22,
        img: '/img/meals/汉堡2.webp'
    },
    {
        id: '3',
        title: '烤全鸡',
        desc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        price: 22,
        img: '/img/meals/汉堡3.webp'
    },
    {
        id: '4',
        title: '香辣鸡腿堡',
        desc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        price: 22,
        img: '/img/meals/汉堡4.webp'
    },
    {
        id: '5',
        title: '田园鸡腿堡',
        desc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        price: 22,
        img: '/img/meals/汉堡5.webp'
    },
    {
        id: '6',
        title: '麦辣鸡腿堡',
        desc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        price: 22,
        img: '/img/meals/汉堡6.webp'
    },
]
export default function App() {
    // 存储食物列表
    const [mealsData, setMealsData] = useState(MEALS_DATA)
    // 存储购物车数据
    const [cart, setCart] = useState({
        items: [], // 商品
        totalAmount: 0, // 商品总数
        totalPrice: 0, // 总价
    })
    // 向购物车中添加商品
    const addMeal = (meal) => {
        // meal 要添加的商品
        const newCart = { ...cart }
        // 判断购物车中是否存在该商品
        if (newCart.items.indexOf(meal) === -1) {
            // 不在购物车中
            newCart.items.push(meal)
            // 修改商品的数量
            meal.amount = 1
        } else {
            // 在购物车中，增加数量
            meal.amount += 1
        }
        newCart.totalAmount += 1
        newCart.totalPrice += meal.price

        setCart(newCart)
    }

    const subMeal = (meal) => {
        const newCart = { ...cart }
        // 减少商品数量
        meal.amount -= 1
        if (meal.amount === 0) {
            // 从购物车中移除商品
            newCart.items.splice(newCart.items.indexOf(meal), 1)
        }
        newCart.totalAmount -= 1
        newCart.totalPrice -= meal.price

        setCart(newCart)
    }
    return (
        /* 
            TestContext.Provider: 数据的生产者，传入value属性用来指定Context中的数据，里面的所有组件都能拿到数据
            当我们通过Context访问数据时，组件会读取离它最近的Provider中点数据
            如果没有Provider，则读取Context中的默认数据
        */
        <TestContext.Provider value={{ name: '猪八戒', age: 30 }}>
            <div>
                {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Test />
                    <Test2 />
                </div> */}
                <Meals meals={mealsData} />
            </div>
        </TestContext.Provider >
    )
}
