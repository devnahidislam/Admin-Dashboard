import {
  ColumnsDirective,
  ColumnDirective,
  GridComponent,
} from '@syncfusion/ej2-react-grids';
import React from 'react';
import { Header } from '../components';
import { ordersData, ordersGrid } from '../data/dummy';

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ">
      <Header title="Order" category="Page" />
      <GridComponent id="grid-comp" dataSource={ordersData} allowPaging>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default Orders;
