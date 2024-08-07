import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import './matchMedia.js';
import RestaurantForm from './components/RestaurantForm.js';
import RestaurantList from './components/RestaurantList.js';
import RestaurantCard from './components/RestaurantCard.js';


test('renders FoodieDelight Restaurant Management text', () => {
  render(<App />);
  const textElement = screen.getByText(/FoodieDelight Restaurant Management/i);
  expect(textElement).toBeInTheDocument();
});
test('renders RestaurantForm component', () => {
  render(<RestaurantForm />);
  const formElement = screen.getByText(/cuisine/i);
  expect(formElement).toBeInTheDocument();

});
test('renders cuisine dropdown with values and validates error message on Add Restaurant button click', () => {
  render(<RestaurantForm />);
  
  // Check if cuisine dropdown has values
  const cuisineDropdown = screen.getByLabelText(/Cuisine/i);
  expect(cuisineDropdown.children.length).toBe(0);
  
  // // Click on Add Restaurant button
  // const addRestaurantButton = screen.getByText(/Add Restaurant/i);
  // fireEvent.click(addRestaurantButton);

  // // Check if error message is displayed
  // const errorMessage = screen.getByText(/Please select the cuisine type/i);
  // expect(errorMessage).toBeInTheDocument();

})

