import React, { useState } from 'react'
import Meals from './components/Meals/Meals'
import CartContext from './store/cartContext'
import FilterMeals from './components/FilterMeals/FilterMeals'
import Cart from './components/Cart/Cart'

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
    const addItem = (meal) => {
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

    // 减少商品
    const removeItem = (meal) => {
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

    // 清空购物车
    const clearItem = () => {
        const newCart = { ...cart }
        // 将购物车中商品数量清零
        newCart.items.forEach((item) => {
            delete item.amount
        })
        newCart.items = []
        newCart.totalAmount = 0
        newCart.totalPrice = 0
        setCart(newCart)
    }
    // 过滤meals的函数
    const filterMeals = (keyword) => {
        const newMeals = MEALS_DATA.filter((item) => {
            return item.title.indexOf(keyword) !== -1
        })
        setMealsData(newMeals)
    }
    return (
        <CartContext.Provider value={{ ...cart, addItem, removeItem, clearItem }}>
            <div>
                <FilterMeals onFilter={filterMeals} />
                <Meals meals={mealsData} />
                <Cart />
            </div>
        </CartContext.Provider>

    )
}
