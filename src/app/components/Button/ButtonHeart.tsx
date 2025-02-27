"use client";

import { authFirebase, dbFirebase } from "@/app/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

export const ButtonHeart = (props: any) => {
  const { item } = props;
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const uid = user.uid;
        const wishlist = item.wishlist;
        if (wishlist) {
          if (wishlist[uid]) {
            setIsActive(true);
          }
        }
      }
    });
  }, []);
  const handleWishlist = () => {
    const uid = authFirebase.currentUser?.uid;
    if (item.id && uid) {
      const songRef = ref(dbFirebase, `/songs/${item.id}`);
      runTransaction(songRef, (song) => {
        if (song) {
          if (song.wishlist && song.wishlist[uid]) {
            song.wishlist[uid] = null;
            setIsActive(false);
          } else {
            if (!song.wishlist) {
              song.wishlist = {};
            }
            song.wishlist[uid] = true;
            setIsActive(true);
          }
        }
        return song;
      });
    }
  };
  return (
    <>
      <button
        className="p-[8px] rounded-full text-primary"
        onClick={handleWishlist}
      >
        <FaHeart
          className={
            "text-[18px] text-white " + (isActive ? "!text-primary" : "")
          }
        />
      </button>
    </>
  );
};
