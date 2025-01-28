import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles"; // Import useTheme to access the current theme

const HelpPage = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: theme.palette.primary.main }}
        >
          Help & FAQs
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.secondary }}
        >
          Find answers to your questions and learn how to use the trade tracking
          app.
        </Typography>
      </Box>

      <Accordion sx={{ backgroundColor: theme.palette.background.paper }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
          }
        >
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
            How do I add a new trade?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.text.secondary }}>
            To add a new trade, click on the "Add Trade" button on the
            dashboard. Fill in the required details such as the stock symbol,
            purchase price, quantity, and purchase date, and click "Submit."
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.paper }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
          }
        >
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
            Can I edit or delete a trade?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.text.secondary }}>
            Yes, you can edit or delete a trade. Go to the "Analysis" page, find
            the trade you want to modify, and use the "Edit" or "Delete" options
            provided.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.paper }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
          }
        >
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
            How do I view my profit and loss (P/L)?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.text.secondary }}>
            Navigate to the "Analysis" page to view a detailed breakdown of your
            trades. You can see the profit and loss (P/L) for each trade and a
            summary of your overall performance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.paper }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
          }
        >
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
            Is my data secure?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.text.secondary }}>
            Yes, we prioritize the security of your data. All information is
            stored securely and is not shared with third parties without your
            consent.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: theme.palette.background.paper }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
          }
        >
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
            How do I contact support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: theme.palette.text.secondary }}>
            If you need further assistance, please contact our support team by
            emailing support@tradetracker.com. We are here to help!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box textAlign="center" mt={4}>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.text.secondary }}
        >
          Didn’t find what you were looking for? Reach out to our support team
          for help.
        </Typography>
      </Box>
    </Container>
  );
};

export default HelpPage;
