"use client";
import React from "react";

const error = ({ error }: { error: Error }) => {
  return <h2>Error: {error.message}</h2>;
};

export default error;
