import { Button, Input, Modal, ModalBody, Radio, RadioGroup, Select, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";


const AddProduct = ({adding}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input,setInput] = useState([]);
  const [formData,setFormData] = useState({})


  const ref = React.useRef();

  const onChange = (e)=>{

    let {checked,type,name,value } = e.target;
    if (type==="checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    }
     else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmit = (e)=>{
    e.preventDefault();
    adding({ ...formData});
    onClose();

  }


  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen }>Add New Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <label htmlFor="">Title</label>
          <Input data-cy="add-product-title"
           ref={ref}
           placeholder="Title"
           name="title"
           onChange={onChange}
           />
           <label htmlFor="">Category</label>
          <Select data-cy="add-product-category"
          placeholder="Category"
          name="category"
          onChange={onChange}>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>

          <label htmlFor="Gender"></label>
          <RadioGroup data-cy="add-product-gender" name="gender">
          <Radio
                    value="male"
                    data-cy="add-product-gender-male"
                    onChange={onChange}
                  >
                    Male
                  </Radio>
                  <Radio
                    value="female"
                    data-cy="add-product-gender-female"
                    onChange={onChange}
                  >
                    Female
                  </Radio>
                  <Radio
                    value="unisex"
                    data-cy="add-product-gender-unisex"
                    onChange={onChange}
                  >
                    Unisex
                  </Radio>
          </RadioGroup>
          <label htmlFor="">Price</label>
          <Input data-cy="add-product-price"
                  type="number"
                  placeholder="Price"
                  name="price"
                  onChange={onChange}
                />
          <Button data-cy="add-product-submit-button" 
           mt={4}
           type="submit"
           onClick={onSubmit}
           >Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
