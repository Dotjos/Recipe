export async function fetchData(query) {
  try {
    const response = await fetch(
      //   `https://forkify-api.herokuapp.com/api/search?q=${query}`
      `https://forkify-api.herokuapp.com/api/search?q=pizza`
    );
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
