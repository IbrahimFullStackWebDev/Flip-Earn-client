import { createSlice } from "@reduxjs/toolkit";
import { dummyListings } from "../../assets/assets";
import type { InitialStateType, ListingType } from "../../types";

const initialState: InitialStateType = {
  listings: dummyListings as ListingType[],
  userListings: dummyListings as ListingType[],
  balance: {
    earned: 0,
    withdrawn: 0,
    available: 0,
  },
};

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
  },
});

export const { setListings } = listingSlice.actions;

export default listingSlice.reducer;
