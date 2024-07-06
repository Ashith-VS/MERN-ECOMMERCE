import {
  ADD_PRODUCT_DATA,
  ADD_TO_WISHLIST,
  CART_ITEMS,
  DELETE_PRODUCT_DATA,
  FORM_DATA,
  GET_CART_ITEMS,
  GET_ORDER_COLLECTION,
  GET_PRODUCT_DATA,
  GET_TO_WISHLIST,
  GET_USER_DATA,
  LOADER_ACTION,
  ORDER_COLLECTION,
  RESET_FORM_DATA,
  SET_CATEGORY_DATA,
  SET_FILTERED_DATA,
  UPDATE_PRODUCT_DATA,
  USER_DELETED,
} from "../../constants/constants";
const initialState = {
  loading: false,
  formData: {},
  cartItem: [],
  wishList: [],
  orderCollection: [],
  orderUserData: {},
  productData: [],
  filteredData: [],
  allPreviousCollection: [],
  sucesscartItem: {},
  sucessWishList: {},
  categoryData: [],
  users: [],
  userStatus: {},
  deletestatus: {},
  productAddStatus:{}
};
const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ACTION:
      return {
        ...state,
        loading: action.payload,
      };
    case FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case RESET_FORM_DATA:
      return {
        ...state,
        formData: {},
      };
    case CART_ITEMS:
      return {
        ...state,
        sucesscartItem: action.payload,
      };

    case GET_CART_ITEMS:
      return {
        ...state,
        cartItem: action.payload,
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        sucessWishList: action.payload,
      };
    case GET_TO_WISHLIST:
      return {
        ...state,
        wishList: action.payload,
      };

    case ORDER_COLLECTION:
      // console.log(action.payload)
      return {
        ...state,
        orderCollection: action.payload.cartItems,
        orderUserData: action.payload.formData,
      };
    case GET_ORDER_COLLECTION:
      // console.log(action.payload);
      return {
        ...state,
        allPreviousCollection: action.payload,
      };
    case GET_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload,
      };
    case SET_FILTERED_DATA:
      return {
        ...state,
        filteredData: action.payload,
      };
    case SET_CATEGORY_DATA:
      return {
        ...state,
        categoryData: action.payload,
      };
    case GET_USER_DATA:
      return {
        ...state,
        users: action.payload,
      };
    case USER_DELETED:
      return {
        ...state,
        userStatus: action.payload,
      };
    case DELETE_PRODUCT_DATA:
      return {
        ...state,
        deletestatus: action.payload,
      };
      case ADD_PRODUCT_DATA:
        return{
          ...state,
          productAddStatus:action.payload,
        }
        case UPDATE_PRODUCT_DATA:
          return{
           ...state,
            productAddStatus:action.payload,
          }
    default:
      return state;
  }
};

export default commonReducer;
