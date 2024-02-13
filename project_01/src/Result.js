import React from "react";
import styled from "styled-components";

const ResultWrap = styled.div`
  margin-top: 60px;
  border: 1px black solid;
  padding: 10px;
  border-radius: 8px;

  .level {
    font-size: 60px;
    margin: 10px 0 20px 0;
  }
  .message {
    font-size: 20px;
    text-align: left;
    margin-top: 8px;
    margin-bottom: 10px;
  }
`;

const Result = ({ data }) => {
  if (
    !data ||
    !data["SeoulRtd.citydata_ppltn"] ||
    data["SeoulRtd.citydata_ppltn"].length === 0
  ) {
    return null;
  }

  return (
    <ResultWrap>
      <div className="level">
        {data["SeoulRtd.citydata_ppltn"][0]["AREA_CONGEST_LVL"]}
      </div>
      <div className="message">
        {data["SeoulRtd.citydata_ppltn"][0]["AREA_CONGEST_MSG"]}
      </div>
    </ResultWrap>
  );
};

export default Result;
