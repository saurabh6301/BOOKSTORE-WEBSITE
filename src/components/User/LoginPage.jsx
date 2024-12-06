import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  Stack,
} from "@mui/material";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:9999/login", credentials, { withCredentials: true });

      if (response.status === 200) {
        setSuccessMessage("Login successful!");
        alert("Login user can't order more book without orders confrom.")
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("User not found.");
        setTimeout(() => {
          navigate("/Register");
        }, 1000);
      } else if (error.response && error.response.status === 401) {
        setTimeout(() => {
          navigate("/Register");
        }, 1000);
        setErrorMessage("User not found.");
      } else {
        setErrorMessage("An error occurred during login.");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#ffff",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 2, width: "100%" }}
        >
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              variant="outlined"
              value={credentials.username}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              value={credentials.password}
              onChange={handleChange}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                py: 1.5,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" },
              }}
            >
              Login
            </Button>
            <Link to="/register">
        <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                py: 1.5,
                backgroundColor: "#117A33",
                "&:hover": { backgroundColor: "#117293" },
              }}
            >
              SignUp
            </Button>
            </Link>
          </Stack>
          
        
        </Box>
       
       

        {errorMessage && (
          <Alert severity="error" sx={{ mt: 3, width: "100%" }}>
            {errorMessage}
          </Alert>
        )}
        {successMessage && (
          <Alert severity="success" sx={{ mt: 3, width: "100%" }}>
            {successMessage}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;  