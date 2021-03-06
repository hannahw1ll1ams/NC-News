const axios = require('axios');


const baseURL = 'https://hw-nc-news.herokuapp.com/api'



export const getArticles = (topic, author, sort_by, order) => {
  console.log(topic)
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

export const patchVotes = (votesDifference, id, item) => {
  return axios.patch(`${baseURL}/${item}/${id}`, { inc_votes: votesDifference })
}

export const sendNewComment = (newComment, loggedInUser, id) => {
  return axios.post(`${baseURL}/articles/${id}/comments`, {
    username: loggedInUser,
    body: newComment
  }).then(({ data }) => {
    return data.comment
  })
}

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics
  })
}