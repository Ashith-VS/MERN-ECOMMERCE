import React from 'react'

const Accordion = () => {
  return (
    <div className="row">
    <div className="col-md-12">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-link active"
            id="nav-details-tab"
            data-bs-toggle="tab"
            href="#nav-details"
            role="tab"
            aria-controls="nav-details"
            aria-selected="true"
          >
            Details
          </a>
          <a
            className="nav-link"
            id="nav-randr-tab"
            data-bs-toggle="tab"
            href="#nav-randr"
            role="tab"
            aria-controls="nav-randr"
            aria-selected="false"
          >
            Ratings &amp; Reviews
          </a>
          <a
            className="nav-link"
            id="nav-faq-tab"
            data-bs-toggle="tab"
            href="#nav-faq"
            role="tab"
            aria-controls="nav-faq"
            aria-selected="false"
          >
            Questions and Answers
          </a>
          <a
            className="nav-link"
            id="nav-ship-returns-tab"
            data-bs-toggle="tab"
            href="#nav-ship-returns"
            role="tab"
            aria-controls="nav-ship-returns"
            aria-selected="false"
          >
            Shipping &amp; Returns
          </a>
          <a
            className="nav-link"
            id="nav-size-chart-tab"
            data-bs-toggle="tab"
            href="#nav-size-chart"
            role="tab"
            aria-controls="nav-size-chart"
            aria-selected="false"
          >
            Size Chart
          </a>
        </div>
      </nav>
      <div className="tab-content p-3 small" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-details"
          role="tabpanel"
          aria-labelledby="nav-details-tab"
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <details>
            <summary>Even more details</summary>
            <p>Here are even more details about the details.</p>
          </details>
          <details>
            <summary>Even more details</summary>
            <p>Here are even more details about the details.</p>
          </details>
          <hr />
          <dl>
            <dt>Description lists</dt>
            <dd>A description list is perfect for defining terms.</dd>
            <dt>Euismod</dt>
            <dd>
              Vestibulum id ligula porta felis euismod semper eget
              lacinia odio sem.
            </dd>
            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            <dt>Malesuada porta</dt>
            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
          </dl>
        </div>
        <div
          className="tab-pane fade"
          id="nav-randr"
          role="tabpanel"
          aria-labelledby="nav-randr-tab"
        >
          <div className="border-bottom mb-3">
            <div className="mb-2">
              <span>
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />
              </span>
              <span className="text-muted">
                <i className="bi bi-patch-check-fill text-success me-1" />
                Certified Buyer | Reviewed on{" "}
                <i className="fw-bold">15 October 2020</i>
              </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="mb-2">
              <button className="btn btn-sm btn-outline-success me-2">
                <i className="bi bi-hand-thumbs-up-fill" /> 10
              </button>
              <button className="btn btn-sm btn-outline-danger me-2">
                <i className="bi bi-hand-thumbs-down-fill" /> 5
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Report abuse
              </button>
            </div>
          </div>
          <div className="border-bottom mb-3">
            <div className="mb-2">
              <span>
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />
              </span>
              <span className="text-muted">
                <i className="bi bi-patch-check-fill text-success me-1" />
                Certified Buyer | Reviewed on{" "}
                <i className="fw-bold">15 October 2020</i>
              </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="mb-2">
              <button className="btn btn-sm btn-outline-success me-2">
                <i className="bi bi-hand-thumbs-up-fill" /> 10
              </button>
              <button className="btn btn-sm btn-outline-danger me-2">
                <i className="bi bi-hand-thumbs-down-fill" /> 5
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Report abuse
              </button>
            </div>
          </div>
          <div className="border-bottom mb-3">
            <div className="mb-2">
              <span>
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />
              </span>
              <span className="text-muted">
                <i className="bi bi-patch-check-fill text-success me-1" />
                Certified Buyer | Reviewed on{" "}
                <i className="fw-bold">15 October 2020</i>
              </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="mb-2">
              <button className="btn btn-sm btn-outline-success me-2">
                <i className="bi bi-hand-thumbs-up-fill" /> 10
              </button>
              <button className="btn btn-sm btn-outline-danger me-2">
                <i className="bi bi-hand-thumbs-down-fill" /> 5
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Report abuse
              </button>
            </div>
          </div>
          <div className="border-bottom mb-3">
            <div className="mb-2">
              <span>
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />
              </span>
              <span className="text-muted">
                <i className="bi bi-patch-check-fill text-success me-1" />
                Certified Buyer | Reviewed on{" "}
                <i className="fw-bold">15 October 2020</i>
              </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="mb-2">
              <button className="btn btn-sm btn-outline-success me-2">
                <i className="bi bi-hand-thumbs-up-fill" /> 10
              </button>
              <button className="btn btn-sm btn-outline-danger me-2">
                <i className="bi bi-hand-thumbs-down-fill" /> 5
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Report abuse
              </button>
            </div>
          </div>
          <div className="border-bottom mb-3">
            <div className="mb-2">
              <span>
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />
              </span>
              <span className="text-muted">
                <i className="bi bi-patch-check-fill text-success me-1" />
                Certified Buyer | Reviewed on{" "}
                <i className="fw-bold">15 October 2020</i>
              </span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="mb-2">
              <button className="btn btn-sm btn-outline-success me-2">
                <i className="bi bi-hand-thumbs-up-fill" /> 10
              </button>
              <button className="btn btn-sm btn-outline-danger me-2">
                <i className="bi bi-hand-thumbs-down-fill" /> 5
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Report abuse
              </button>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-faq"
          role="tabpanel"
          aria-labelledby="nav-faq-tab"
        >
          <dl>
            <div className="border-bottom mb-3">
              <dt>Q: Will there be any price cut within one month?</dt>
              <dd>
                <p>
                  <strong>A:</strong> Dont know but can hope for it.
                </p>
                <div className="text-muted mb-2">
                  By Venks on 12 January, 2020
                </div>
                <div className="mb-2">
                  <i>Was this answer helpful?</i>
                  <button className="btn btn-sm btn-outline-success me-2 ms-2">
                    <i className="bi bi-hand-thumbs-up-fill" />
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="bi bi-hand-thumbs-down-fill" />
                  </button>
                </div>
              </dd>
            </div>
            <div className="border-bottom mb-3">
              <dt>Q: Will there be any price cut within one month?</dt>
              <dd>
                <p>
                  <strong>A:</strong> Dont know but can hope for it.
                </p>
                <div className="text-muted mb-2">
                  By Venks on 12 January, 2020
                </div>
                <div className="mb-2">
                  <i>Was this answer helpful?</i>
                  <button className="btn btn-sm btn-outline-success me-2 ms-2">
                    <i className="bi bi-hand-thumbs-up-fill" />
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="bi bi-hand-thumbs-down-fill" />
                  </button>
                </div>
              </dd>
            </div>
            <div className="border-bottom mb-3">
              <dt>Q: Will there be any price cut within one month?</dt>
              <dd>
                <p>
                  <strong>A:</strong> Dont know but can hope for it.
                </p>
                <div className="text-muted mb-2">
                  By Venks on 12 January, 2020
                </div>
                <div className="mb-2">
                  <i>Was this answer helpful?</i>
                  <button className="btn btn-sm btn-outline-success me-2 ms-2">
                    <i className="bi bi-hand-thumbs-up-fill" />
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="bi bi-hand-thumbs-down-fill" />
                  </button>
                </div>
              </dd>
            </div>
            <div className="border-bottom mb-3">
              <dt>Q: Will there be any price cut within one month?</dt>
              <dd>
                <p>
                  <strong>A:</strong> Dont know but can hope for it.
                </p>
                <div className="text-muted mb-2">
                  By Venks on 12 January, 2020
                </div>
                <div className="mb-2">
                  <i>Was this answer helpful?</i>
                  <button className="btn btn-sm btn-outline-success me-2 ms-2">
                    <i className="bi bi-hand-thumbs-up-fill" />
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="bi bi-hand-thumbs-down-fill" />
                  </button>
                </div>
              </dd>
            </div>
            <div className="border-bottom mb-3">
              <dt>Q: Will there be any price cut within one month?</dt>
              <dd>
                <p>
                  <strong>A:</strong> Dont know but can hope for it.
                </p>
                <div className="text-muted mb-2">
                  By Venks on 12 January, 2020
                </div>
                <div className="mb-2">
                  <i>Was this answer helpful?</i>
                  <button className="btn btn-sm btn-outline-success me-2 ms-2">
                    <i className="bi bi-hand-thumbs-up-fill" />
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="bi bi-hand-thumbs-down-fill" />
                  </button>
                </div>
              </dd>
            </div>
          </dl>
        </div>
        <div
          className="tab-pane fade"
          id="nav-ship-returns"
          role="tabpanel"
          aria-labelledby="nav-ship-returns-tab"
        >
          <p>Your order of 100$ or more gets free standard delivery.</p>
          <ul>
            <li>Standard delivered 4-5 Business Days</li>
            <li>Express delivered 2-4 Business Days</li>
          </ul>
          <p>
            Orders are processed and delivered Monday-Friday (excluding
            public holidays)
          </p>
          <p>
            No Returns/Replacements Allowed - Returns or replacements
            are not accepted by seller for this product. Cancellation
            allowed.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-size-chart"
          role="tabpanel"
          aria-labelledby="nav-size-chart-tab"
        >
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <tbody>
                <tr>
                  <th>Size</th>
                  <th>Chest</th>
                  <th>Brand Size</th>
                  <th>Shoulder</th>
                  <th>Length</th>
                  <th>Sleeve Length</th>
                </tr>
                <tr>
                  <td>S</td>
                  <td>39.2</td>
                  <td>S</td>
                  <td>17</td>
                  <td>29.5</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>40.8</td>
                  <td>M</td>
                  <td>17.7</td>
                  <td>29.9</td>
                  <td>25.5</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>42.4</td>
                  <td>L</td>
                  <td>18.5</td>
                  <td>30.3</td>
                  <td>25.9</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>45.6</td>
                  <td>XL</td>
                  <td>19.2</td>
                  <td>30.7</td>
                  <td>26.3</td>
                </tr>
                <tr>
                  <td>XXL</td>
                  <td>48.8</td>
                  <td>XXL</td>
                  <td>20</td>
                  <td>31</td>
                  <td>26.7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Accordion