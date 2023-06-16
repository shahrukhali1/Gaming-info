import axios from 'axios'

const freeToPlayGamesAPI = 'https://free-to-play-games-database.p.rapidapi.com/api';

console.log("freeToPlayGamesAPI",freeToPlayGamesAPI)
const gamesList = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5132ffe61emshdb9a9b68045d390p1d267cjsnf4405de62c1c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
}

const newsList = {
  method: 'GET',
  url: 'https://videogames-news2.p.rapidapi.com/videogames_news/recent',
  headers: {
    'X-RapidAPI-Key': '5132ffe61emshdb9a9b68045d390p1d267cjsnf4405de62c1c',
    'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com',
  },
}

export const getAllGames = async (category) => {
  let params
  if (category !== '-SELECT ALL-')
    params = { 'sort-by': 'release-date', category }
  else params = { 'sort-by': 'release-date' }
  return await axios.request({
    ...gamesList,
    url: `${freeToPlayGamesAPI}/games`,
    params: params,
  })
}

export const getSingleGame = async (id) => {
  return await axios.request({
    ...gamesList,
    url: `${freeToPlayGamesAPI}/game`,
    params: { id },
  })
}

export const getAllNews = async () => {
  return await axios.request(newsList)
}
