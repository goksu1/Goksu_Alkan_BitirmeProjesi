import React, { FC, useState, useEffect } from "react";
import { label } from "../../../services/http/endpoints/label";
import { Input, Box } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { Styled } from "./AddLabelForm.styled";
import { AddLabelFormProps } from "./AddLabelForm.types";
import Select from "react-select";

const AddLabelForm: FC<AddLabelFormProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [labels, setLabels] = useState<any>();
  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  // const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
  //   setValue(event.target.value as string);
  // };

  
  const [valueState,setValueState] = useState("")
  // create a function that handle the React-select event and
  // save the value of that event on an state every time the component change
      const handler = (event:any) => {
          const value = event.value
          setValueState(value)
      }
  const handleAddClick = () => {
    setLabels((prev: any) => [
      ...prev,
      {
        cardId: props.cardId,

        labelId: props.labelId,
      },
    ]);
  };
 
 
  const labelItems = [
    { label: 'High-Priority' },
    { label: 'Low-Priority' }, ]

    useEffect(() => {
      label.get().then(({ data }) => {
         setLabels((prev:any) => (data ));
       });
     }, []);
  return (
    <Styled>
      
        <Box title="Add Label">
          <span className="list-span"></span>

          <Select onChange={handler}
         
           options={labelItems}
         />
  {/* options={props.labelId === 1 ? "High-Priority" : "Low-Priority"}
            colors={props.labelId === 1 ? "red" : "gray"} */}
          <button className="add-button" onClick={handleAddClick}>
            Add
            <span className="material-symbols-outlined">library_add</span>
          </button>
        </Box>

    </Styled>
  );
};

export default AddLabelForm;
