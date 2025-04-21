import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Attempting login:", { username, password });
    if (username === "mohamedmakram" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/"); // بعد تسجيل الدخول
    } else {
      alert("خطأ في اسم المستخدم أو كلمة المرور");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={handleLogin} className="p-4 shadow rounded bg-light w-100 w-md-50 w-lg-40">
        <h2 className="text-center mb-4">تسجيل الدخول</h2>

        <Form.Group className="mb-3">
          <Form.Label>اسم المستخدم</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-control-lg"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>كلمة المرور</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control-lg"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-lg w-100 mt-3">
          تسجيل الدخول
        </Button>
      </Form>
    </div>
  );
};

export default Login;
