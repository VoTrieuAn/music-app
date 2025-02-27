"use client";

import { dbFirebase } from "@/app/firebase.config";
import { off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { CardInfo } from "../../Card/CardInfo";
import { Title } from "../../Title/Title";
import { SongItemPlay } from "../../Song/SongItemPlay";

interface Song {
  id: string;
  image: string;
  title: string;
  singer: string;
  listen?: number;
  link: string;
  audio: string;
  time?: string;
  wishlist?: Record<string, boolean>;
}

interface Singer {
  image: string;
  title: string;
  description: string;
}

export const SingerInfo = (props: { id: string }) => {
  const { id } = props;
  const [info, setInfo] = useState<Singer>({
    image: "/",
    title: "",
    description: "",
  });
  const [data, setData] = useState<Song[]>([]);
  useEffect(() => {
    const singersRef = ref(dbFirebase, `/singers/${id}`);
    onValue(singersRef, (item) => {
      const data = item.val();
      setInfo(data);
    });
    return () => {
      off(singersRef);
    };
  }, []);

  useEffect(() => {
    const songRef = ref(dbFirebase, "songs");

    const unsubscribeSongs = onValue(songRef, async (snapshot) => {
      const fetchData = async () => {
        const songs: Song[] = [];

        snapshot.forEach((item) => {
          const key = item.key;
          const songData = item.val();
          if (!songData.singerId.includes(id)) return;
          songs.push({
            id: key,
            image: songData.image,
            title: songData.title,
            singer: info?.title || "Unknown",
            link: `/songs/${key}`,
            time: "4:32", // Thời gian này do backend trả ra
            audio: songData.audio,
          });
        });

        setData(songs);
      };

      fetchData();
    });

    // Cleanup function khi component unmount
    return () => {
      off(songRef);
      unsubscribeSongs();
    };
  }, [info]);
  return (
    <>
      {/* Card Infor */}
      {info && (
        <CardInfo
          image={info.image}
          title={info.title}
          description={info.description}
        />
      )}
      {/* End Card Infor */}
      {/* Danh sách bài hát */}
      <div className="mt-[30px]">
        <Title text="Danh sách bài hát" />
        <div className="grid grid-cols-1 gap-[10px]">
          {/* Song Item Play */}
          {data &&
            data.map((item, index) => <SongItemPlay key={index} item={item} />)}
          {/* End Song Item Play */}
        </div>
      </div>
      {/* End Danh sách bài hát */}
    </>
  );
};
