import axios from 'axios'
import qs from 'qs'

// 一级封装
const http = axios.create({
  baseURL: 'https://api.nekotakus.com',
  timeout: 2000,
})

// 二级封装
const get = http.create({
  method: 'get'
})

const post = http.create({
  method: 'post'
})

// 三级封装

// 获取系列列表
let getSeriesList = () => post('/anime/search', {
  data: {
    keyword: ''
  }
})

// 获取单系列信息
let getSeries = avid => get('/anime/' + avid)

// 获取单季度信息
let getSeason = asid => get('/anime/season/' + asid)

// 获取单集信息
let getEpisode = aeid => get('/anime/episode/' + aeid)

//注册
let register = (username, password, email) => post('/user/register', {
  data: {
    username,
    password,
    email
  },
  transformRequest: [
    function (data) {
      return qs.stringify(data)
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 登录
let login = (username, password) => post('/user/login', {
  data: {
    username,
    password
  },
  transformRequest: [
    function (data) {
      return qs.stringify(data)
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default { http, getSeriesList, getSeries, getSeason, getEpisode, register, login }