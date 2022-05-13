import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  User,
  UserCredential,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { UserInfo } from "os";

const firebaseConfig = {
  apiKey: "AIzaSyC3roePTbw0On56rzS8HKZwoUn10_EWbl8",
  authDomain: "onlineclothing-6a9d5.firebaseapp.com",
  projectId: "onlineclothing-6a9d5",
  storageBucket: "onlineclothing-6a9d5.appspot.com",
  messagingSenderId: "33925676901",
  appId: "1:33925676901:web:d5f1e23551d732973e6b8c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

/** 使用谷歌弹窗登录 */
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);

export const db = getFirestore();

/** 创建用户数据 */
export const createUserDocument = async (userAuth: User) => {
  // ref
  const userDocRef = doc(db, "users", userAuth.uid);
  // snapshot
  const userSnapshot = await getDoc(userDocRef);
  // 以及存在
  if (userSnapshot.exists()) {
    return userDocRef;
  }

  const { displayName, email } = userAuth;
  const createAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt,
    });
  } catch (err) {
    console.error(err);
  }
};
