import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

// 创建Api对象
/*
*   createApi() 用来创建RTKQ中的API对象
*   RTKQ的所有功能都需要通过该对象来进行
*   createApi() 需要一个配置对象作为参数
* */
const studentApi = createApi({
    reducerPath: 'studentApi', // Api的标识，不能和其它的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://randomuser.me/api'
    }), // 指定查询的基础信息，发送请求使用的工具
    endpoints(build) { // endpoints用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值
        // build是请求的构建器，通过build来设置请求的相关信息
        return {
            getUsers: build.query({
                query() {
                    // 用来指定请求的子路径
                    return '/'
                }
            })
        }
    }
})
console.log(studentApi);
// Api对象创建后，对象中会根据各种方法自动的生成对应的钩子函数
// 通过这些钩子函数，可以来向服务器发送请求
// 钩子函数的命名规则：getUsers --> useGetUsersQuery
export const {
    useGetUsersQuery,
} = studentApi

export default studentApi