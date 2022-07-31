// 使用RTK来构建store
import {configureStore} from '@reduxjs/toolkit'
import {stuReducer} from "./stuSlice";
import {schReducer} from "./schoolSlice";

// 创建store，需要一个配置对象作为参数
const store = configureStore({
    reducer: {
        student123: stuReducer,
        school: schReducer,
    }
})
export default store
