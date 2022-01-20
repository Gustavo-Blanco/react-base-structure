import path from 'path';
import dotenv from 'dotenv';

dotenv.config({path: path.join(__dirname, '..', '.env')});

const BASE_URL = process.env.BASE_URL;
export const API_BASE_URL = `${BASE_URL}api/v1/`;