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
      .get(`https://server-db-25.herokuapp.com/top-sellers`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        setLoading(false);
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
          <Text color="green.600">Loading ....</Text>
        ) : error ? (
          <Text color="red.600">Something went wrong ....</Text>
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