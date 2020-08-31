import React from "react";

export const HelloworldComponent: React.FC = () => {
  const str: string = "Hello World! We are lemoncoders!";

  return (
    <div>
      <span>{str}</span>
    </div>
  );
};
