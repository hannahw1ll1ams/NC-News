const axios = require('axios');


const baseURL = 'https://hw-nc-news.herokuapp.com/api'



export const getArticles = (topic, author, sort_by, order) => {
  return axios.get(`${baseURL}/articles`, { params: { topic, author, sort_by, order } })
    .then(({ data }) => {
      return data
    })
}

export const getSingleArticle = (id) => {
  return axios.get(`${baseURL}/articles/${id}`)
    .then(({ data }) => {
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

export const deleteComment = (id) => {
  return axios.delete(`${baseURL}/comments/${id}`)
}

export const patchVotes = (votesDifference, comment_id) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, { inc_votes: votesDifference })
}

export const patchArticleVotes = (votesDifference, article_id) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, { inc_votes: votesDifference })
}

export const sendNewComment = (newComment, loggedInUser, id) => {
  return axios.post(`${baseURL}/articles/${id}/comments`, {
    username: loggedInUser,
    body: newComment
  }).then(({ data }) => {
    return data.comment
  })
}