import React from "react";
import { Spinner } from "react-bootstrap"; // ✅ تأكد من تثبيت Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default LoadingSpinner;
