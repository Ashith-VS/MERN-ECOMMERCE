import React from 'react'

const Support = () => {
  return (
    <div>
  <div className="bg-dark bg-gradient p-5 text-white text-center">
    <div className="display-5 mb-4">How can we help you today?</div>
    <div className="container px-5">
      <form action="#" className="search">
        <div className="input-group">
          <input
            id="search"
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            required=""
          />
          <label className="visually-hidden" htmlFor="search" />
          <button
            className="btn btn-primary text-white"
            type="submit"
            aria-label="Search"
          >
            <i className="bi bi-search" />
          </button>
        </div>
      </form>
    </div>
  </div>
  <div className="bg-secondary py-4">
    <div className="container">
      <div className="row gx-5">
        <div className="col-md-4">
          <div className="row bg-white p-4 text-center">
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                fill="currentColor"
                className="i-va display-5 text-warning"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
            </div>
            <div className="col">
              <h5>Knowledge Base</h5>
              <div className="small text-muted">40 Article / 12 Categories</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row bg-white p-4 text-center">
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                fill="currentColor"
                className="i-va display-5 text-success"
                viewBox="0 0 16 16"
              >
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
            <div className="col">
              <h5>Forums</h5>
              <div className="small text-muted">10 Topics / 7 Posts</div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row bg-white p-4 text-center">
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                fill="currentColor"
                className="i-va display-5 text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
              </svg>
            </div>
            <div className="col">
              <h5>News</h5>
              <div className="small text-muted">15 Posts / 12 Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container pt-3 mb-3">
    <div className="container">
      <div className="row gx-3">
        <div className="col-md-3">
          <div className="border pt-3">
            <div className="text-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="i-va display-6 text-info"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
              </svg>
              <div className="fw-bold py-2">My Account</div>
            </div>
            <div className="list-group list-group-flush">
              <a className="list-group-item list-group-item-action" href="/">
                Cras justo odio
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Dapibus ac facilisis in
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Morbi leo risus
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Porta ac consectetur ac
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Vestibulum at eros
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border pt-3">
            <div className="text-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="i-va display-6 text-warning"
                viewBox="0 0 16 16"
              >
                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z" />
              </svg>
              <div className="fw-bold py-2">Charges &amp; Refunds</div>
            </div>
            <div className="list-group list-group-flush">
              <a className="list-group-item list-group-item-action" href="/">
                Cras justo odio
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Dapibus ac facilisis in
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Morbi leo risus
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Porta ac consectetur ac
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Vestibulum at eros
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border pt-3">
            <div className="text-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="i-va display-6 text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
              </svg>
              <div className="fw-bold py-2">Accounting &amp; Textes</div>
            </div>
            <div className="list-group list-group-flush">
              <a className="list-group-item list-group-item-action" href="/">
                Cras justo odio
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Dapibus ac facilisis in
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Morbi leo risus
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Porta ac consectetur ac
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Vestibulum at eros
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="border pt-3">
            <div className="text-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="i-va display-6 text-success"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <div className="fw-bold py-2">Cart</div>
            </div>
            <div className="list-group list-group-flush">
              <a className="list-group-item list-group-item-action" href="/">
                Cras justo odio
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Dapibus ac facilisis in
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Morbi leo risus
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Porta ac consectetur ac
              </a>
              <a className="list-group-item list-group-item-action" href="/">
                Vestibulum at eros
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Support