import React from "react";
import { useParams } from "react-router-dom";
import TestCard from "./testCard";

export default function TestRoutes() {
  const testId = useParams().id;
  return <TestCard links={testId} />;
}
