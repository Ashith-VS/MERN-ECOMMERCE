import {LOADER_ACTION,CART_ITEMS,FORM_DATA,ADD_TO_WISHLIST,RESET_FORM_DATA,ORDER_COLLECTION,GET_PRODUCT_DATA,SET_FILTERED_DATA,GET_ORDER_COLLECTION,GET_CART_ITEMS,GET_TO_WISHLIST,SET_CATEGORY_DATA,GET_USER_DATA,USER_DELETED,DELETE_PRODUCT_DATA,ADD_PRODUCT_DATA,UPDATE_PRODUCT_DATA,DELETE_CART_ITEM} from "../../../../client/src/constants/constants";
import { format } from "date-fns";
import fetchData from "../../../../client/src/http/api";

export const showLoader = (status) => ({
  type: LOADER_ACTION,
  payload: status,
});

export const updateFormData = (name, value) => {
  return {
    type: FORM_DATA,
    payload: { name, value },
  };
};

export const resetFormData = () => {
  return {
    type: RESET_FORM_DATA,
  };
};

export const setCategoryData = (data) => {
  return {
    type: SET_CATEGORY_DATA,
    payload: data,
  };
};

export const addProductData = (product) => {
  return async (dispatch) => {
    try {
      const res = await fetchData("/addProduct", "post",product);
      dispatch({type: ADD_PRODUCT_DATA,payload: res});
    } catch (error) {
      console.error(error);
    }
  };
};

export const GetProductData = () => {
  return async (dispatch) => {
    dispatch(showLoader(true));
    try {
      const res = await fetchData("/productlist", "get");
      dispatch({type: GET_PRODUCT_DATA,payload: res?.products});
      dispatch(showLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(showLoader(false));
    }
  };
};

export const setFilteredData = (id) => {
  return async (dispatch) => {
    dispatch(showLoader(true));
    try {
      const res = await fetchData(`/productDetails/${id}`, "get");
      dispatch({type: SET_FILTERED_DATA,payload: res?.product});
      dispatch(showLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(showLoader(false));
    }
  };
};

export const cartItems = (response, currentUser) => {
  return async (dispatch) => {
    dispatch(showLoader(true));
    try {
      const res = await fetchData("/addtoCart", "POST", {
          userId: currentUser,
          item: response,
      });
      dispatch({
        type: CART_ITEMS,
        payload: res,
      });
      dispatch(showLoader(false));
    } catch (error) {
      dispatch(showLoader(false));
    }
  };
};

export const getCartItem = (id) => {
  return async (dispatch) => {
    dispatch(showLoader(true));
    try {
      const res = await fetchData(`/cart/${id}`, "get");
      dispatch({
        type: GET_CART_ITEMS,
        payload: res?.data?.cartItems,
      });
      dispatch(showLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(showLoader(false));
    }
  };
};

export const deleteCartItem=(itemId,userId)=>{
  return async (dispatch)=>{
    try {
      const res =await fetchData(`/deletecart`,"post",{userId,itemId})
      dispatch({
        type: DELETE_CART_ITEM,
        payload: res,
      });
    } catch (error) {
      console.error(error)
    }
  }
}

export const AddWishList = (response, currentUser) => {
  return async (dispatch) => {
    try {
      const res = await fetchData("/addwishlist", "post", {
        userId: currentUser,
        item: response,
      });
      dispatch({
        type: ADD_TO_WISHLIST,
        payload: res,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const GetWishlist = (currentUser) => {
  return async (dispatch) => {
    try {
      const res = await fetchData(`/wishlist/${currentUser}`, "get");
      dispatch({
        type: GET_TO_WISHLIST,
        payload: res?.data?.wishlistItems,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const OrderCollection = (formData, cartItem, currentUser) => {
  const id = Date.now().toString();
  const date = format(new Date(), "dd/MM/yyyy");
  // Add uid to each cartItem
  const cartItems = cartItem.map((item) => ({
    ...item,
    uid: id,
  }));
  // console.log(cartItems);
  // Add uid to formData
  const updatedFormData = { ...formData, uid: id, date: date };
  return async (dispatch) => {
    try {
      const res = await fetchData("/addOrders", "post", {
          userId: currentUser,
          item: cartItems,
          formData: updatedFormData,
          uid: id,
      });
      // console.log(res);
      dispatch({
        type: ORDER_COLLECTION,
        payload: { cartItems, formData },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const GetOrderCollection = (currentUser) => {
  return async (dispatch) => {
    dispatch(showLoader(true));
    try {
      const res = await fetchData(`/order/${currentUser}`, "get");
      dispatch({
        type: GET_ORDER_COLLECTION,
        payload: res?.orders,
      });
      dispatch(showLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(showLoader(false));
    }
  };
};

export const updateProductCount = (id, product) => {
  return async (dispatch) => {
    try {
      const res = await fetchData(`/updateproduct/${id}`, "post", {
          id,
          product,
      });
      dispatch({
        type: UPDATE_PRODUCT_DATA,
        payload: res,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteProductData = (id) => {
  console.log(id)
  return async (dispatch) => {
    try {
      const res = await fetchData("/deleteProduct", "delete", {id});
      console.log(res)
      dispatch({
        type: DELETE_PRODUCT_DATA,
        payload: res,
      });
    } catch (error) {
      console.error(error);
    }
  };
};


export const GetUserData = () => {
  return async (dispatch) => {
    dispatch(showLoader(true));
    try {
      const res = await fetchData("/users", "get");
      dispatch({
        type: GET_USER_DATA,
        payload: res?.users,
      });
      dispatch(showLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(showLoader(false));
    }
  };
};

export const deleteUser = (currentUser) => {
  console.log('currentUser: ', currentUser);
  return async (dispatch) => {
    dispatch(showLoader(true));
    try {
      const res = await fetchData("/deleteUser", "delete", {id: currentUser});
      dispatch({
        type: USER_DELETED,
        payload: res,
      });
      dispatch(showLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(showLoader(false));
    }
  };
};

export const updateProductData=()=>{
  return async (dispatch)=>{
    try {
      const res = await fetchData("/updateproduct", "put",{});
      console.log('res: ', res);
      dispatch({
        type: UPDATE_PRODUCT_DATA,
        payload: res,
      });
    } catch (error) {
      console.error(error);
    }
  }
}




