import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <div>
         <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f9f9f9",
        pt: "3rem",
        width: "100%",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          px: 3,
          mb: 6,
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#333",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: { xs: "2rem", lg: "3rem" },
            flex: 1,
            mb: { xs: 2, lg: 0 },
          }}
        >
          Welcome to the Ultimate Bookstore
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#555",
            fontWeight: "500",
            fontSize: { xs: "1rem", lg: "1.5rem" },
            flex: 1,
            mb: { xs: 2, lg: 0 },
          }}
        >
          Your Adventure Begins Here
        </Typography>
      </Box>

      {/* Offer & Features Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
          width: "100%",
          px: 3,
          mb: 6,
        }}
      >
        {/* Offer Box */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            bgcolor: "#fff",
            borderRadius: "1rem",
            boxShadow: 3,
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 8,
            },
          }}
        >
          <img
            src="/Contact.jpg"
            alt="Offer"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <Box sx={{ padding: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#333",
                marginBottom: 2,
              }}
            >
              Special Discount!
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", marginBottom: 3 }}>
              Get 20% off on all books this week! Grab your favorite titles now and save big.
            </Typography>
            <Link to="Login">
           
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                textTransform: "uppercase",
                fontWeight: "bold",
                borderRadius: "30px",
                padding: "1rem",
                "&:hover": {
                  backgroundColor: "#004a9f",
                },
              }}
            >
              Shop Now
            </Button>
            </Link>
          </Box>
        </Box>

        {/* Featured Book Collection */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            bgcolor: "#fff",
            borderRadius: "1rem",
            boxShadow: 3,
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 8,
            },
          }}
        >
          <img
            src="/BookShop.jpg"
            alt="Featured Books"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <Box sx={{ padding: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#333",
                marginBottom: 2,
              }}
            >
              Featured Books
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", marginBottom: 3 }}>
              Explore our curated collection of the best books. From bestsellers to hidden gems, we have it all.
            </Typography>
            <Link to="/Users">
            <Button
              variant="outlined"
              color="primary"
              sx={{
                width: "100%",
                textTransform: "uppercase",
                fontWeight: "bold",
                borderRadius: "30px",
                padding: "1rem",
                "&:hover": {
                  backgroundColor: "#0056b3",
                  color: "#fff",
                },
              }}
            >
              Browse Collection
            </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Featured Books Section */}
      <Box sx={{ width: "100%", px: 3, textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#333",
            mb: 4,
            fontSize: { xs: "1.5rem", lg: "2rem" },
          }}
        >
          Featured Books
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 4,
          }}
        >
          {/* Sample Book Cards */}
          {["Home.jpg", "Home2.jpg", "Home3.jpg", "Home4.jpg"].map((image, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "1rem",
                boxShadow: 3,
                overflow: "hidden",
                position: "relative",
                bgcolor: "#fff",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                },
              }}
            >
              <img
                src={`/${image}`}
                alt={`Book ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  Book Title {index + 1}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", marginBottom: 2 }}>
                  A short description of this book.
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: "30px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#0056b3",
                      color: "#fff",
                    },
                  }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
    </div>
    
  );
};

export default Homepage;