import Link from "next/link";

export const SiderMenu = (props: any) => {
  const menu = [
    {
      icon: <>Icon</>,
      title: "Trang chủ",
      link: "/",
    },
    {
      icon: <>Icon</>,
      title: "Danh mục bài hát",
      link: "/categories",
    },
    {
      icon: <>Icon</>,
      title: "Ca sĩ",
      link: "/singers",
    },
    {
      icon: <>Icon</>,
      title: "Bài hát yêu thích",
      link: "/wishlist",
    },
    {
      icon: <>Icon</>,
      title: "Đăng xuất",
      link: "/login",
    },
    {
      icon: <>Icon</>,
      title: "Đăng nhập",
      link: "/login",
    },
    {
      icon: <>Icon</>,
      title: "Đăng ký",
      link: "/register",
    },
  ];
  return (
    <>
      <nav className="py-[30px] px-[20px]">
        <ul>
          {menu.map((item: any, index: any) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-white text-[16px] font-[700] flex gap-x-[20px]"
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
