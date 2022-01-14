import React from 'react'

export default function ProfileUser() {
  return (
    <>
      <section className="container py-8 h-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded- img-fluid"
                    />
                  </div>
                  <h4 className="mb-2">Julie L. Arsenault</h4>
                  <p className="text-muted mb-4">
                    Edit Account <span className="mx-2"></span>
                  </p>
                  <div className="input-group">
                    <h7>Email</h7>
                    <input
                      type="text"
                      aria-label="First name"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="input-group">
                    <h7>No. Hp</h7>
                    <input
                      type="text"
                      aria-label="First name"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="input-group">
                    <h7>Tempat, Tanggal Lahir</h7>
                    <input
                      type="text"
                      aria-label="First name"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
