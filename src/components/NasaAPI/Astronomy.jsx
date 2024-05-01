import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Card, CardContent, Typography, Button } from "@material-ui/core";

import { Card, CardContent, Typography, Button } from "@mui/material";
import ModalImage from "react-modal-image";
import { useNavigate } from "react-router-dom";

const APODImage = ({ apiKey, date, startDate, endDate, count,thumbs }) => {
  const [apodData, setApodData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate(`/full-content/${date}/${apiKey}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

        if (date) {
          apiUrl += `&date=${date}`;
        } else if (startDate && endDate) {
          apiUrl += `&start_date=${startDate}&end_date=${endDate}`;
        }else if(count){
            apiUrl += `&count=${count}`
        }

        const response = await axios.get(apiUrl);
        if (Array.isArray(response.data)) {
          setApodData(response.data);
        } else {
          setApodData([response.data]);
        }
      } catch (error) {
        console.error("Error fetching APOD data:", error);
        setApodData([]);
      }
    };

    fetchData();
  }, [apiKey, date, startDate, endDate, count, thumbs]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {apodData.length === 0 ? (
        <Typography variant="body1" align="center">
          No APOD data available
        </Typography>
      ) : (
        apodData.map((apod) => (
          <Card key={apod.date} style={{ maxWidth: 300, margin: "30px" , marginTop: '100px', marginLeft:'90px'}}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {apod.title}
              </Typography>
            </CardContent>
            <ModalImage
              small={apod.url}
              large={apod.hdurl}
              alt={apod.title}
              hideDownload={true}
              hideZoom={false}
              hideRotate={false}
              style={{ width: "100%", height: "50px" ,objectFit: "cover"}} 
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {expanded
                  ? apod.explanation
                  : `${apod.explanation.slice(0, 200)}...`}
                {!expanded && apod.explanation.length > 200 && (
                  <Button onClick={handleSeeMoreClick} color="primary">
                    See More
                  </Button>
                )}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default APODImage;
