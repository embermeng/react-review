// 创建学校的slice
import {createSlice} from "@reduxjs/toolkit";

const schoolSlice = createSlice({
    name: 'school', // 用来自动生成action中的type属性
    initialState: { // state的初始值
        name: '花果山中学',
        address: '花果山大街',
    },
    reducers: { // 指定state的各种操作，直接在对象中添加方法
        setName(state, action) {
            state.name = action.payload
        },
        setAddress(state, action) {
            state.age = action.payload
        }
    },
})

export const {setName, setAddress} = schoolSlice.actions
export const {reducer: schReducer} = schoolSlice