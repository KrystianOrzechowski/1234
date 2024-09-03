import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import OfferService from "@/utils/controllers/offerServices";

export default function Offers() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const router = useRouter();
  const [offers, setOffers] = useState([]);

  const fetchAllOffers = async () => {
    try {
      const response = await OfferService.fetchAllOffers();
      if (response && response.data) {
        setOffers(response.data);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchAllOffers();
  }, []);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleNavigate = (index) => {
    router.push(`/offers/${index}`); // Navigating to the respective route
  };

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        backgroundImage: "url(/assets/Fashion.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        overflowY: "auto", // Allows scrolling if there are many offers
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {offers &&
        offers.length > 0 &&
        offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ height: "100px" }}
            animate={{
              height: expandedIndex === index ? "250px" : "100px",
              transition: { duration: 0.5 },
            }}
            whileHover={{ scale: 1.02 }} // Slight scale on hover for better UX
            style={{
              width: "80%",
              padding: "20px",
              borderRadius: "10px",
              zIndex: 2,
              marginBottom: "20px",
              backgroundColor:
                expandedIndex === index
                  ? "rgba(0, 0, 0, 0.8)"
                  : "rgba(0, 0, 0, 0.6)", // Change background when expanded
              cursor: "pointer",
            }}
            onClick={() => handleExpand(index)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                {offer.attributes.title}
              </Typography>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center items-center"
                >
                  <Typography variant="body1" sx={{ mb: 4, maxWidth: "600px" }}>
                    {offer.attributes.sub_title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => handleNavigate(offer.id)}
                  >
                    <ArrowForwardIcon sx={{ color: "#fff" }} />
                  </Button>
                </motion.div>
              )}
            </Box>
          </motion.div>
        ))}
    </Box>
  );
}
