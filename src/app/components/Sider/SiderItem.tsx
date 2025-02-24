import Link from "next/link";
import { usePathname } from "next/navigation";

export const SiderItem = (props: any) => {
  const { item, isLogin } = props;

  const pathname = usePathname();

  return (
    <>
      {(item.isLogin === undefined || item.isLogin === isLogin) && (
        <li className=" mb-[30px]">
          <Link
            href={item.link}
            className={
              "flex gap-x-[20px] items-center hover:text-primary " +
              (pathname === item.link ? "text-primary" : "text-white")
            }
          >
            <span className="text-[22px]">{item.icon}</span>
            <span className="text-[16px] font-[700] ">{item.title}</span>
          </Link>
        </li>
      )}
    </>
  );
};
