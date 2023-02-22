import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import CustomLabel from "../../components/CustomLabel";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { CustomSelect } from "../../components/CustomSelect";
import { listArr } from "../../utils/constants";
import { ListType } from "../../model/types";

const AddList = () => {
  const [select, setSelect] = useState<string>("");
  const [geoLocationEnabled, setGeoLoactionEnabled]= useState<boolean>(true)
  const [imageUpload, setImageUpload] = useState(null);

  const [formValues, setFormValues] = useState<ListType>({
    description: "",
    address: "",
    price: 0,
  });
  const { address, description, price } = formValues;
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSelect = (e: any) => {
    setSelect(e.target.value);
  };
  const handleSubmit = (e:any) =>{
    e.preventDefault()

  }
  return (
    <div className="flex justify-center w-[50%] m-auto">
      <form className="  w-full rounded-xl shadow-md px-8 py-2" onSubmit={handleSubmit}>
        <h2 className="text-center">Add list</h2>

        <div className="my-4">
          <CustomLabel>Select type</CustomLabel>
          <CustomSelect onChange={handleSelect}>
            <option selected>Select list type</option>
            {listArr.map((item) => (
              <option key={item.id} value={select}>
                {item.type}
              </option>
            ))}
          </CustomSelect>
        </div>
        <div className="my-4">
          <CustomLabel>Address</CustomLabel>
          <CustomInput
            name="address"
            type="string"
            onChange={handleInputChange}
            value={address}
          />
        </div>
        <div className="my-4">
          <CustomLabel>Description</CustomLabel>
          <CustomInput
            name="description"
            type="string"
            onChange={handleInputChange}
            value={description}
          />
        </div>
        <div className="my-4">
          <CustomLabel>Regular price($/Month)</CustomLabel>
          <CustomInput
            name="price"
            type="number"
            min={0}
            max={1000000}
            onChange={handleInputChange}
            value={price}
          />
        </div>

        <div className="my-4">
          <CustomLabel>Select image</CustomLabel>
          <CustomInput
            type="file"
            name="image"
            onChange={(e: any) => setImageUpload(e.target.file[0])}
            accept=".jpg, .png, .jpeg"
            required
            multiple
          />
        </div>
        <div className="my-4">
          <CustomButton className="w-full">Add List</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default AddList;
