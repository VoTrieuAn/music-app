import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="text-[38px] font-[700]">Trang đăng nhập</h1>
    </>
  );
}