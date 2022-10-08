import React from "react";

interface routeT {
  path: string;
  component: {};
}

const Route: React.FC<routeT> = ({ path, component }) => {
  return <>{component}</>;
};

export default Route;
