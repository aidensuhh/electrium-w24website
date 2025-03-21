import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ to, children }) {
  const handleClick = () => {
  };

  return (
    <>
      {to && to[0] === "/" ? (
        <Link to={to}>
          <button
            onClick={handleClick}
            className="btn bg-green-600 hover:bg-green-700 border-none text-lg text-white rounded-md py-2 px-4 cursor-pointer w-60"
          >
            {children}
          </button>
        </Link>
      ) : (
        <a
          href={to}
          className="relative bg-green-600 hover:bg-green-700 w-auto text-white rounded-md py-2 px-4"
          target="_blank"
        >
          {children}
        </a>
      )}
    </>
  );
}

export default LinkButton;
