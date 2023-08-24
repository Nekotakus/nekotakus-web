import axios from 'axios'

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
let getSeriesList = ()=>post('/anime/search', {
  data: {
    keyword: ''
  }
})

// 获取指定季度信息
let getSeason = asid => get('/anime/season/'+asid)

// 获取单集信息
let getEpisode = aeid => get('/anime/episode/'+aeid)

export default {http, getSeriesList, getSeason, getEpisode}