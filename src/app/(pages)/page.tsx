import { Metadata } from "next";
import { Title } from "../components/Title/Title";
import { SongItem } from "../components/Song/SongItem";
import { CardItem } from "../components/Card/CardItem";
import { dbFirebase } from "../firebase.config";
import { onValue, ref } from "firebase/database";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function Home() {
  const dataSectionOne = getSectionOne();

  const dataSectionTwo: any[] = getSectionTwo();

  const dataSectionThree: any[] = getSectionThree();

  return (
    <>
      {/* Section one: Banner home + Nghe nhiều */}
      <div className="flex items-start gap-x-[20px]">
        <div className="w-[534px]">
          <div
            className="w-full flex items-center rounded-[15px] bg-cover"
            style={{ backgroundImage: "url('/demo/bg-1.jpg')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-white mb-[6px]">
                Nhạc EDM
              </div>
              <p className="font-[500] text-[14px] text-white leading-[17px]">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </p>
            </div>
            <div className="w-[215px] mr-[22px] mt-[48px]">
              <img
                src="/demo/image-2.png"
                alt="Nhạc EDM"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Title text="Nghe Nhiều" />
          {/* List item */}
          <div className="flex flex-col gap-y-[12px]">
            {/* Item */}
            {dataSectionOne.map((item, index) => (
              <SongItem key={index} item={item} />
            ))}
            {/* End Item */}
          </div>
          {/* End List item */}
        </div>
      </div>
      {/* End Section one: Banner home + Nghe nhiều */}
      {/* Section two: Danh mục nổi bật */}
      <div className="mt-[30px]">
        <Title text="Danh mục nổi bật" />
        <div className="grid grid-cols-5 gap-[20px]">
          {/* Card Item */}
          {dataSectionTwo.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
          {/* End Card Item */}
        </div>
      </div>
      {/* End Section two: Danh mục nổi bật */}
      {/* Section three: Ca sĩ nổi bật */}
      <div className="mt-[30px]">
        <Title text="Ca sĩ nổi bật" />
        <div className="grid grid-cols-5 gap-[20px]">
          {/* Card Item */}
          {dataSectionThree.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
          {/* End Card Item */}
        </div>
      </div>
      {/* End Section three: Ca sĩ nổi bật */}
    </>
  );
}

const getSectionOne = () => {
  const dataSectionOne: any[] = [];

  const songRef = ref(dbFirebase, "songs");
  onValue(songRef, (items) => {
    // Snapshot là 1 đối tượng có key và value
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if (dataSectionOne.length < 3) {
        onValue(ref(dbFirebase, "/singers/" + data.singerId[0]), (item) => {
          const dataSinger = item.val();

          dataSectionOne.push({
            id: key,
            image: data.image,
            title: data.title,
            singer: dataSinger.title,
            listen: data.listen,
            link: `/songs/${key}`,
          });
        });
      }
    });
  });
  return dataSectionOne;
};

const getSectionTwo = () => {
  const dataSectionTwo: any[] = [];
  const categoriesRef = ref(dbFirebase, "categories");
  onValue(categoriesRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (dataSectionTwo.length < 5) {
        dataSectionTwo.push({
          id: key,
          image: data.image,
          title: data.title,
          description: data.description,
          link: `/categories/${key}`,
        });
      }
    });
  });
  return dataSectionTwo;
};

const getSectionThree = () => {
  const dataSectionThree: any[] = [];
  const singersRef = ref(dbFirebase, "singers");
  onValue(singersRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (dataSectionThree.length < 5) {
        dataSectionThree.push({
          id: key,
          image: data.image,
          title: data.title,
          description: data.description,
          link: `/singers/${key}`,
        });
      }
    });
  });
  return dataSectionThree;
};
