import { hamburger } from "../assets/Icons";
import { HeaderLogo } from "../assets/images";
import { navLinks } from "../Constants";
const Navbar = () => {
  return (
    <header className="padding-x absolute py-8 z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={HeaderLogo} alt="Logo" width={130} height={30} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks && navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="font-montserrat leading-normal text-lg text-black">
            Sign In / Sign Up
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
