import React from "react";
import { Link } from "react-router-dom";

export default function Soal() {
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
                Pekerjaan yang mengharuskan diri kamu menghadapi banyak orang
                membuat kamu
              </p>
            </div>
            <div
              className="btn-group option"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
              />
              <label className="btn btn-outline-primary" for="btnradio1">
                Lebih Semangat Bekerja
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label className="btn btn-outline-primary" for="btnradio2">
                Merasa Tertekan
              </label>
            </div>
          </div>
          <div className="pb-5 pt-5">
            <a href="#" className="btn btn-outline-secondary me-5 ms-5">
              Back
            </a>
            <Link
              as={Link}
              to="/hasil-cek-kesehatan-mental"
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
