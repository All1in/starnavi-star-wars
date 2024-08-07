import axios from 'axios';

export const BASE_URL = 'https://sw-api.starnavi.io/';

export const getHeroes = (page: number) => {
  return axios(`${BASE_URL}/people/?page=${page}`);
};

export const getHero = (id: string) => {
  return axios(`${BASE_URL}/people/${id}`);
};

export const getFilms = (id: string) => {
  return axios(`${BASE_URL}/films/?characters=${id}`);
};

export const getStarships = (id: string) => {
  return axios(`${BASE_URL}/starships/?pilots=${id}`);
};

