import React from "react";

const Orbits = ({ size, border }) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className="hidden sm:block absolute !bg-transparent rounded-full inset-0  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
    >
      <div
        style={{
          animationDuration: "5s",
          width: `${size}px`,
          height: `${size}px`,
        }}
        className={`absolute !bg-transparent hidden sm:block rounded-full inset-0 ${border}  border-violet-500 animate-spin z-[1]`}
      ></div>
    </div>
  );
};

export default Orbits;
