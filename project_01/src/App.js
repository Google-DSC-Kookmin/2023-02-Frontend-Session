import React, { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import Error from "./Error";
import Loader from "./Loader";
import styled from "styled-components";

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
  }

  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }
`;

function App() {
  const API_KEY = "6e4947456e6e626537324f4a726854";
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(""); // location 상태 추가

  const handleSearch = async (location) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://openapi.seoul.go.kr:8088/${API_KEY}/json/citydata_ppltn/1/5/${location}`
      );
      const data = await response.json();
      setResult(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <AppWrap>
      <div className="appContentWrap">
        <Input onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <Error errorMessage={error} />}
        {result && <Result data={result} />}{" "}
        {/* Result 컴포넌트에는 data prop을 전달해야 함 */}
      </div>
    </AppWrap>
  );
}

export default App;
