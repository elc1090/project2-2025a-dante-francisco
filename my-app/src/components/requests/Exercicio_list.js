import token from "../../private/token.js"

async function getExcList(filtro) {
  try {
    const response = await requestExcList(filtro);
    const data = await response.json(); // se for um fetch
    return data;
  } catch (error) {
    console.error('Erro ao buscar lista:', error);
    return null;
  }
}

function objectToQueryParams(obj) {
  const searchParams = new URLSearchParams();

  for (const key in obj) {
    if (obj[key].length > 0) {
      obj[key].forEach((value) => {
        searchParams.append(key, value);
      });
    }
  }

  return `?${searchParams.toString()}`;
}
  
  function requestExcList(filtros) {
    const params = objectToQueryParams(filtros["filtro"]);
    return fetch(`https://wger.de/api/v2/exerciseinfo${params}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`
        },
      })
  }

  export default getExcList;