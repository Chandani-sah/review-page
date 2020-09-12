import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import image from "../../images/img1.jpg";
import "../ReviewPage/ReviewPage";

const ReviewPage = () => {
  const [reviewData, setReviewData] = useState();
  const fetchData = async () => {
    await axios({
      method: "GET",
      url: "http://localhost:3000/reviews",
    }).then((result) => {
      setReviewData(result.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <p>
        <h1>Students Reviews</h1>
      </p>
      <div class="container">
       <div className = "row">
            <div className="col-4">
              <img src={image} id="image" alt=""/>
            </div>
            
            <div className="col-8" >
              {reviewData &&
                reviewData.map((x, i) => <Card data={x} key={i} />)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
