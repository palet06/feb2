import { Hizmetler } from "../components/Hizmetler";
import Agents from "./Agents";
import Slogan from "./Slogan";
import Clients from "./Clients";
import Contact from "./Contact";

function MyComponent() {
  return (
    <>
      <section
        id="hero-section"
        className="w-full h-[100vh] flex flex-col   bg-[#0D4A31]"
      >
        <div id="nav-div" className="p-5 lg:px-16  gap-7">
          <nav className="flex flex-row items-center justify-between">
            <ul className="flex flex-col lg:flex-row gap-6 ">
              <li>
                <a
                  href="#"
                  className="font-bold text-[13px] uppercase tracking-[3px] hover:text-accent-hover transition-all"
                >
                  <img
                    loading="lazy"
                    src="src/assets/logo.png"
                    className="max-w-full aspect-[2.22] w-[150px] lg:w-[200px]"
                  />
                </a>
              </li>
            </ul>
            <ul className="hidden md:flex md:flex-row gap-6 text-white items-center">
              <li>
                <a
                  href="#"
                  className=" text-[20px]  tracking-[3px] hover:text-[#f9dea0] transition-all"
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-[20px]  tracking-[3px] hover:text-[#f9dea0] transition-all"
                >
                  Hizmetler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-[20px]  tracking-[3px] hover:text-[#f9dea0] transition-all"
                >
                  İletişim
                </a>
              </li>
              <li className="ml-14">
                <button
                  href="#"
                  className="font-bold text-[20px]  tracking-[3px] text-black w-32 bg-[#F7C85A] h-10 rounded-md border-0 hover:text-white hover:border-2 hover:border-neutral-200 duration-300 transition-all"
                >
                  Giriş
                </button>
              </li>
            </ul>
            <div className="md:hidden">
              <a href="#">
                <img src="/src/assets/menu.svg" alt="" />
              </a>
            </div>
          </nav>
        </div>
        <div id="container-for-hero" className="lg:px-16  px-5">
          <div id="hero div" className="mt-14 flex flex-col lg:flex-row">
            <div
              id="hero-left"
              className="flex flex-col lg:w-[70%] lg:gap-14 gap-20"
            >
              <h1 className="text-[44px] md:text-[55px] lg:text-left text-center text-white font-bold  leading-normal">
                Geleceğe Güvenle <br /> Adım Atın
              </h1>
              <p className="text-white text-[30px] lg:text-left tracking-wide leading-relaxed  text-center sm:max-w-[80%] lg:mx-0  mx-auto">
                Tamamen ihtiyaçlarınıza göre kişiselleştirilmiş poliçelerimiz
                ile gereksiz yere fazla ödeme yapmak zorunda kalmayacaksınız.
              </p>

              <div
                id="hero-buttons"
                className="flex flex-row items-center justify-center lg:justify-start
                 gap-5"
              >
                <a
                  className="flex flex-col  items-center justify-center text-xl font-bold text-[#2B2B31] tracking-wide w-44 h-12 bg-[#F8C140] rounded-sm hover:text-white/60 duration-300 transition-colors"
                  href="#insurances-list-section"
                >
                  Hizmetlerimiz
                </a>
                <a
                  className="flex flex-col items-center justify-center text-xl font-bold text-white tracking-wide border hover:border-[#F8C140] duration-300 transition-colors w-44 h-12 bg-transparent rounded-sm"
                  href="#"
                >
                  Teklif Al
                </a>
              </div>
              <div
                id="hero-corporates"
                className="flex flex-row lg:mt-20 gap-5 items-center justify-center lg:justify-start "
              >
                <div
                  id="img1"
                  className="w-[120] h-[50] rounded-sm bg-white flex items-center justify-center"
                >
                  <img
                    src="src/assets/raysigorta.png"
                    alt=""
                    className="aspect-[2.38] w-[102px]"
                  />
                </div>
                <div
                  id="img2"
                  className="w-[120] h-[50] rounded-sm bg-white flex items-center justify-center"
                >
                  <img
                    src="src/assets/vig.png"
                    alt=""
                    className="aspect-[2.38] w-[102px]"
                  />
                </div>
                <div
                  id="img3"
                  className="w-[120] h-[50] rounded-sm bg-white flex items-center justify-center"
                >
                  <img
                    src="src/assets/tsb.png"
                    alt=""
                    className="aspect-[2.38] w-[102px]"
                  />
                </div>
              </div>
            </div>
            <div
              id="hero-right"
              className="hidden lg:flex lg:w-[30%] z-[5] items-center justify-center"
            >
              <img src="src/assets/landingfeb.svg" className=" z-[2]" />
            </div>
          </div>
        </div>
      </section>
      <Hizmetler />
      <Agents />
      <Slogan />
      <Clients />
      <Contact />
    </>
  );
}

export default MyComponent;
