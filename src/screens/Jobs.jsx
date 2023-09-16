import React from "react";
import "../css/jobs.css";

export default function Jobs() {
  return (
    <>
      <div className="title">
        <span>Find A Job</span>{" "}
      </div>
      <hr className="line"></hr>
      <br />
      <div className="job-container">
        <div className="job_card">
          <div className="job_card-image">
            <h1 style={{ position: "absolute", left: "52px", top: "220px" }}>
              Food Service <br /> Worker{" "}
            </h1>
            <p>
              <i
                class="fa-solid fa-location-dot"
                style={{
                  height: "24px",
                  position: "absolute",
                  top: "447px",
                  left: "241px",
                }}
              >
                Mumbai
              </i>
            </p>
          </div>
          <div class="jpb_card-content">
            <p class="job_card-title"></p>
            <p class="job_card-description">
              Assist in food preparation, serving, and cleaning in a variety of
              settings like shelters, food banks, or community kitchens.
            </p>
          </div>
          <button class="job_card-button">See more</button>
        </div>

        <div className="job_card">
          <div className="job_card-image">
            <h1 style={{ position: "absolute", left: "424px", top: "221px" }}>
              Recycling Center <br /> Worker{" "}
            </h1>
            <p>
              <i
                class="fa-solid fa-location-dot"
                style={{
                  height: "24px",
                  position: "absolute",
                  top: "448px",
                  left: "620px",
                }}
              >
                Mumbai
              </i>
            </p>
          </div>
          <div class="jpb_card-content">
            <p class="job_card-title"></p>
            <p class="job_card-description">
              Sort, process, and manage recyclable materials to contribute to
              sustainable waste management practices.
            </p>
          </div>
          <button class="job_card-button">See more</button>
        </div>
      </div>
      <br />
      
    </>
  );
}