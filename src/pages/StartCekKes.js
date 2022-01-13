import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroFive from "../assets/img/check.png";
import { getQuestion } from "../redux/actions/question.actions";
import { useDispatch, useSelector } from "react-redux";

export default function StartCekKes() {
  const dispatch = useDispatch();
  const { question } = useSelector((state) => state.questionReducer);
  console.log(question);

  useEffect(() => {
    dispatch(getQuestion());
  }, []);

  return (
    <>
      <div className="container my-2 font-link">
        <div className="row">
          <div className="col-lg-6">
            <img className="w-100" src={HeroFive} alt=""></img>
          </div>
          <div className="col-lg-6">
            <div className="pt-4 pe-5 mt-4 text-hero">
              <h1>
                Check <span>by HealthByte</span>
              </h1>
              <h2 className="pt-3 pb-2">Baca panduan pengisiannya, yuk!</h2>
              <ol className="pe-3">
                <li>
                  Tidak ada jawaban yang benar atau salah, Isilah dengan jujur
                  sesuai kepribadianmu.
                </li>
                <li>Santai aja, tes ini gak diberi waktu.</li>
                <li>
                  Cari tempat yang nyaman dan kondusif supaya kamu lebih fokus.
                </li>
                <li>
                  Jika kamu keluar di tengah tes, maka seluruh proses tes dan
                  jawaban akan hilang.
                </li>
                <li>
                  Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan
                  dengan lengkap.
                </li>
                <li>Jumlah soal yang akan diberikan 30 soal, santai aja ya</li>
              </ol>
            </div>
          </div>

          <div className="text-center pt-5 pb-5">
            <Link
              as={Link}
              to="/soal-cek-kesehatan-mental/0"
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
