import { Category } from "@/store/categories/categories.types";
import {
  collection,
  CollectionReference,
  doc,
  getDocs,
  query,
  writeBatch,
} from "firebase/firestore";
import { db } from "./firebase";

export const addCollectionAndDocument = async (
  collectionKey: string,
  payload: Category[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  payload.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());

    batch.set(docRef, obj);
  });

  await batch.commit();
};

/** 获取商品&分类数据 */
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(
    db,
    "categories"
  ) as CollectionReference<Category>;
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  // const categoryMap = querySnapshot.docs.reduce((acc: any, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  // return categoryMap;
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
