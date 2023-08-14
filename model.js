export async function fetchData(query) {
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Ooops, no detail for that particular query.");
    }
    const data = await response.json();
    console.log(data);
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
    throw error;
  }
}

//
