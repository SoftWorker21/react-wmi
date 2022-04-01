export const baseURL = 'http://localhost:5000/wmi'; // It is better to use this url from .env file

export const getDataAPI = async (url = baseURL) => {
  try {
    return await fetch(url).then(res => res.json());
  } catch (err) {
    console.error(err);
  }
}