import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function FlexLayoutGrid() {
    const header = [
        {id:"name",  field: 'name' ,headerName:"Name"},
        {id:"product_image", field: 'product_image'},
        {id:"price", field: 'price'},
        {id:"sale_price", field: 'sale_price' },
        {id:"stoke", field: 'stoke' },
        {id:"product_type", field: 'product_type' },
        {id:"action", field: 'action'},
      ];
      const rows = [
        {id:"nike",product_image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
        {id:"nike2",product_image:"nike.png",price:21.00,sale_price:22.00,stoke:null,product_type:null},
        {id:"nike3",product_image:"nike.png",price:20.00,sale_price:22.00,stoke:null,product_type:null},
        {id:"nike4",product_image:"nike.png",price:22.00,sale_price:22.00,stoke:null,product_type:null},
        {id:"nike5",product_image:"nike.png",price:23.00,sale_price:22.00,stoke:null,product_type:null},
        {id:"nike6",product_image:"nike.png",price:24.00,sale_price:22.00,stoke:null,product_type:null},
        {id:"nike7",product_image:"nike.png",price:25.00,sale_price:22.00,stoke:null,product_type:null},
        {id:"nike8",product_image:"nike.png",price:26.00,sale_price:22.00,stoke:null,product_type:null},
      ]
  return (
    <div style={{ height: 600, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid columns={header} rows={rows} />
        </div>
      </div>
    </div>
  );
}
