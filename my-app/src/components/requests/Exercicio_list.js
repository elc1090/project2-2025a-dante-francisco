import token from "../../private/token.js"

async function getExcList(filtro,ActivePage) {
  try {
    const response = ActivePage == 0 ? await requestFavList() : await requestExcList(filtro,ActivePage);
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
  
  function requestExcList(filtros,ActivePage) {
    const params = objectToQueryParams(filtros["filtro"]);
    const pages = ActivePage*30;
    return fetch(`https://wger.de/api/v2/exerciseinfo${params}&limit=30&offset=${pages}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`
        },
      })
  }

  function requestFavList() {
    return fetch(`https://wger.de/api/v2/exerciseinfo?limit=640`, {
        headers: {
          Accept: "application/json",
          Authorization: `Token ${token}`
        },
      })
  }

  export default getExcList;