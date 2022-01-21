import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dashgo-ap7rbwsiy-luciano-ferreira.vercel.app/api'
})