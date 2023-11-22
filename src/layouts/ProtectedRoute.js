import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ type, auth }) => {
  return <Outlet />;
  // return auth.isAuthenticated ? <Outlet /> : <Navigate to="/404" replace />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
