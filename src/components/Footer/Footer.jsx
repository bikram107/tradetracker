import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Box
        component="footer"
        sx={{
          backgroundColor: "primary.main",
          padding: "20px",
          position: "relative",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} Trade Tracker. All rights reserved.
        </Typography>
        <Typography variant="body2" color="white">
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="#" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
