import React, { useState } from 'react'
import Meals from './components/Meals/Meals'

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
    return (
        <div>
            <Meals meals={mealsData}/>
        </div>
    )
}
