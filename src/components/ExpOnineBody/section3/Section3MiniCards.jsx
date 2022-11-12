import React, {useState, useEffect } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import { breakpointForPlans } from "../../Slider/breakPoints";
import CardSlider from "../../Slider/CardSlider";
import PlanCard from "../section2/PlanCard";
import CardHeading from "../CardHeading";



// section3 - top sellers

const Section3MiniCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = () => {
    setLoading(true);
    setError(false);
    axios
      .get(`http://localhost:8080/top-sellers`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        setError(true);
        console.log(`error while calling top-sellers`, err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Box>
        <CardHeading heading="Top sellers" showTotal={data.length} />
      </Box>
      <Box>
        {loading ? (
          <Text>Loading ....</Text>
        ) : error ? (
          <Text>Something went wrong ....</Text>
        ) : (
          <CardSlider
            cardData={data}
            Card={PlanCard}
            breakpoints={breakpointForPlans}
          />
        )}
      </Box>
    </Box>
  );
};

export default Section3MiniCards;