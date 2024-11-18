import Link from "next/link";

const Header = () => {
  const navItems = [
    {
      label: 'Details',
      navigator: '/'
    },
    {
      label: 'Portfolio',
      navigator: '/portfolio'
    }
  ]

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full mt-[20px] mb-[50px]">
      <ul className="flex gap-[20px] w-fit m-auto">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.navigator}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
