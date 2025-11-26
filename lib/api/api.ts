import axios from 'axios';

export async function getCars(page: number) {
  const { data } = await axios.get('https://car-rental-api.goit.global/cars', {
    params: { page },
  });
  // console.log(data);
  return data;
}
