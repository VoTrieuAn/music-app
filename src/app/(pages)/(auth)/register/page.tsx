import { FormRegister } from "@/app/components/MusicApp/Register/FormRegister";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function RegisterPage() {
  return (
    <>
      <div className="flex flex-col items-center mt-[60px]">
        <Title text="Đăng ký tài khoản" />
        <FormRegister />
      </div>
    </>
  );
}
