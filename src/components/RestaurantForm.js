import React from "react";
import { Form, Input, Button, InputNumber, Select, Row, Col } from "antd";

const { Option } = Select;

const cuisineOptions = [
  "Italian",
  "Chinese",
  "Mexican",
  "Indian",
  "Japanese",
  "American",
  "Thai",
  "French",
];
const locationOptions = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
];

const RestaurantForm = ({ initialValues, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error("Failed to save restaurant:", error);
    }
  };

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={handleSubmit}
      layout="vertical"
      className="restaurant-form"
    >
      <Form.Item
        name="name"
        label="Restaurant Name"
        rules={[
          { required: true, message: "Please enter the restaurant name" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please enter a description" }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="cuisine"
        label="Cuisine"
        rules={[{ required: true, message: "Please select the cuisine type" }]}
      >
        <Select>
          {cuisineOptions.map((cuisine) => (
            <Option key={cuisine} value={cuisine}>
              {cuisine}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="location"
        label="Location"
        rules={[{ required: true, message: "Please select the location" }]}
      >
        <Select>
          {locationOptions.map((location) => (
            <Option key={location} value={location}>
              {location}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="rating"
            label="Rating"
            rules={[{ required: true, message: "Please enter the rating" }]}
          >
            <InputNumber min={0} max={5} step={0.1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="averagePrice"
            label="Average Price for 2"
            rules={[
              {
                required: true,
                message: "Please enter the average price for 2",
              },
            ]}
          >
            <InputNumber
              min={0}
              step={1}
              prefix="$"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="recommendedDish"
        label="Recommended Dish"
        rules={[{ required: true, message: "Please enter a recommended dish" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues ? "Update Restaurant" : "Add Restaurant"}
        </Button>
        {onCancel && (
          <Button onClick={onCancel} style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default RestaurantForm;
