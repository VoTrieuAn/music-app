import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
  return (
    <>
      <form className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] z-[999] flex py-[15px] px-[30px] gap-x-[20px]">
        <input
          type="text"
          name="keyword"
          placeholder="Tìm kiếm..."
          className="order-2 text-[16px] font-[500] text-white bg-transparent outline-none flex-1"
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
