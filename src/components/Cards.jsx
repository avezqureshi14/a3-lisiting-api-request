// Cards.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "./CustomCard";
import { Row, Col, Input } from "antd";

const { Search } = Input;

const Cards = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredData = data.filter((item) => {
    // You can customize the condition based on your requirements
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="search"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Search
          placeholder="Search products"
          allowClear
          onSearch={handleSearch}
          style={{ margin: 16, width: "100vh" }}
        />
      </div>
      <Row style={{display:"flex", flexWrap:"wrap"}} gutter={16}>
        {filteredData.map((item) => (
          <Col span={8} key={item.id}>
            <CustomCard title={item.title} body={item.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
