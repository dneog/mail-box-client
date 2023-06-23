import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDataClicked: null,
};

const blurTickSlice = createSlice({
  name: 'blueTick',
  initialState,
  reducers: {
    SET_CLICK(state, action) {
      state.isDataClicked = action.payload;

      console.log(action.payload);
    },
  },
});

export const { SET_CLICK } = blurTickSlice.actions;
export const selectIsDataClicked = (state) => state.blueTick.isDataClicked;
export default blurTickSlice.reducer;






// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     isDataClicked: null
// }


// const BlurTickSlice = createSlice({
//   name: 'blueTick',
//   initialState,
//   reducers: {
//     IS_CLICKED(state, action){
     
//       // state.isDataClicked = action.payload || 0;
//      console.log(action.payload);
       
//     }
//   }
// });

// export const {IS_CLICKED} = BlurTickSlice.actions
// export const selectBlueTick=(state)=> state.blueTick.isDataClicked;
// export default BlurTickSlice.reducer