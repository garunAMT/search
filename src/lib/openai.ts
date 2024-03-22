import OpenAI from 'openai'
require('dotenv').config();
console.log(process.env)

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })