import "../styles/pickOreder.css";
import { useState, useEffect } from "react";
import jsonData from "../assets/toppings.json";

function PickOrder() {
  const [topping_method, setTopping_method] = useState("empty");
  const [istoping_box, settoping_box] = useState(false);
  const [customCheckBox, setCustomCheckBox] = useState(
    new Array(Object.keys(jsonData[0]).length).fill(false)
  );
  const [errorBoxMax, setErrorBoxMax] = useState("");

  const toppings = Object.entries(jsonData[0]);
  const onChangeHendler = (event: any) => {
    setTopping_method(event.target.value);
    console.log("User Selected Value - ", event.target.value);
    choosingMenu(event.target.value);
  };

  function choosingMenu(method: string) {
    if (method == "helf") {
      settoping_box(true);
    }
    if (method == "custom") {
      settoping_box(true);
    }
    if (method == "empty") {
      settoping_box(false);
    }
  }

  const boxChangeHandle = (index: number) => {
     const limit =  topping_method =="custom"? 4:2
    if (
      customCheckBox.filter((x) => x == true).length < limit ||
      customCheckBox[index] == true
    ) {
      const updatedBox = [...customCheckBox];
      updatedBox[index] = !customCheckBox[index];
      setCustomCheckBox(updatedBox);
      setErrorBoxMax("");
    } else {
      setErrorBoxMax("To much topping!");
    }
  };

  const CreateToppingArray = () => {
    console.log(jsonData);
  };
  CreateToppingArray();
  return (
    <div className="mainContainer">
      <div className="choiseTopping">
        <label htmlFor="ToppingMethod">Choose topping method:</label>
        <select
          name="ToppingMethod"
          id="ToppingMethod"
          onChange={onChangeHendler}
        >
          <option value="empty">empty</option>
          <option value="helf">2 helf</option>
          <option value="custom">custom</option>
        </select>
      </div>
      <div className="toppin_chose">
        {istoping_box &&
          customCheckBox.map((Box, index) => (
            <div className="toppingDiv" key={index}>
              <input
                id={index.toString()}
                type="checkbox"
                checked={Box}
                onChange={() => boxChangeHandle(index)}
              />
              <label>topping {toppings[index][0]}</label>
              <div className="toppingPhoto">
                <img src={toppings[index][1].img} alt="some_topping" />
              </div>
            </div>
          ))}
        <label className="errorLabel">{errorBoxMax}</label>
      </div>
    </div>
  );
}

export default PickOrder;
