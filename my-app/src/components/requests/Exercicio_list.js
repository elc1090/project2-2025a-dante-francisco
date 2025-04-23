import token from "../../private/token.js"

async function getExcList() {
  try {
    const response = await requestExcList();
    const data = await response.json(); // se for um fetch
    return data;
  } catch (error) {
    console.error('Erro ao buscar lista:', error);
    return null;
  }
}
  
  function requestExcList() {
    // create a variable to hold the `Promise` returned from `fetch`
    return fetch(`https://wger.de/api/v2/exerciseinfo/`, {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`
        },
      })
  }

  export default getExcList;