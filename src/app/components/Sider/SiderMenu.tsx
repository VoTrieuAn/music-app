import Link from "next/link";
import { FaHouse, FaRightFromBracket, FaUserPlus } from "react-icons/fa6";
import { FaMusic, FaHeart, FaPodcast, FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
export const SiderMenu = () => {
  const menu = [
    {
      icon: (
        <>
          <FaHouse />
        </>
      ),
      title: "Trang chủ",
      link: "/",
    },
    {
      icon: (
        <>
          <FaMusic />
        </>
      ),
      title: "Danh mục bài hát",
      link: "/categories",
    },
    {
      icon: (
        <>
          <FaPodcast />
        </>
      ),
      title: "Ca sĩ",
      link: "/singers",
    },
    {
      icon: (
        <>
          <FaHeart />
        </>
      ),
      title: "Bài hát yêu thích",
      link: "/wishlist",
    },
    {
      icon: (
        <>
          <FaRightFromBracket />
        </>
      ),
      title: "Đăng xuất",
      link: "",
    },
    {
      icon: (
        <>
          <FaUser />
        </>
      ),
      title: "Đăng nhập",
      link: "/login",
    },
    {
      icon: (
        <>
          <FaUserPlus />
        </>
      ),
      title: "Đăng ký",
      link: "/register",
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <nav className="py-[30px] px-[20px]">
        <ul>
          {menu.map((item: any, index: any) => (
            <li key={index} className=" mb-[30px]">
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
          ))}
        </ul>
      </nav>
    </>
  );
};
