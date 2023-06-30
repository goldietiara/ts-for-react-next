import React from "react";

const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Hello this is parent</h1>
      <p>{children}</p>
    </div>
  );
};

export default Parent;
