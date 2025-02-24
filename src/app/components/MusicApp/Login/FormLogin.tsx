"use client";

import { authFirebase } from "@/app/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export const FormLogin = () => {
  const router = useRouter();
  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email && password) {
      signInWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <form action="" className="w-[500px]" onSubmit={handleLogin}>
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
            Đăng Nhập
          </button>
        </div>
      </form>
    </>
  );
};
