import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetOrderCollection } from "../../redux/action/commonAction";
import { format } from "date-fns";

const Invoice = () => {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { id } = useParams();
  const { allPreviousCollection } = useSelector((state) => state.commonReducer);
  console.log("allPreviousCollection: ", allPreviousCollection[0].userData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOrderCollection(currentUser?._id));
  }, []);

  const order = [];
  const user = [];
  allPreviousCollection?.forEach((item) => {
    order?.push(item?.orderItems);
    user?.push(item?.userData);
    console.log('item?.userData: ', item?.userData);
  });
  console.log('user88: ', user);

  const orders = order.flat();

  const filteredResult = orders?.filter((item) => item.id === id);

  // const filteredUser = Object.values(user)?.filter((item) => item?.id === id);
  // console.log("filteredUser: ", filteredUser);
  const filteredUser=user
  console.log('filteredUser: ', filteredUser);

  const totalPrice = filteredResult.reduce((total, item, i) => {
    return total + item.totalPrice * item.productCount;
  }, 0);

  const date = format(filteredUser[0]?.orderDate, "dd/MM/yyyy");
  

  return (
    <div className="container-fluid bg-secondary p-3">
      <div className="bg-white p-5">
        <div>
          <div className="row g-3 mb-3 pb-3 border-bottom">
            <div className="col-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                fill="currentColor"
                className="bi bi-bootstrap-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
              </svg>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <span className="display-4">Invoice</span>
            </div>
          </div>
          <div className="row mb-3 pb-3 border-bottom">
            <div className="col-6">
              <b className="me-1">Invoice Date:</b> {date}
              
            </div>
            <div className="col-6 d-flex justify-content-end">
              <b className="me-1">Invoice No:</b> #1234567890
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <b className="border-bottom d-block">From</b>
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
            </div>
            <div className="col-6 text-sm-end">
              <b className="border-bottom d-block">To</b>
              <address>
                <strong> {filteredUser[0]?.name}</strong>
                <br />
                {filteredUser[0]?.address1}
                <br />
                {filteredUser[0]?.address22}
                <br />
                <abbr title="Phone">Ph:</abbr> {filteredUser[0]?.mobile}
              </address>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="card-header">
                    <tr>
                      <td className="col-3">
                        <strong>Product</strong>
                      </td>
                      <td className="col-4">
                        <strong>Description</strong>
                      </td>
                      <td className="col-2 text-center">
                        <strong>Rate</strong>
                      </td>
                      <td className="col-1 text-center">
                        <strong>QTY</strong>
                      </td>
                      <td className="col-2 text-end">
                        <strong>Amount</strong>
                      </td>
                    </tr>
                  </thead>
                  {filteredResult?.map((item) => {
                    return (
                      <tbody>
                        <tr>
                          <td className="col-3">{item.productName}</td>
                          <td className="col-4 text-1">
                            {item.productDescription}
                          </td>
                          <td className="col-2 text-center">{`$${item.totalPrice}`}</td>
                          <td className="col-1 text-center">
                            {item.productCount}
                          </td>
                          <td className="col-2 text-end">{`$${
                            item.totalPrice * item.productCount
                          }`}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                  <tfoot className="card-footer">
                    <tr>
                      <td colSpan={4} className="text-end">
                        <strong>Sub Total:</strong>
                      </td>
                      <td className="text-end">{`$${totalPrice}`}</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="text-end">
                        <strong>Tax:</strong>
                      </td>
                      <td className="text-end">{totalPrice && "$25.00"}</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="text-end border-bottom-0">
                        <strong>Total:</strong>
                      </td>
                      <td className="text-end border-bottom-0">
                        {totalPrice === 0
                          ? "0"
                          : `$${parseInt(totalPrice + 25)}`}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-1">
              <strong>NOTE :</strong> This is computer generated receipt and
              does not require physical signature.
            </p>
            <div className="btn-group btn-group-sm d-print-none">
              <a
                href="javascript:window.print()"
                className="btn btn-light border text-black-50 shadow-none"
              >
                <i className="bi bi-printer" /> Print
              </a>
              <a
                href="#"
                className="btn btn-light border text-black-50 shadow-none"
              >
                <i className="bi bi-download" /> Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
