import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { People, Timeline, TrendingUp } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles"; // Import useTheme to access the current theme

const AboutUs = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default, // Use default background color for consistency
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            padding: 3,
            textAlign: "center",
            backgroundColor: theme.palette.background.paper, // Keep the card's background color consistent
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: theme.palette.text.primary, // Use text primary color from the theme
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ color: theme.palette.text.secondary }} // Set the paragraph text color to text secondary
            >
              Welcome to TradeTracker, your ultimate solution for tracking and
              managing your trades with ease and precision. Whether you are a
              seasoned trader or just starting, our app provides the tools to
              keep your trades organized and your performance optimized.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-around",
                marginTop: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <People
                  fontSize="large"
                  sx={{ color: theme.palette.primary.main }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginTop: 1,
                    color: theme.palette.text.primary, // Set the color to primary text
                  }}
                >
                  Community Driven
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  Built with feedback from traders around the world to meet
                  real-world needs.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Timeline
                  fontSize="large"
                  sx={{ color: theme.palette.primary.main }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginTop: 1,
                    color: theme.palette.text.primary, // Set the color to primary text
                  }}
                >
                  Detailed Tracking
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  Monitor your trades, analyze performance, and make informed
                  decisions.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <TrendingUp
                  fontSize="large"
                  sx={{ color: theme.palette.primary.main }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginTop: 1,
                    color: theme.palette.text.primary, // Set the color to primary text
                  }}
                >
                  Grow Your Portfolio
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  Utilize insights and features designed to help you grow your
                  trading portfolio.
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutUs;
