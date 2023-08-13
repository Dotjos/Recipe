export async function fetchData(query) {
  try {
    const response = await fetch(
      ` https://forkify-api.herokuapp.com/api/search?q=tofu`
    );
    const data = await response.json();
    const recipeDetails = data.recipes.map((recipe) => {
      const { image_url, title, publisher, source_url, publisher_url } = recipe;
      return {
        image_url,
        title,
        publisher,
        source_url,
        publisher_url,
      };
    });

    return recipeDetails;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
