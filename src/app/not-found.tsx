// Tên file bắt buộc phải như thế này: not-found.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Mô tả chung...",
};

export default function NotFoundPage() {
  return (
    <>
      <h1 className="text-[32px] font-[700] text-white text-center">
        404 Not Found
      </h1>
      <div className="text-center mt-[20px]">
        <Link href="/" className="font-[700] rounded-[8px] bg-white p-[10px]">
          Trở về trang chủ
        </Link>
      </div>
    </>
  );
}
