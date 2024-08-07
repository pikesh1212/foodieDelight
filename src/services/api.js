import restaurantsData from "../data/restaurants.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let lastId = Math.max(...restaurantsData.map((r) => r.id), 0);

export const fetchRestaurants = async () => {
  await delay(500);
  return [...restaurantsData];
};

export const addRestaurant = async (restaurant) => {
  await delay(500);
  const newRestaurant = {
    ...restaurant,
    id: ++lastId,
  };
  restaurantsData.push(newRestaurant);
  return newRestaurant;
};

export const updateRestaurant = async (id, updatedRestaurant) => {
  await delay(500);
  const index = restaurantsData.findIndex((r) => r.id === id);
  if (index !== -1) {
    restaurantsData[index] = {
      ...restaurantsData[index],
      ...updatedRestaurant,
      id,
    };
    return restaurantsData[index];
  }
  throw new Error("Restaurant not found");
};

export const deleteRestaurant = async (id) => {
  await delay(500);
  const index = restaurantsData.findIndex((r) => r.id === id);
  if (index !== -1) {
    restaurantsData.splice(index, 1);
    return true;
  }
  throw new Error("Restaurant not found");
};
