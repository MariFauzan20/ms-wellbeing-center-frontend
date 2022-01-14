import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CekThree from "../assets/img/cek03.png";

export default function HasilCheck() {
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

  console.log(finalResult);

  return (
    <>
      <div class="container my-4">
        <div class="text-center">
          <h3 class="pt-2">
            Hasil <br />
            Check Kesehatan Mental
          </h3>
        </div>

        <div class="check">
          <div class="container row">
            <div class="col-md-6 mx-auto py-4">
              <p>Score Anda : {Answer}</p>
              <img src={CekThree} alt=""></img>
            </div>
            <div class="col-md-6 mx-auto py-4 px-5 text-center">
              <p class="pt-4">Kondisi Kesehatan Mental Anda</p>
              <p>
                <b>{finalResult.condition_parameter}</b>
              </p>
            </div>
          </div>
        </div>
        <div class="py-5 info-hasil">
          <h4 class="text-center">
            Kondisi Kesehatan mentalmu :{" "}
            <b>{finalResult.condition_parameter}</b>
          </h4>
          <p class="px-5 py-2">{finalResult.description}</p>
          {/* <p class="px-5 py-2">
            Kami ada hadiah khusus untuk kamu nih yaitu free trial konsultasi
            (1x) dari kami nih. Mungkin dengan hadiah ini, kami bisa membantumu
            ketika menghadapi kesulitan
          </p> */}
          <div class="d-flex justify-content-end px-5">
            <div class="border border-info">
              <div class="container">
                <div class="mx-auto py-4">
                  <p class="text-center">Coba Layanan Konsultasi Kami</p>
                  <img src="assets/img/Rectangle 639.png" alt="" />
                  <div class="text-center">
                    <Link
                      as={Link}
                      to="/konseling-ms-wellbeing"
                      href="#"
                      className="btn btn-outline-primary"
                    >
                      Try
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
