import { useState} from 'react';
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {

    let links = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Stacks", link: "/stacks"},
        {name: "Project", link: "/project"},
        {name: "Contact", link: "/contact"},
    ];

     let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className="md:flex items-center justify-between bg-[#17044D] py-4 text-white lg:px-[200px] sticky w-full  z-20  px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-white">
                <span className="text-2xl text-slate-200 mr-1 pt-2">OluTayo-Dev</span>
            </div>
        

         <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl absolute right-8 top-6 cursor-ponter md:hidden"
            >
                <AiOutlineMenu name={isOpen ? "close" : "menu"} />
            </div>

               <ul
                   className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-0 z-[-1] left-0 w-full md:w-auto md:pl-9 transition-all duration-500 ease-in ${isOpen ? "top20 opacity-100" : "top-[-490px]"} md:opacity-100 bg-[#17044D] text-center`}>

                    {links.map((link) => (
                    <li
                       key={link.name}
                       className="md:ml-8 text-xl md:my-0 my-7  [16px] font-medium leading-6 sticky">
                        <a href={link.name} className="text-white sticky hover:text-slate-500">
                            {link.name}
                        </a>
                       </li>
                    ))}
        
              </ul>
              
        </div>
    </div>
  )
}
