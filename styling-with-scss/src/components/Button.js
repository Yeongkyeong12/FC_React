import React from "react";
import classNames from "classnames";

import "./Button.scss";

// size: large, medium(기본값으로 설정하기), small
// color: blue, pink, gray

function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  console.log(rest);
  return (
    <button
      className={classNames(
        "Button",
        size,
        color,
        {
          outline,
          fullWidth,
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
