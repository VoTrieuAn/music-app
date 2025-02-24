"use client";

import { useEffect, useState } from "react";
import { CardInfo } from "../../Card/CardInfo";
import { SongItemPlay } from "../../Song/SongItemPlay";
import { Title } from "../../Title/Title";
import { off, onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebase.config";

export const Song = (props: { id: String }) => {
  const { id } = props;
  const [info, setInfo] = useState<any>({});
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const songsRef = ref(dbFirebase, `/songs/${id}`);
    onValue(songsRef, (item) => {
      const data = item.val();
      onValue(ref(dbFirebase, `/singers/${data.singerId[0]}`), (item) => {
        data.singer = item.val().title;
        setInfo(data);
      });
    });

    return () => {
      off(songsRef);
    };
  }, []);

  // Lấy danh sách bài hát cùng category
  useEffect(() => {
    if (!info || !info.categoryId) return; // Chỉ chạy khi có dữ liệu

    const songRef = ref(dbFirebase, "songs");
    const unsubscribeSongs = onValue(songRef, async (snapshot) => {
      const songPromises: Promise<any>[] = [];

      snapshot.forEach((item) => {
        const key = item.key;
        const songData = item.val();

        // Nếu bài hát đó có danh mục khác danh mục của bài hiện tại thì bỏ qua
        // Hoặc id của bài hát đó bằng id của bài hát hiện tại thì không lấy
        if (songData.categoryId !== info.categoryId || key === id) return;

        // Lấy thông tin ca sĩ
        const singerRef = ref(dbFirebase, "/singers/" + songData.singerId[0]);
        const singerPromise = new Promise((resolve) => {
          const unsubscribeSinger = onValue(singerRef, (singerSnapshot) => {
            const dataSinger = singerSnapshot.val();
            resolve({
              id: key,
              image: songData.image,
              title: songData.title,
              singer: dataSinger?.title || "Unknown",
              link: `/songs/${key}`,
              time: "4:32", // Thời gian này do backend trả ra
              audio: songData.audio,
            });

            // Hủy listener
            off(singerRef);
          });
        });

        songPromises.push(singerPromise);
      });

      const newDataSection = await Promise.all(songPromises);
      setData(newDataSection);
    });

    return () => {
      off(songRef);
    };
  }, [info]); // Thêm `info` vào dependency array

  return (
    <>
      {/* Song Info */}
      {info && (
        <CardInfo
          image={info.image}
          title={info.title}
          description={info.singer}
        />
      )}
      {/* End Song Info */}
      {/* Lời bài hát */}
      <div className="mt-[30px]">
        <Title text="Lời bài hát" />
        <div className="bg-[#212121] rounded-[15px] p-[20px]">
          {/* whitespace-pre-line: Cho phép không bỏ khoảng trắng để xuống hàng */}
          {info && (
            <p className="text-white whitespace-pre-line">{info.lyric}</p>
          )}
        </div>
      </div>
      {/* End Lời bài hát */}
      {/* Bài hát cùng danh mục */}
      <div className="mt-[30px]">
        <Title text="Bài hát cùng danh mục" />
        <div className="mt-[20px] grid grid-cols-1 gap-[10px]">
          {/* Song Item Play */}
          {data.length > 0 &&
            data.map((item, index) => <SongItemPlay key={index} item={item} />)}
          {/* End Song Item Play */}
        </div>
      </div>
      {/* End Bài hát cùng danh mục */}
    </>
  );
};
