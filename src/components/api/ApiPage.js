import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const ApiPage = () => {
  const dataFetchedRef = useRef(false);
  const [result, setResult] = useState("");
  const [text, settext] = useState("duck eating sandwich");

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    // getImage()
    // getChat()
    // getOpenAi()
  }, []);

  const getImage = async () => {
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: "duck eating burger",
      n: 2,
      size: "1024x1024",
    });
    let image = response.data.data;
    console.log(image);
  };

  return (
    <>
      <div>TestPage</div>
      <button
        onClick={() => {
          getImage(text);
        }}
      >
        Search
      </button>
      {/* <p>{result.text}</p> */}
    </>
  );
};

export default ApiPage;
