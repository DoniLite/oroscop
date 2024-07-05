import Link from 'next/link';
import logo from '/logo.jpg'
import { GitHub } from '@mui/icons-material';
import { useEffect } from "react";
import Image from "next/image";

  
export function NavBar() {
    function navAnime() {
        const nav = document.querySelector('nav') as HTMLElement
        const btn = document.querySelector('.nav button') as HTMLButtonElement

        console.log(btn)
        console.log(window.scrollY)
        if (window.scrollY > 25) {
            nav.style.position = 'fixed'
            nav.classList.add('bg-blue-800', 'left-0', 'top-0', 'right-0', 'p-6')
            btn.classList.add('text-blue-800')
        } else {
            nav.style.position = 'relative'
            nav.classList.add('left-0', 'top-0', 'right-0', 'p-6')
        }
    }
    useEffect(() => {


        window.addEventListener('scroll', navAnime)
    }, [])
    return (
      <>
        <nav
          className="relative bg-blue-800 left-0 right-0 top-0 p-6 transition-all"
          style={{ zIndex: "9999" }}
        >
          <div className="nav text-white">
            <Image src={logo} alt="Logo nibatic" className="logo" />
            <div className="flex">
              <ul className="flex mt-3 mr-6">
                <li className="link">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="link">
                  <Link href={"/contrats"}>Pricing</Link>
                </li>
                <li className="link">
                  <Link href={"/forum"} >
                    Forum
                  </Link>
                </li>
                <li className="link">
                  <a href="#">
                    <GitHub />
                  </a>
                </li>
              </ul>
              <button
                className="home-btn"
                style={{ borderRadius: "0 20px 0 15px" }}
              >
                Débuter cursus
              </button>
            </div>
          </div>
        </nav>
      </>
    );
}