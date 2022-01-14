import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Soal() {
  const { question } = useSelector((state) => state.questionReducer);
  let { index } = useParams();
  console.log(question[index]);

  const answerClik = (choice) => {
    let answer = JSON.parse(localStorage.getItem("answer"));
    answer[index] = choice.score;
    localStorage.setItem("answer", JSON.stringify(answer));
  };

  return (
    <>
      <div className="container my-4 font-link">
        <div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
              // style="width: 10%"
            >
              <span className="sr-only"></span>
            </div>
          </div>
          <p className="pt-2">Pertanyaan 1/30</p>
        </div>
        <div className="text-center bg-light">
          <div className="container">
            <div className="pe-5 ps-5">
              <p className="pt-5 pe-5 ps-5 mb-5 soal">
                {question[index].question}
              </p>
            </div>
            <div
              className="btn-group option"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              {question[index].choices.map((choice, index) => (
                <>
                  <input
                    key={choice._id}
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id={`btnradio${index + 1}`}
                    onClick={() => answerClik(choice)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    for={`btnradio${index + 1}`}
                  >
                    {choice.answer}
                  </label>
                </>
              ))}
            </div>
          </div>
          <div className="pb-5 pt-5">
            {/* <Link
              as={Link}
              to={`/soal-cek-kesehatan-mental/${Number(index) - 1}`}
              className="btn btn-outline-secondary me-5 ms-5"
            >
              Back
            </Link> */}
            <Link
              as={Link}
              to={
                Number(index) === question.length - 1
                  ? `/hasil-cek-kesehatan-mental`
                  : `/soal-cek-kesehatan-mental/${Number(index) + 1}`
              }
              className="btn btn-outline-secondary me-5 ms-5"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
