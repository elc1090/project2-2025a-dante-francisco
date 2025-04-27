import token from "../../private/token.js"

async function getFilterList() {
    const muscle = await requestList(requestMuscleList);
    const equipament = await requestList(requestEquipamentList);
    const category = await requestList(requestCategoryList);
    return {
        muscle: muscle,
        equipment: equipament,
        category: category
    };
}

async function requestList(requesFuncList){
    try {

        const response = await requesFuncList();
        const data = await response.json(); // se for um fetch
        return data.results;
      } catch (error) {
        console.error('Erro ao buscar lista:', error);
        return [];
      }
}
  
  function requestCategoryList() {
    // create a variable to hold the `Promise` returned from `fetch`
    return fetch(`https://wger.de/api/v2/exercisecategory/`, {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`
        },
      })
  }

  function requestMuscleList() {
    // create a variable to hold the `Promise` returned from `fetch`
    return fetch(`https://wger.de/api/v2/muscle/`, {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`
        },
      })
  }

  function requestEquipamentList() {
    // create a variable to hold the `Promise` returned from `fetch`
    return fetch(`https://wger.de/api/v2/equipment/`, {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`
        },
      })
  }

  export default getFilterList;