import React from "react";
import { Layout as AntLayout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = AntLayout;

const Layout = ({ children }) => {
  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
    },
  ];

  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        FoodieDelight ©{new Date().getFullYear()} Created by Your Company
      </Footer>
    </AntLayout>
  );
};

export default Layout;
