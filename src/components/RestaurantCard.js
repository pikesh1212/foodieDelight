import React from "react";
import { Card, Descriptions, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const RestaurantCard = ({ restaurant, onDelete, onUpdate }) => {
  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit restaurant:", restaurant.id);
  };

  return (
    <Card
      title={restaurant.name}
      extra={
        <>
          <Button
            icon={<EditOutlined />}
            onClick={handleEdit}
            style={{ marginRight: 8 }}
          />
          <Popconfirm
            title="Are you sure you want to delete this restaurant?"
            onConfirm={() => onDelete(restaurant.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </>
      }
    >
      <Descriptions column={2}>
        <Descriptions.Item label="Cuisine">
          {restaurant.cuisine}
        </Descriptions.Item>
        <Descriptions.Item label="Rating">
          {restaurant.rating}
        </Descriptions.Item>
        <Descriptions.Item label="Location">
          {restaurant.location}
        </Descriptions.Item>
        <Descriptions.Item label="Avg. Price for 2">
          ${restaurant.averagePrice}
        </Descriptions.Item>
        <Descriptions.Item label="Recommended Dish">
          {restaurant.recommendedDish}
        </Descriptions.Item>
      </Descriptions>
      <p>{restaurant.description}</p>
    </Card>
  );
};

export default RestaurantCard;
