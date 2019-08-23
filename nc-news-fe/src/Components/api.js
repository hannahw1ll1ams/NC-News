const axios = require('axios');


const baseURL = 'https://hw-nc-news.herokuapp.com/api'

// export const getArticles = () => {
//   return axios.get(`${baseURL}/articles`).then(({ data }) => {
//     return data.articles
//   })
// }
//articles ? topic =

export const getArticles = topic => {
  return axios.get(`${baseURL}/articles`, { params: { topic } })
    .then(({ data }) => {
      return data
    })
}

