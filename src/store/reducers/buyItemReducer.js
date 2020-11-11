// import {BUY} from '../types'
// export default (state = {cartList: []}, action) => {
//     switch (action.type) {
//       case BUY.BUY_ITEM: {
//         const buyItem = [...state.cartList];
//         return {
//           ...state,
//           cartList: [...cartList, action.payload],
//         };
//       }

//       case BUY.BUY_REMOVE: {
//         const buyItem = [...state.cartList];
//         let index = action.payload;
//         cartList.splice(index, 1);

//         return {
//           ...state,
//           cartList: [...cartList],
//         };
//       }
//       default:
//         return state;
//     }
//   };
