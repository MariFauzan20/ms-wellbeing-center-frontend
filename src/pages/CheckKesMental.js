import React from "react";
import HeroFour from "../assets/img/hero4.png";
import CekOne from "../assets/img/cek01.png";
import CekTwo from "../assets/img/cek02.png";
import CekThree from "../assets/img/cek03.png";
import CekFour from "../assets/img/cek04.png";
import { Link } from "react-router-dom";

export default function CheckKesMental() {
  return (
    <>
      <div className="container my-5 font-link">
        <div className="row">
          <div className="col-lg-6">
            <img className="w-100" src={HeroFour} />
          </div>
          <div className="col-lg-6">
            <div className="pt-4 pe-5 mt-4 text-hero p-5">
              <h1>
                Check <span>by HealthByte</span>
              </h1>
              <h2 className="pt-3 pb-2">
                Pentingnya Mengetahui Kesehatan Mental Anda
              </h2>
              <p>
                Mengetahui Kesehatan mental anda dapat membantu anda untuk
                meminimalisir keresahan dalam hidup anda, dengan menjawab
                beberapa pertanyaan yang ada dapat mengetahui masalah kesehatan
                mental kamu secara gratis melalui Health Byte
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 pb-5 font-link">
        <div className="container">
          <h3 className="mb-5 text-center">
            Alur <br />
            Cek Kesehatan Mental
          </h3>

          <div className="row justify-content-center pe-5 ps-5">
            <div className="col-md-3">
              <div className="card text-center pt-4 pb-3 h-100 bg-blue card-rad">
                <div className="card-block">
                  <img className="pb-3" src={CekOne} alt="" />
                  <h5 className="card-title">Klik Mulai</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center pt-4 pb-3 h-100 bg-blue card-rad">
                <div className="card-block">
                  <img className="pb-3" src={CekTwo} alt="" />
                  <h5 className="card-title">Menjawab Soal</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center pt-4 pb-3 h-100 bg-blue card-rad">
                <div className="card-block">
                  <img className="pb-3" src={CekThree} alt="" />
                  <h5 className="card-title">Hasil Cek Kesehatan Mental</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center pt-4 pb-3 h-100 bg-blue card-rad">
                <div className="card-block">
                  <img className="pb-3" src={CekFour} alt="" />
                  <h5 className="card-title">
                    Memutuskan Pilihan Layanan Selanjutnya
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-5">
            <Link
              as={Link}
              to="/start-cek-kesehatan-mental"
              className="btn btn-primary pe-5 ps-5"
            >
              Mulai
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
