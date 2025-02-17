"use client";

import { dbFirebase } from "@/app/firebase.config";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export const SongLyric = (props: { id: String }) => {
  const [lyric, setLyric] = useState<any>(null);
  const { id } = props;
  useEffect(() => {
    onValue(ref(dbFirebase, `/songs/${id}`), (item) => {
      setLyric(item.val().lyric);
    });
  }, []);
  return (
    <>
      {/* whitespace-pre-line: Cho phép không bỏ khoảng trắng để xuống hàng */}
      {lyric && <p className="text-white whitespace-pre-line">{lyric}</p>}
    </>
  );
};
