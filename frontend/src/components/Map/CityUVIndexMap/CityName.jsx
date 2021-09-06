import React, { useState } from "react";
import { InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const CityName = () => {
  const [inputList, setInputList] = useState([{ cityName: "" }]);
  const [error, setError] = useState(false);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { cityName: "" }]);
  };

  const onSubmitCity = () => {
    if (inputList.length === 1 && inputList[0].cityName === "") setError(true);
    else setError(false);
  };

  return (
    <div>
      {inputList.map((cityObject, i) => {
        return (
          <InputGroup size="lg" className="city-input-margin">
            <InputGroup.Text id="inputGroup-sizing-lg">City</InputGroup.Text>
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              value={cityObject.cityName}
              name="cityName"
              onChange={(e) => handleInputChange(e, i)}
            />

            {inputList.length !== 1 && (
              <Button
                className="add-button"
                onClick={() => {
                  handleRemoveClick(i);
                }}
              >
                {" "}
                -{" "}
              </Button>
            )}
            {inputList.length - 1 === i && (
              <Button
                className="add-button"
                onClick={() => {
                  handleAddClick(i);
                }}
              >
                {" "}
                +{" "}
              </Button>
            )}
          </InputGroup>
        );
      })}
      {error && <Alert variant="danger">Input is Empty!</Alert>}
      <div className="text-center">
        <Button className="primary-button" onClick={onSubmitCity}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CityName;
