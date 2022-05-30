import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { UserData } from "./firebase.types";

export { type UserData, type AdditionalInformation } from "./firebase.types";

const firebaseConfig = {
  apiKey: "AIzaSyC3roePTbw0On56rzS8HKZwoUn10_EWbl8",
  authDomain: "onlineclothing-6a9d5.firebaseapp.com",
  projectId: "onlineclothing-6a9d5",
  storageBucket: "onlineclothing-6a9d5.appspot.com",
  messagingSenderId: "33925676901",
  appId: "1:33925676901:web:d5f1e23551d732973e6b8c",
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

/** auth client */
export const auth = getAuth();

/** 谷歌弹窗登录 */
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

/** 跳转到谷歌登录 */
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

/** 创建用户数据 */
export const createUserDocumentFromAuth = async (
  userAuth: User,
  extraData = {}
) => {
  if (!userAuth) return;
  // ref
  const userDocRef = doc(db, "users", userAuth.uid);
  // snapshot
  const userSnapshot = (await getDoc(
    userDocRef
  )) as QueryDocumentSnapshot<UserData>;
  // 已经存在 return
  if (userSnapshot.exists()) {
    return userDocRef;
  }

  const { displayName, email } = userAuth;
  const createAt = new Date();

  // 存储
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createAt,
      // 用来重置displayName
      ...extraData,
    });
  } catch (err) {
    return err;
  }
  return userDocRef;
};

/** 使用邮箱创建用户 */
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
/** 使用邮箱登录 */
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

/** 登出 */
export const SignOutAuth = () => signOut(auth);

/** 观测 auth 状态 */
export const onAuthStateChangeListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
