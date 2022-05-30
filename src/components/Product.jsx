import { Box, Heading, Image, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";
import React from "react";

const Product = ({...el}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;




  
  return (

    <Stack data-cy="product">
      <Image data-cy="product-image" src={el.imageSrc}/>
      <Text data-cy="product-category">{el.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{el.title}</Heading>
      <Box data-cy="product-price">{el.price}</Box>
    </Stack>
  );
};

export default Product;
