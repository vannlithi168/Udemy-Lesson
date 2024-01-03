import PropTypes from "prop-types";

function Button({ children, primary, secondary, success, waring, danger }) {
  return <button>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, sucess, warning, danger can be true"
      );
    }
  },
};

export default Button;
