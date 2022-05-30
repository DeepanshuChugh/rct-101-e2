import React, { useEffect, useState } from "react";
import Product from './Product'
import Pagination from './Pagination'
import AddProduct from './AddProduct'
import { Flex, Grid } from "@chakra-ui/react";
import axios from 'axios'



const Products = () => {


  
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const data = async () => {
      const response = await axios.get(
        ' http://localhost:8080/products'
        );
        setData(response.data);
      };
      data();
    }, []);


    const handleOnAdding = () => {
      axios.post("http://localhost:8080/products").then((r) => {
        setData([...data, r.data]);
      });
    };
    // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;


  return (
    <Flex>
      <AddProduct adding={handleOnAdding} />
      <Grid>{data.map((el) => (
          <Product {...el} />
        ))}</Grid>
      <Pagination/>
    </Flex>
  );
};

export default Products;


