import { User } from "firebase/auth";

export interface CateItem {
  id: number;
  title: string;
  imageUrl: string;
}

export type UserData = User | null;
