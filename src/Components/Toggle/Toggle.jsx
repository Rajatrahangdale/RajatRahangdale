import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { Mycontext } from "../../Context";
import { useContext } from "react";
const Toggle = () => {
  const contextState = useContext(Mycontext);
  const dark = contextState.dark;
  const setDark = contextState.setDark;

  return (
    <div
      className="toggle"
      onClick={() => {
        setDark(!dark);
      }}
    >
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={dark ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
