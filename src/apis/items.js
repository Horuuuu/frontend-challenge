import axios from 'axios';
//funcion para obtener platos de la api
export async function getDishes() {
  try {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch?apiKey=c6d43c1fa41042aabd081eb036b77320&addRecipeInformation=true'
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
//funcion para obtener los detalles de los platos
export async function searchDishes(query = '') {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=c6d43c1fa41042aabd081eb036b77320&addRecipeInformation=true&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
//funcion para obtenerlo por el id del plato
export async function getDish(id) {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=c6d43c1fa41042aabd081eb036b77320&includeNutrition=false`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
