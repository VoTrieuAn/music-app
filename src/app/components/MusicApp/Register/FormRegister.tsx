"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { authFirebase, dbFirebase } from "@/app/firebase.config";
import { useRouter } from "next/navigation";
import { ref, set } from "firebase/database";

export const FormRegister = () => {
  const router = useRouter();
  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement)
      ?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;

    if (fullName && email && password) {
      createUserWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            const data = { fullName };
            const userRef = ref(dbFirebase, `users/${user.uid}`);
            set(userRef, data).then(() => {
              router.push("/");
            });
          }
        })
        .catch((error) => {
          console.error("Error registering user:", error);
        });
    }
  };

  return (
    <>
      {/* Đăng ký tài khoản */}
      <form action="" className="w-[500px]" onSubmit={handleRegister}>
        <div className="mb-[5px]">
          <label
            htmlFor="fullName"
            className="font-[600] text-[14px] text-white flex items-center gap-[8px]"
          >
            <span>Họ Tên</span>
            <span className="text-[#F21D2F]">*</span>
          </label>
        </div>
        <div className="h-[50px] rounded-[6px] truncate mb-[15px]">
          <input
            type="text"
            id="fullName"
            name="fullName"
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
      {/* End Đăng ký tài khoản */}
    </>
  );
};
