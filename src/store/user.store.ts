import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
  SignOutAuth,
} from "@/utils/firebase/firebase";
import { User } from "firebase/auth";
import { action, makeObservable, observable } from "mobx";

export default class UserStore {
  user: User | null;
  constructor() {
    this.user = null;
    makeObservable(this, {
      user: observable,
      SET_CURRENT_USER: action,
      logout: action,
    });
    // 登记auth 监听
    onAuthStateChangeListener((user) => {
      if (user) {
        // 判断是否新建新用户
        createUserDocumentFromAuth(user);
      }
      this.SET_CURRENT_USER(user);
    });
  }
  SET_CURRENT_USER = (user: User | null) => {
    this.user = user;
  };
  logout = () => SignOutAuth();
}
