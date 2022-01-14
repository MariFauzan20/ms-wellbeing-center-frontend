import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CekThree from "../assets/img/cek03.png";

export default function HasilCheck() {
  const navigate = useNavigate();
  const [Answer, setAnswer] = useState(0);
  const [results, setResults] = useState([]);
  const [finalResult, setFinalResult] = useState({});

  useEffect(() => {
    let answer = JSON.parse(localStorage.getItem("answer"));
    let sumAnswer = answer.reduce((prev, current) => prev + current, 0);

    setAnswer(sumAnswer);

    const getResultParameter = async () => {
      const Token = localStorage.getItem("token");
      let result = await axios({
        method: "get",
        url: "https://ms-wellbeing-center-backend.herokuapp.com/result_parameter",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      setResults(result.data.data);
    };

    getResultParameter();
  }, []);

  useEffect(() => {
    results.map((result) => {
      if (Answer <= result.max_score && Answer >= result.min_score) {
        setFinalResult(result);
      }

      return 0;
    });
  }, [results, Answer]);

  const postResult = async () => {
    const Token = localStorage.getItem("token");
    let result = await axios({
      method: "post",
      url: "https://ms-wellbeing-center-backend.herokuapp.com/result_from_question",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
      data: {
        result_parameter: finalResult._id,
        total_score: Answer,
      },
    });

    navigate("/");
    console.log(result);
  };

  return (
    <>
      <div className="container my-4">
        <div className="text-center">
          <h3 className="pt-2">
            Hasil <br />
            Check Kesehatan Mental
          </h3>
        </div>

        <div className="check">
          <div className="container row">
            <div className="col-md-6 mx-auto py-4">
              <p>Score Anda : {Answer}</p>
              <img src={CekThree} alt=""></img>
            </div>
            <div className="col-md-6 mx-auto py-4 px-5 text-center">
              <p className="pt-4">Kondisi Kesehatan Mental Anda</p>
              <p>
                <b>{finalResult.condition_parameter}</b>
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 info-hasil">
          <div className="text-center">
            <h4>
              Kondisi Kesehatan mentalmu :{" "}
              <b>{finalResult.condition_parameter}</b>
            </h4>
            <p className="px-5 py-2">{finalResult.description}</p>
          </div>
          <div className="d-flex justify-content-end px-5">
            <div className="container">
              <div className="py-4">
                <div className="text-center">
                  <button
                    className="btn btn-outline-primary"
                    onClick={postResult}
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
