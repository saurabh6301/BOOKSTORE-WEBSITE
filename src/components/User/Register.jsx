import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navigation from "../navigation/navigation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });
  const [users, setUsers] = useState([]); // To display registered users
  const [message, setMessage] = useState("");
  const [showAdminFeatures, setShowAdminFeatures] = useState(false); // Toggle admin features
  const navigate=useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9999/register", user, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(response.data);
      setTimeout(() => {
        navigate("/Cotegorie");
      }, 1000);
      fetchUsers(); // Refresh user list after registration
      setUser({
        username: "",
        email: "",
        password: "",
        address: "",
        phoneNumber: "",
      }); // Reset form
    } catch (error) {
      setMessage(error.response?.data || "Registration failed.");
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9999/register", {
        headers: { "Content-Type": "application/json" },
      });
      setUsers(response.data);
    } catch (error) {
      setMessage("Failed to fetch users.");
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:9999/register/${userId}`);
      setMessage(response.data);
      fetchUsers(); // Refresh user list
    } catch (error) {
      setMessage(error.response?.data || "Failed to delete user.");
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === "£") {
        setShowAdminFeatures((prev) => !prev); // Toggle admin features visibility
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          User Registration
        </Typography>

        {/* Display message */}
        {message && (
          <Alert severity={message.includes("failed") ? "error" : "success"} sx={{ mb: 3 }}>
            {message}
          </Alert>
        )}

        {/* Registration form */}
        <Box component="form" onSubmit={registerUser} noValidate>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={user.username}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              type="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={user.address}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
              type="tel"
              variant="outlined"
            />
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Registered users */}
        <Typography variant="h5" component="h2" gutterBottom>
          Registered Users
        </Typography>
        {users.length > 0 ? (
          <List>
            {users.map((user) => (
              <ListItem
                key={user.userId}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ListItemText primary={user.username} secondary={user.email} />
                {/* Show Delete Button Only for Admin */}
                {showAdminFeatures && (
                  <IconButton
                    edge="end"
                    color="error"
                    onClick={() => deleteUser(user.userId)}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1" color="textSecondary">
            No users found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Register;