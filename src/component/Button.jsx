/* eslint-disable react/prop-types */

const Button = ({ className, children }) => {
  return <button className={`px-4 ${className}`}>{children}</button>;
};

export default Button;
