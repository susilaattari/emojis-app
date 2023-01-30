import PropTypes from "prop-types";
import Style from "./Container.module.css";

export default function index({ children }) {
  return <section className={Style.container}>{children}</section>;
}

index.propTypes = {
  children: PropTypes.node,
};
