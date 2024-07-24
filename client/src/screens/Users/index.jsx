import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { GetUserData, deleteUser } from "../../redux/action/commonAction";
import fetchData from "../../http/api";

const Users = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authReducer);
  const { users } = useSelector((state) => state.commonReducer);

  useEffect(() => {
    dispatch(GetUserData());
  }, []);

  const handleBlock = async (userId) => {
    try {
      await fetchData("/blockUser","patch",{id: userId});
      dispatch(GetUserData());
    } catch (error) {
      console.error("Error blocking user: ", error);
    }
  };
  const handleUnblock = async (userId) => {
    try {
      await fetchData("/unblockUser","patch",{id: userId});
      dispatch(GetUserData());
    } catch (error) {
      console.error("Error unblocking user: ", error);
    }
  }

  const handleDelete = async (userId) => {
    try {
      await dispatch(deleteUser(userId));
      await dispatch(GetUserData());
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const filteredData = users?.filter((item) => item?._id !== currentUser?._id);
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
                {filteredData?.map((item,i) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{i+1}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-secondary mt-2"
                        onClick={() => handleBlock(item._id)}
                      >
                       block
                      </button>
                      &ensp;
                      {item && item.blocked === true ?
                      (<button
                        className="btn btn-warning mt-2 "
                        onClick={() => handleUnblock(item._id)}
                      >unblock</button>):
                      (<button
                        className="btn btn-warning mt-2 "
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>)}
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
