"use client";
import React from "react";

const error = ({ error }: { error: Error }) => {
  return <h2 className="text-danger">Error: {error.message}</h2>;
};

export default error;
