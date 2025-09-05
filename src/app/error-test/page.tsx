"use client";
import React, { useState } from "react";

const page = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>해당 페이지는 무조건 에러납니다.(테스트용){num}</h1>
      <button
        onClick={() => setNum(num + 1)}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
        }}
      >
        +1 버튼
      </button>

      <button
        onClick={() => {
          throw new Error(`page-test-error 테스트: ${num}`);
        }}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
        }}
      >
        에러 발생시키는 버튼
      </button>
    </div>
  );
};

export default page;
