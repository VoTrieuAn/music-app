import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Trang phát nhạc trực tuyến hàng triệu người Việt Nam tin dùng",
};

export default function RegisterPage() {
  return (
    <>
      {/* Đăng ký tài khoản */}
      <div className="flex flex-col items-center mt-[60px]">
        <Title text="Đăng ký tài khoản" />
        <form action="" className="w-[500px]">
          <div className="mb-[5px]">
            <label
              htmlFor="fullname"
              className="font-[600] text-[14px] text-white flex items-center gap-[8px]"
            >
              <span>Họ Tên</span>
              <span className="text-[#F21D2F]">*</span>
            </label>
          </div>
          <div className="h-[50px] rounded-[6px] truncate mb-[15px]">
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Ví dụ: Lê Văn A"
              className="w-full h-full p-[16px] outline-none font-[600] text-[14px]"
              required={true}
            />
          </div>
          <div className="mb-[5px]">
            <label
              htmlFor="email"
              className="font-[600] text-[14px] text-white flex items-center gap-[8px]"
            >
              <span>Email</span>
              <span className="text-[#F21D2F]">*</span>
            </label>
          </div>
          <div className="h-[50px] rounded-[6px] truncate mb-[15px]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ví dụ: abc@gmail.com"
              className="w-full h-full p-[16px] outline-none font-[600] text-[14px]"
              required={true}
            />
          </div>
          <div className="mb-[5px]">
            <label
              htmlFor="password"
              className="font-[600] text-[14px] text-white flex items-center gap-[8px]"
            >
              <span>Mật Khẩu</span>
              <span className="text-[#F21D2F]">*</span>
            </label>
          </div>
          <div className="h-[50px] rounded-[6px] truncate mb-[15px]">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full h-full p-[16px] outline-none font-[600] text-[14px]"
              required={true}
            />
          </div>
          <div className="h-[50px] bg-primary rounded-[6px]">
            <button className="w-full h-full py-[14px] font-[700] text-[16px] text-white">
              Đăng Ký
            </button>
          </div>
        </form>
      </div>
      {/* End Đăng ký tài khoản */}
    </>
  );
}
