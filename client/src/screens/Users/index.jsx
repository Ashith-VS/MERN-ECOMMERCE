import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { db } from "../../services/firebase";
import { GetUserData, deleteUser } from "../../redux/action/commonAction";

const Users = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authReducer);
  const { users } = useSelector((state) => state.commonReducer);

  useEffect(() => {
    dispatch(GetUserData());
  }, []);

  const handleBlock = async (userId) => {
    try {
      const userDoc = doc(db, "user", userId);
      await updateDoc(userDoc, { blocked: true });
      users?.map((user) =>
        user.id === userId ? { ...user, blocked: true } : user
      );
    } catch (error) {
      console.error("Error blocking user: ", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await dispatch(deleteUser(userId));
      await dispatch(GetUserData());
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const filteredData = users?.filter((item) => item.uid !== currentUser.uid);
  return (
    <>
      {currentUser?.role === "admin" && (
        <div className="container text-center pb-4 col-sm-6">
          <h1 className="my-4">Users </h1>
          {isEmpty(filteredData) && (
            <div>
              <p className=" text-center pt-4">No Users Found</p>
            </div>
          )}

          <div>
            <table className="table table-striped table-bordered text-center">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>id</th>
                  <th>Email</th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.uid}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-secondary mt-2"
                        onClick={() => handleBlock(item.id)}
                      >
                        {item?.blocked ? "blocked" : "block"}
                      </button>
                      &ensp;
                      <button
                        className="btn btn-warning mt-2 "
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
