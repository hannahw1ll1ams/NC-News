const axios = require('axios');


const baseURL = 'https://hw-nc-news.herokuapp.com/api'


//https://hw-nc-news.herokuapp.com/api/articles?topic=:topic

export const getArticles = (topic) => {
  // console.log(topic)
  return axios.get(`${baseURL}/articles`, { params: { topic } })
    .then(({ data }) => {
      return data
    })
}

export const getSingleArticle = (id) => {
  // console.log(id)
  return axios.get(`${baseURL}/articles/${id}`)
    .then(({ data }) => {
      // console.log(data)
      return data
    })
}

export const getCommentsForArticle = (id) => {
  return axios.get(`${baseURL}/articles/${id}/comments`)
    .then(({ data }) => {
      return data
    })
}

export const getUser = username => {
  return axios.get(`${baseURL}/users/${username}`)
    .then(({ data }) => {
      return data.user
    })
}