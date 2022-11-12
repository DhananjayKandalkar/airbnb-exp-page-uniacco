import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import { breakpointForPlans } from "../../Slider/breakPoints";
import PlanCard from "./PlanCard";
import CardSlider from "../../Slider/CardSlider";
import CardHeading from "../CardHeading";



// section2 - Plan a trip with local host

const Section2MiniCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = () => {
    setLoading(true);
    setError(false);
    axios
      .get(`http://localhost:8080/plan-trip-data`)
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        setError(true);
        console.log(`error while calling plan-trip-data`, err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Box>
        <CardHeading
          heading="Plan a trip with help from local Hosts around the world"
          showTotal={data.length}
        />
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

export default Section2MiniCards;