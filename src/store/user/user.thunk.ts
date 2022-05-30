import { AdditionalInformation } from "@/utils/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export const getSnapshotFromUserAuth = (
  userAuth: User,
  additionalDetails?: AdditionalInformation
) => {};
