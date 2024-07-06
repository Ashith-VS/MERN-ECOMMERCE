import React from 'react'

const Contact = () => {
  return (
    <div className="container my-3">
  <div className="row g-3">
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">
          <i className="bi bi-envelope" /> Send Message
        </div>
        <div className="card-body">
          <form className="needs-validation " noValidate="">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label required" htmlFor="name">
                    Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    </span>
                    <input
                      name="name"
                      input="[object Object]"
                      meta="[object Object]"
                      type="text"
                      label="Name"
                      placeholder="Your full name"
                      icon="[object Object]"
                      required=""
                      pattern="[a-zA-Z\s]*"
                      maxLength={50}
                      className="form-control"
                      id="name"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label required" htmlFor="company">
                    Company
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-building"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                      </svg>
                    </span>
                    <input
                      name="company"
                      input="[object Object]"
                      meta="[object Object]"
                      type="text"
                      label="Company"
                      placeholder="Your company name"
                      icon="[object Object]"
                      required=""
                      maxLength={50}
                      className="form-control"
                      id="company"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label required" htmlFor="mobileNo">
                    Mobile no
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-phone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </span>
                    <input
                      name="mobileNo"
                      input="[object Object]"
                      meta="[object Object]"
                      type="number"
                      label="Mobile no"
                      placeholder="Mobile no with country code"
                      icon="[object Object]"
                      required=""
                      max={999999999999999}
                      min={9999}
                      className="form-control"
                      id="mobileNo"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label required" htmlFor="email">
                    Email address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input
                      name="email"
                      input="[object Object]"
                      meta="[object Object]"
                      type="email"
                      label="Email address"
                      placeholder="Your email address"
                      icon="[object Object]"
                      maxLength={50}
                      required=""
                      className="form-control"
                      id="email"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-12">
                <label className="form-label " htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  input="[object Object]"
                  meta="[object Object]"
                  label="Message"
                  maxLength={1000}
                  placeholder="What you are looking for?"
                  id="message"
                  className="form-control"
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12">
                <div className="form-check form-check-inline">
                  <input
                    name="informed"
                    input="[object Object]"
                    meta="[object Object]"
                    id="informed"
                    label="Keep me informed via email or phone about its Products and Services."
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                  />
                  <label className="form-check-label" htmlFor="informed">
                    Keep me informed via email or phone about its Products and
                    Services.
                  </label>
                </div>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-header">
          <i className="bi bi-building" /> Address
        </div>
        <div className="card-body">
          <h6 className="card-title border-bottom border-dark pb-2">
            Head Office
          </h6>
          <address>
            <strong>Twitter, Inc.</strong>
            <br />
            1355 Market St, Suite 900
            <br />
            San Francisco, CA 94103
            <br />
            <i className="bi bi-telephone" /> <abbr title="Phone">P:</abbr>{" "}
            (123) 456-7890
          </address>
          <h6 className="card-title border-bottom border-dark pb-2">
            Development Office
          </h6>
          <address>
            <strong>Twitter, Inc.</strong>
            <br />
            1355 Market St, Suite 900
            <br />
            San Francisco, CA 94103
            <br />
            <i className="bi bi-telephone" /> <abbr title="Phone">P:</abbr>{" "}
            (123) 456-7890
          </address>
        </div>
      </div>
      <div className="card">
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d313635.5491853188!2d-122.57606416467848!3d37.20933611930123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c67b3754d%3A0xb42714f3436732f2!2s1355%20Market%20St%20%23900%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1599193189366!5m2!1sen!2sin"
            width={400}
            height={300}
            frameBorder={0}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
            title="Location"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact