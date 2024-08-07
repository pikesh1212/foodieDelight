import React from "react";
import { List } from "antd";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants, loading, onUpdate, onDelete }) => {
  return (
    <List
      className="restaurant-list"
      loading={loading}
      dataSource={restaurants}
      renderItem={(restaurant) => (
        <List.Item key={restaurant.id}>
          <RestaurantCard
            restaurant={restaurant}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </List.Item>
      )}
    />
  );
};

export default RestaurantList;
