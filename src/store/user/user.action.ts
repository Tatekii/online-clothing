import { User } from "firebase/auth";

import { USER_ACTION_TYPES } from "./user.types";

import { createAction } from "@reduxjs/toolkit";
import {
  UserData,
  AdditionalInformation,
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "@/utils/firebase/firebase";

export const checkUserSession = createAction(
  USER_ACTION_TYPES.CHECK_USER_SESSION
);

export const setCurrentUser = createAction<UserData>(
  USER_ACTION_TYPES.SET_CURRENT_USER
);

export const googleSignIn = createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN);

export const emailSignIn = createAction<{ email: string; password: string }>(
  USER_ACTION_TYPES.EMAIL_SIGN_IN
);

export const signUp = createAction<{
  email: string;
  password: string;
  displayName: string;
}>(USER_ACTION_TYPES.SIGN_UP);

export const signOut = createAction(USER_ACTION_TYPES.SIGN_OUT);
