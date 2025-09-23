import React from "react";
import { Navigate } from "react-router-dom";
import { getAccessToken } from "../utils/network_data";

function ProtectedRoute({ children }) {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
