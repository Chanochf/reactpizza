import { useContext, useState } from "react";
import { nameContext } from "../global/nameContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { setUserName }: any = useContext(nameContext);

  const nevigate = useNavigate();

  function PasswordValidation() {
    if (passwordInput == "") {
      setPasswordError("This field is mandetory");
      return 0;
    }
    if (passwordInput.length < 8) {
      setPasswordError("Password need to contain at least 8 charcters");
      return 0;
    }
    return 1;
  }

  function NameValidation() {
    if (userNameInput == "") {
      setNameError("This field is mandetory");
      return 0;
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(userNameInput)) {
      setNameError("Invalid input");
      return 0;
    }
    return 1;
  }

  const onButtonClick = () => {
    if (PasswordValidation() + NameValidation() == 2) {
      setUserName(userNameInput);
      AuthPassword();
      nevigate("/Orders");
    }
  };

  return (
    <div className="main_container">
      <h1>log in</h1>
      <div className="input_container">
        <input
          type="text"
          className="name"
          placeholder="Enter your name here"
          onChange={(e) => setUserNameInput(e.target.value)}
        />
        <label className="errorLabel">{nameError}</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password here"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") 
              onButtonClick();
          }}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <input
        className={"inputButton"}
        type="button"
        onClick={onButtonClick}
        value={"Log in"}
      />
    </div>
  );
}
function AuthPassword() {
  const users = fetch("../assets/names");
  console.log(users);
}
export default Login;
