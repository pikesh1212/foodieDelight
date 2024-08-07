import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Typography, Card, Space } from "antd";
import {
  fetchRestaurants,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "./services/api";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";
import "./App.css";

const { Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    try {
      const data = await fetchRestaurants();
      setRestaurants(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to load restaurants:", error);
      setLoading(false);
    }
  };

  const handleAddRestaurant = async (newRestaurant) => {
    try {
      const addedRestaurant = await addRestaurant(newRestaurant);
      setRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        addedRestaurant,
      ]);
    } catch (error) {
      console.error("Failed to add restaurant:", error);
    }
  };

  const handleUpdateRestaurant = async (id, updatedRestaurant) => {
    try {
      const result = await updateRestaurant(id, updatedRestaurant);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.map((r) => (r.id === result.id ? result : r))
      );
    } catch (error) {
      console.error("Failed to update restaurant:", error);
    }
  };

  const handleDeleteRestaurant = async (id) => {
    try {
      await deleteRestaurant(id);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((r) => r.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete restaurant:", error);
    }
  };

  return (
    <Layout className="app-layout">
      <Content className="app-content">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={2} className="app-title">
            FoodieDelight Restaurant Management
          </Title>
          <Row gutter={24}>
            <Col xs={24} lg={8}>
              <Card
                title={<Title level={3}>Add New Restaurant</Title>}
                className="app-card"
              >
                <RestaurantForm onSubmit={handleAddRestaurant} />
              </Card>
            </Col>
            <Col xs={24} lg={16}>
              <Card
                title={<Title level={3}>Restaurant List</Title>}
                className="app-card"
              >
                <RestaurantList
                  restaurants={restaurants}
                  loading={loading}
                  onUpdate={handleUpdateRestaurant}
                  onDelete={handleDeleteRestaurant}
                />
              </Card>
            </Col>
          </Row>
        </Space>
      </Content>
    </Layout>
  );
};

export default App;
