import React from "react";
import profileOne from "../assets/img/profile2.png";
import profileTwo from "../assets/img/profile1.png";
import article from "../assets/img/article.png";

export default function Articles() {
  return (
    <>
      <div className="container my-4">
        <div className="text-center">
          <h3 className="pt-2">Latest Updates</h3>
        </div>
        <div className="row py-4 px-4">
          <div className="col-md-5 py-4">
            <div className="py-3">
              <h4 className="pe-4">
                When “Unprecedented” Horrors Become the Norm, How Do We Live?
              </h4>
              <p className="pe-5">
                Harnessing the brain's ability to adapt for a better future
              </p>
              <div className="d-flex flex-row">
                <div className="text-center align-self-center">
                  <img className="img-profile" src={profileOne} alt="" />
                </div>
                <div className="align-items-center name-article">
                  <p className="pt-3">Brandy L Schillace in Elemental</p>
                  <p>Sep 5 · 6 min read</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="py-4">
              <h4 className="pe-4">
                When the Pursuit of Money Becomes an Addiction
              </h4>
              <p className="pe-5">
                What happens when currency devolves into an obsessive fix
              </p>
              <div className="d-flex flex-row">
                <div className="text-center align-self-center">
                  <img className="img-profile" src={profileOne} alt="" />
                </div>
                <div className="align-items-center name-article">
                  <p className="pt-3">Brandy L Schillace in Elemental</p>
                  <p>Sep 6 · 7 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 fr">
            <div className="ps-3">
              <div className="ps-3">
                <img className="img-big" src={article} alt="" />
              </div>

              <div className="py-3 ps-3">
                <h4>4 Reasons Why Hating Someone Can Be a Blessing</h4>
                <p className="pe-4">
                  Embracing the darkest of emotions is liberating and here's why
                </p>
                <div className="d-flex flex-row">
                  <div className="text-center align-self-center">
                    <img className="img-profile" src={profileTwo} alt="" />
                  </div>
                  <div className="align-items-center name-article">
                    <p className="pt-3">Abby Cheval</p>
                    <p>Sep 6 · 4 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-5">
            <a href="#" className="btn btn-outline-dark pe-5 ps-5">
              Show More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
