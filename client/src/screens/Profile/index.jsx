import React, { useState } from "react";
import json from "../../../../client/src/constants/data.json";
// import { auth } from "../../services/firebase";
// import { updatePassword } from "firebase/auth";
import { isEmpty } from "lodash";
import Modal from "react-modal";
import { useSelector } from "react-redux";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.authReducer);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleInputPasswordChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };
  // const updateUserPassword = async () => {
  //   try {
  //     const user = auth.currentUser;
  //     await updatePassword(user, formData.newPassword);
  //     setModalIsOpen(true);
  //     setFormData({
  //       currentPassword: "",
  //       confirmPassword: "",
  //       newPassword: "",
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    console.log(formData, "formData");
    const valid = validPassword();
    if (isEmpty(valid)) {
      // updateUserPassword();
    }
  };
  const validPassword = () => {
    const error = {};
    json.changePassword?.map((rule) => {
      const { id, label, isrequired } = rule;
      const value = formData[id];
      if (isEmpty(value) && isrequired) {
        error[id] = `${label} is required`;
      } else if (formData.currentPassword !== formData.confirmPassword) {
        error[id] = "Enter a valid password";
      } else if (
        formData.currentPassword === formData.newPassword &&
        formData.confirmPassword === formData.newPassword
      ) {
        error.newPassword = "password not be same as current password";
      }
      setErrors(error);
    });
    return error;
  };

  // const renderedProfileUpdate = (item) => {
  //   switch (item.type) {
  //     // case "file":
  //     //   return (
  //     //     <>
  //     //       <h6 className="card-header">
  //     //         <i className="bi bi-person-lines-fill" /> Profile update
  //     //       </h6>
  //     //       <img
  //     //         src="../../images/NO_IMG.png"
  //     //         alt=""
  //     //         className="card-img-top rounded-0 img-fluid bg-secondary"
  //     //       />
  //     //       <div className="card-body">
  //     //         <div className="mb-3">
  //     //           <label className="form-label d-none" htmlFor="formFile">
  //     //             formFile
  //     //           </label>
  //     //           <input
  //     //             type="file"
  //     //             name="formFile"
  //     //             className="form-control form-control-sm"
  //     //             id="formFile"
  //     //             accept="image/x-png,image/jpeg"
  //     //             required=""
  //     //           />
  //     //           <div className="d-flex">
  //     //             <div className="form-text">
  //     //               You don't allow uploading a photo more than 5MB
  //     //             </div>
  //     //           </div>
  //     //         </div>
  //     //       </div>
  //     //     </>
  //     //   );
  //     case "text":
  //       return (
  //         <li className="list-group-item">
  //           <div className="form-group undefined">
  //             <label className="form-label required" htmlFor={item.id}>
  //               {item.label}
  //             </label>
  //             <div className="input-group">
  //               <input
  //                 name={item.name}
  //                 type="text"
  //                 placeholder={item.placeholder}
  //                 id={item.id}
  //                 className="form-control"
  //                 disabled
  //               />
  //             </div>
  //           </div>
  //         </li>
  //       );

  //     default:
  //       return null;
  //   }
  // };

  const renderedPassword = (item) => {
    switch (item.type) {
      case "password":
        return (
          <div className="form-group mb-3">
            <label className="form-label required" htmlFor={item.id}>
              {item.label}
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-shield-lock"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                  <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
                </svg>
              </span>
              <input
                name={item.id}
                type="password"
                label="Current Password"
                placeholder="******"
                maxLength={item.maxlength}
                className="form-control"
                id={item.id}
                value={formData[item.id]}
                onChange={handleInputPasswordChange}
              />
            </div>
            {errors[item.id] && (
              <span style={{ color: "red" }}>{errors[item.id]}</span>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const renderedProfileDetail = (item) => {
    switch (item.type) {
      case "file":
        return;
      case "text":
        return (
          <div className="mb-3">
            <label className="form-label" htmlFor={item.id}>
              {item.label}
            </label>
            <input type="text" className="form-control" id={item.id} disabled />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-4">
          <form className="needs-validation" >
            <div className="card border-primary">
            <h6 className="card-header bg-info text-white">
              Profile
            </h6>
              <ul className="list-group list-group-flush">
                {/* {json.profileUpdate?.map((item) => renderedProfileUpdate(item))} */}

                <li className="list-group-item">

                  <div className="form-group undefined">
                    <label className="form-label required" htmlFor="">
                      Name
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        id=""
                        className="form-control"
                        value={currentUser?.name}
                        disabled
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="form-group undefined">
                    <label className="form-label required" htmlFor="">
                      Email
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        id=""
                        className="form-control"
                        value={currentUser?.email}
                        disabled
                      />
                    </div>
                  </div>
                </li>
                {currentUser?.mobile &&
                <li className="list-group-item">
                  <div className="form-group undefined">
                    
                    <label className="form-label required" htmlFor="">
                      Mobile
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        id=""
                        className="form-control"
                        value={currentUser?.mobile}
                        disabled
                      />
                    </div>
                  </div>
                </li>}
              </ul>
              {/* <div className="card-body">
                <button type="submit" className="btn btn-primary  d-flex">
                  Submit
                </button>
              </div> */}
            </div>
          </form>
        </div>
        <div className="col-md-8">
          <br />
          <div className="card border-info">
            <h6 className="card-header bg-info text-white">
              <i className="bi bi-key" /> Change Password
            </h6>
            <div className="card-body">
              <form
                className="needs-validation "
                onSubmit={handleSubmitPassword}
              >
                {json.changePassword?.map((item) => renderedPassword(item))}
                <button type="submit" className="btn btn-info  d-flex">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <div className="modal-content align-items-center justify-content-center">
            <div className="modal-body text-center">
              <h5 className="modal-title">Password updated Successfully</h5>
              <div className="modal-footer mt-3">
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => setModalIsOpen(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
