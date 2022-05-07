import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="container p-2">
      <h1 className="text-center mt-5 mb-5">
        Inventory
        <span className="text-primary fw-bold"> Reviews</span>
      </h1>
      <section className="vh-200 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col col-xl-10">
              <div className="card shadow rounded bg-body p-4">
                <div className="card-body p-5 ">
                  <div className="row d-flex justify-content-center py-2">
                    <div className="col-md-8 col-lg-9 col-xl-8">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img
                            src="https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/sujon.png"
                            className="rounded-circle mb-4 mb-lg-0 shadow-2"
                            alt=""
                            width="90"
                            height="90"
                          />
                        </div>
                        <div className="flex-grow-1 ms-4 ps-3">
                          <figure>
                            <blockquote className="blockquote mb-4">
                              <p>
                                <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                <span className="font-italic">
                                  Good product. Promt support by the seller. I
                                  was not happy with the Monitor provided
                                  initially, seller got it replaced. Very good
                                  support from seller on any technical issue.
                                  Seller connects through video call to resolve
                                  the issue. This is my first refurbished
                                  purchase, but I am happy with its performance.
                                </span>
                              </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                              Md. Sujon{" "}
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center py-2">
                    <div className="col-md-8 col-lg-9 col-xl-8">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img
                            src="https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/angela.jpg
"
                            className="rounded-circle mb-4 mb-lg-0 shadow-2"
                            alt=""
                            width="90"
                            height="90"
                          />
                        </div>
                        <div className="flex-grow-1 ms-4 ps-3">
                          <figure>
                            <blockquote className="blockquote mb-4">
                              <p>
                                <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                <span className="font-italic">
                                  Delivered in time and ahead of schedule.
                                  Packaging is fine. The item is as described
                                  and the quality of product is good and value
                                  for money. Core i5 processor clearly an asset
                                  at this price range and has already showed in
                                  terms of its performance and speed. I am a
                                  multi tasker and would be running several
                                  processes/ programmes at any given time and am
                                  happy with the performance.
                                </span>
                              </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                              Angela Yu{" "}
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center py-2">
                    <div className="col-md-8 col-lg-9 col-xl-8">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <img
                            src="https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/images/sarah.jpg"
                            className="rounded-circle mb-4 mb-lg-0 shadow-2"
                            alt=""
                            width="90"
                            height="90"
                          />
                        </div>
                        <div className="flex-grow-1 ms-4 ps-3">
                          <figure>
                            <blockquote className="blockquote mb-4">
                              <p>
                                <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                <span className="font-italic">
                                  This AIO has a very good config. Boots quick
                                  due to the SSD. Video and audio quality is
                                  good. The only thing I felt lacking was a good
                                  camera. However, I don't use the PC for video
                                  calls so no issues for me.
                                </span>
                              </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                              Sarah Parmenter{" "}
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
