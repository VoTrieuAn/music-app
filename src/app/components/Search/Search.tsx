"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const keyword = event.target.keyword.value;
    const form = event.currentTarget;
    const keyword = (form.elements.namedItem("keyword") as HTMLInputElement)
      .value;
    router.push(`/search?keyword=${keyword}`); // Chuyển sang trong và cập nhật lại trên url
  };

  const defaultKeyword = searchParams.get("keyword") || "";

  return (
    <>
      <form
        className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] z-[999] flex py-[15px] px-[30px] gap-x-[20px]"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="keyword"
          placeholder="Tìm kiếm..."
          className="order-2 text-[16px] font-[500] text-white bg-transparent outline-none flex-1"
          defaultValue={defaultKeyword}
        />
        <button
          type="submit"
          className="order-1 
          text-[22px] text-white"
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </>
  );
};
