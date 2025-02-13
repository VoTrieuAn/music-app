import Link from "next/link";

export const SiderLogo = () => {
  return (
    <>
      <div className="bg-[#1C1C1C] py-[25px] px-[20px]">
        <Link href="/">
          <div className="flex items-center gap-[12px]">
            <div className="w-[42px] h-[42px]">
              <img src="/logo.png" alt="logo" className="h-[42px] w-full" />
            </div>
            <div className="text-[24px] font-[700] text-primary">
              AnTien Music
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
