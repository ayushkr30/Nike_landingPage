import { hamburger } from "../assets/images";
import { headerLogo } from "../assets/icons";
import {navLinks} from "../constants"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="felx justify-between items-center max-container">
            <a href="/">
                <img 
                 src = {headerLogo}
                 alt="Logo"
                 width={130}
                 height={29}
                 className="m-0 w-[129px] h-[29px]"
                 />
            </a>
            <ul className="flex-1 flex justify centre items-center gap-16 max-lg:hidden">
                {navLinks.maps((items)=>
                (
                    <li key={items.label}>
                        <a
                          href={items.href}
                          className="font-monteserrat leading-normal text-lg text-slate-gray">
                            {items.label}
                            </a> 
                    </li>
                ))}
            </ul>
            <div className="flex gap-2 text-lg leading normal font-medium font-montserrat max-lg:hidden wide:mr-24">
                <a href='/'>Sign in</a>
                <span>/</span>
                <a href='/'>Explore now</a>
            </div>
            <div className="hidden max-lg:block">
                <img src={hamburger} alt='hamburger icon' width={25} height={25}/>
            </div>
        </nav>
    </header>
  );
};

export default Nav;