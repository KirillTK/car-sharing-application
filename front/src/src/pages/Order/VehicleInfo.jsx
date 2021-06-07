import React from 'react';
import { Card } from 'antd';

const { Meta } = Card; 

export const VehicleInfo = ({ vehicle }) => {
  return vehicle ? <Card
    style={{ width: 300 }}
    cover={
      <img
        alt={vehicle.name}
        src={vehicle.image}
      />
    }
    actions={[
      null,
      <div>{vehicle.price}$ per hour</div>,
      null,
    ]}
  >
    <Meta title={vehicle.brand.name} description={vehicle.name} />
  </Card> : null;
}
