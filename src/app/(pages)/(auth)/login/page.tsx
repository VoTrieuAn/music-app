import { FormLogin } from "@/app/components/MusicApp/Login/FormLogin";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function LoginPage() {
  return (
    <>
      {/* Đăng nhập tài khoản */}
      <div className="flex flex-col items-center mt-[60px]">
        <Title text="Đăng nhập tài khoản" />
        <FormLogin />
      </div>
      {/* End Đăng nhập tài khoản */}
    </>
  );
}
