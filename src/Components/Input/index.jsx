import PropTypes from "prop-types";
import Style from "./Input.module.css";

const Input = ({ onChange, value }) => {
  return (
    <input
      className={Style.input}
      onChange={onChange}
      value={value}
      type="text"
      placeholder="Cari"
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
