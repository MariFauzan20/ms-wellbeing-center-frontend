import React from "react";
import imgOne from "../assets/img/hero1.png";
import imgTwo from "../assets/img/hero2.png";
import imgThree from "../assets/img/hero3.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container my-5 font-link">
        <div className="row">
          <div className="col-lg-6">
            <div className="pt-4 pe-5 mt-4">
              <h1 className="display-5">
                Every Human
                <br />
                Being Deservers to <br />
                Be Happy
              </h1>
              <p className="lead">
                Avoid Self-Diagnosis, Consult Your Feelings <br />
                via Health Byte
              </p>
              <Link
                as={Link}
                to="/cek-kesehatan-mental"
                className="btn btn-warning text-white"
              >
                Get Free
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="w-100" src={imgOne} alt=""></img>
          </div>
        </div>
      </div>

      <div className="text-center bg-orange font-link">
        <div className="container" id="about">
          <h2 className="pt-4 pb-2">About</h2>
          <div className="about pe-5 ps-5">
            <p className="pe-5 ps-5 pb-4 mb-5">
              Health Byte sebuah platform yang memudahkan masyarakat untuk
              mengecek kesehatan mental mereka dan memberikan layanan konseling
              ke psikolog untuk yang mengalami masalah dengan kesehatan mental
            </p>
          </div>
        </div>
      </div>

      <div className="font-link">
        <div className="container">
          <h2 className="pt-1 text-center" id="services">
            Services
          </h2>
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6 text-center">
                <img className="w-75 img-fluid" src={imgTwo} alt=""></img>
              </div>
              <div className="col-lg-6">
                <div className="pt-5">
                  <h2 className="title-serv">
                    Check<span> by HealthByte</span>
                  </h2>
                  <p className="detail-serv pe-5">
                    Menjawab beberapa pertanyaan yang tersedia untuk mengetahui
                    masalah kesehatan mental kamu secara gratis di Health Byte
                  </p>
                  <Link
                    as={Link}
                    to="/cek-kesehatan-mental"
                    className="btn btn-outline-primary"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-5 pt-5 pb-5 font-link">
            <div className="row">
              <div className="col-lg-6 serv-2">
                <div className="pt-3 ps-5">
                  <h2 className="title-serv">
                    Konseling<span> by MS Wellbeing Center</span>
                  </h2>
                  <p className="detail-serv pe-5">
                    Curhat online tanpa takut dihakimi dan mendapatkan solusi
                    pasti dari para ahli. Psikolog online Health Byte akan
                    membantumu menyelesaikan masalah dengan sudut pandang yang
                    lebih positif. Mulai dari masalah hubungan, pekerjaan, atau
                    pengembangan diri sendiri.
                  </p>
                  <Link
                    as={Link}
                    to="/konseling-ms-wellbeing"
                    href="#"
                    className="btn btn-outline-primary"
                  >
                    Detail
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img className="w-75 img-fluid" src={imgThree} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
