import jokes from "./data/jokes.json";

const defaultOptions = {
  category: "all",
  spicyMode: false,
};

export default async function main(print, inOptions = {}) {
  const options = { ...defaultOptions, ...inOptions };

  let filteredJokes = jokes;

  // Check if the category is "all"
  if (options.category.toLowerCase() !== "all") {
    // Otherwise, filter jokes by the specified category
    filteredJokes = filteredJokes.filter(
      (joke) => joke.category.toLowerCase() === options.category.toLowerCase()
    );
  }

  if (options.spicyMode) {
    // Filter out jokes that are not spicy
    filteredJokes = filteredJokes.filter((joke) => joke.flags.nsfw);
  }

  // Check if there are any jokes in the filtered list
  if (filteredJokes.length === 0) {
    print("No jokes found with the specified options.");
    return;
  }

  // Pick a random joke from the filtered list
  let joke = filteredJokes[Math.floor(Math.random() * filteredJokes.length)];
  if (joke.type === "twopart") {
    print(joke.setup);
    print("\n");
    print(joke.delivery);
  } else {
    print(joke.joke);
  }
}
