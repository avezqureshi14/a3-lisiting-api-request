// CustomCard.jsx
import React from 'react';
import { Card } from 'antd';

const CustomCard = ({ title, body, id, userId }) => {
  return (
    <Card title={title} style={{ margin: '16px' }}>
      <p>{body}</p>
    </Card>
  );
};

export default CustomCard;
