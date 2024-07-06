import React from 'react'
import img1 from "../../assets/images/blog/nature-1.webp"
import img2 from "../../assets/images/blog/nature-2.webp"
import img3 from "../../assets/images/blog/nature-3.webp"
import img4 from "../../assets/images/blog/nature-thumbnail-1.webp"
import img5 from "../../assets/images/blog/nature-thumbnail-2.webp"
import img6 from "../../assets/images/blog/nature-1.webp"
import img7 from "../../assets/images/blog/nature-2.webp"
import img8 from "../../assets/images/blog/nature-3.webp"
import img9 from "../../assets/images/blog/nature-p-1.webp"
const Blog = () => {
  return (
    <div className="container my-3">
  <div
    id="carouselBlogBanner"
    className="carousel slide mb-3"
    data-bs-ride="carousel"
    style={{ minHeight: 100 }}
  >
    <ol className="carousel-indicators">
      <li
        data-bs-target="#carouselBlogBanner"
        data-bs-slide-to={0}
        className="active"
      />
      <li
        data-bs-target="#carouselBlogBanner"
        data-bs-slide-to={1}
        className=""
      />
      <li
        data-bs-target="#carouselBlogBanner"
        data-bs-slide-to={2}
        className=""
      />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <a href="/blog/detail">
          <img
            src={img1}
            className="img-fluid"
            alt="First slide label"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
          </div>
        </a>
      </div>
      <div className="carousel-item ">
        <a href="/blog/detail">
          <img
            src={img2}
            className="img-fluid"
            alt="Second slide label"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </a>
      </div>
      <div className="carousel-item ">
        <a href="/blog/detail">
          <img
            src={img3}
            className="img-fluid"
            alt="Third slide label"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl.</p>
          </div>
        </a>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselBlogBanner"
      role="button"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselBlogBanner"
      role="button"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
  <div className="row mb-3">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">World</strong>
          <h4 className="mb-0">Featured post</h4>
          <div className="mb-1 text-muted small">Oct 06, 2020</div>
          <p className="card-text mb-auto">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a className="stretched-link btn btn-sm btn-light" href="/">
            Continue reading
            <i className="bi bi-chevron-right" />
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={img4} alt="..." />
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Design</strong>
          <h4 className="mb-0">Post title</h4>
          <div className="mb-1 text-muted small">Oct 08, 2020</div>
          <p className="mb-auto">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <a className="stretched-link btn btn-sm btn-light" href="/">
            Continue reading
            <i className="bi bi-chevron-right" />
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={img5} alt="..." />
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-8">
      <div className="card mb-3">
        <img
          src={img6}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            <a className="text-decoration-none" href="/blog/detail">
              It is a long established fact that a reader will be distracted by
              the readable content
            </a>
          </h5>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="card-text">
            <small className="me-3">
              <i className="bi bi-calendar-event me-1" />
              Jul 05, 2020
            </small>
            <small className="me-3">
              <i className="bi bi-tags me-1" />
              <span>
                <a className="text-decoration-none" href="/">
                  Branding
                </a>
                ,{" "}
              </span>
              <span>
                <a className="text-decoration-none" href="/">
                  Design
                </a>
                ,{" "}
              </span>
            </small>
            <small className="">
              <i className="bi bi-chat-right-text me-1" />
              <a className="text-decoration-none" href="/">
                2 Comments
              </a>
            </small>
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <img
          src={img7}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            <a className="text-decoration-none" href="/blog/detail">
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </a>
          </h5>
          <p className="card-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
          <p className="card-text">
            <small className="me-3">
              <i className="bi bi-calendar-event me-1" />
              Aug 05, 2020
            </small>
            <small className="me-3">
              <i className="bi bi-tags me-1" />
              <span>
                <a className="text-decoration-none" href="/">
                  Branding
                </a>
                ,{" "}
              </span>
              <span>
                <a className="text-decoration-none" href="/">
                  Design
                </a>
                ,{" "}
              </span>
            </small>
            <small className="">
              <i className="bi bi-chat-right-text me-1" />
              <a className="text-decoration-none" href="/">
                3 Comments
              </a>
            </small>
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <img
          src={img8}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            <a className="text-decoration-none" href="/">
              The standard chunk of Lorem Ipsum used since the 1500s
            </a>
          </h5>
          <p className="card-text">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable.
          </p>
          <p className="card-text">
            <small className="me-3">
              <i className="bi bi-calendar-event me-1" />
              Sep 05, 2020
            </small>
            <small className="me-3">
              <i className="bi bi-tags me-1" />
              <span>
                <a className="text-decoration-none" href="/">
                  Branding
                </a>
                ,{" "}
              </span>
              <span>
                <a className="text-decoration-none" href="/">
                  Design
                </a>
                ,{" "}
              </span>
            </small>
            <small className="">
              <i className="bi bi-chat-right-text me-1" />
              <a className="text-decoration-none" href="/">
                4 Comments
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-4 mb-3 bg-light rounded ">
        <h4 className="fst-italic">About Me</h4>
        <div className="progress mb-2" style={{ height: 1 }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "25%" }}
          />
        </div>
        <p className="mb-0">
          Quis vero phasellus hac nullam, in quam vitae duis adipiscing mauris
          leo, laoreet eget at quis, ante vestibulum vivamus vel. Sapien
          lobortis, eget orci purus amet pede, consectetur neque risus.
        </p>
      </div>
      <div className="mb-4 px-4 ">
        <h4 className="fst-italic">Follow Me</h4>
        <div className="progress mb-2" style={{ height: 1 }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "25%" }}
          />
        </div>
        <a className="btn btn-light btn-sm bg-twitter me-2" href="/">
          <i className="bi bi-twitter-x text-white mx-1" />
        </a>
        <a className="btn btn-light btn-sm bg-facebook me-2" href="/">
          <i className="bi bi-facebook text-white mx-1" />
        </a>
        <a className="btn btn-light btn-sm bg-instagram me-2" href="/">
          <i className="bi bi-instagram text-white mx-1" />
        </a>
        <a className="btn btn-light btn-sm bg-google me-2" href="/">
          <i className="bi bi-youtube text-white mx-1" />
        </a>
      </div>
      <div className="mb-4 px-4 ">
        <h4 className="fst-italic">Most Viewed</h4>
        <div className="progress mb-2" style={{ height: 1 }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "25%" }}
          />
        </div>
        <div className="card text-white">
          <a
            className="stretched-link text-decoration-none text-white"
            href="/"
          >
            <img
              src={img9}
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay">
              <h5 className="card-title position-absolute bottom-0 mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </h5>
            </div>
          </a>
        </div>
      </div>
      <div className="mb-4 px-4 ">
        <h4 className="fst-italic">Tags</h4>
        <div className="progress mb-2" style={{ height: 1 }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "25%" }}
          />
        </div>
        <a className="btn btn-sm btn-outline-info me-2 mb-2" href="/">
          Summer
        </a>
        <a className="btn btn-sm btn-outline-secondary me-2 mb-2" href="/">
          Clothing
        </a>
        <a className="btn btn-sm btn-outline-success me-2 mb-2" href="/">
          Woman
        </a>
        <a className="btn btn-sm btn-outline-danger me-2 mb-2" href="/">
          Hot Trend
        </a>
        <a className="btn btn-sm btn-outline-dark me-2 mb-2" href="/">
          Jacket
        </a>
        <a className="btn btn-sm btn-outline-primary me-2 mb-2" href="/">
          Men
        </a>
        <a className="btn btn-sm btn-outline-warning me-2 mb-2" href="/">
          Luxyry
        </a>
      </div>
      <div className="mb-4 px-4 ">
        <h4 className="fst-italic">Archives</h4>
        <div className="progress mb-2" style={{ height: 1 }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "25%" }}
          />
        </div>
        <a className="d-block mb-1" href="/">
          March 2020 (40)
        </a>
        <a className="d-block mb-1" href="/">
          April 2020 (08)
        </a>
        <a className="d-block mb-1" href="/">
          May 2020 (11)
        </a>
        <a className="d-block mb-1" href="/">
          Jun 2020 (21)
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blog