import Image from "next/image" 
import 'tailwindcss/tailwind.css';
const SharedHeader = () => {
  return (
    <header>
        <div className="bg-themered relative flex flex-col items-center justify-center p-3 text-white md:flex-row">
        <span className="static bottom-0 right-3 top-0 flex items-center text-sm md:absolute">
                <a className="mr-2 hidden sm:block" href="#">Enable Accessibility</a>
                <Image src="http://localhost:3001/accessibility.svg" alt="accessibility" width={26} height={26} />
            </span>
            <h6 className="mt-3 text-center text-sm md:mt-0">WOW DAYS are back! Save up to 40% off* the best tech, home, toys & more!<a className="ms-2 font-bold" href="#">Shop Now</a></h6>
        </div>
        <div className="mx-auto w-[90%] max-w-[1440px]">
            <div className="align-center flex flex-wrap items-center justify-start py-6">
                <div className="order-1 mb-3 flex flex-1 justify-center md:mb-0 md:flex-initial md:justify-start"><a className="logo" href="/" aria-label="bjs Logo">
                    <Image className="min-w-[58px]" src="http://localhost:3001/logo.svg" alt="bjs-logo" width={58} height={49} />
                </a></div>
                <nav className="flex-auto1 order-2 mx-8 hidden sm:block" aria-label="Main Navigation">
                    <ul className="flex">
                        <li className="mr-3 font-bold"><a href="#home" aria-current="page">Categories</a></li>
                        <li className="font-bold"><a href="#home" aria-current="page">Deals &amp; Coupons</a></li>
                    </ul>
                </nav>
                <div className="relative order-4 mt-3 flex flex-auto md:order-3 md:mt-0">
                    <input className="flex-auto rounded-full border border-solid border-[#999] px-4 py-2" type="text" name="search" />
                    <button className="border-l-solid absolute bottom-0 right-4 top-0 cursor-pointer border-l border-[#999] ps-2">
                      <i className="material-icons cursor-pointer">search</i>
                    </button>
                </div>
                <div className="order-3 m-0 flex w-full flex-auto flex-grow basis-full cursor-pointer justify-center gap-4 md:order-4 md:ms-auto md:w-auto md:basis-auto md:justify-end">
                    <a>Buy it again</a>
                    <div className="flex gap-4">
                        <a className="flex">
                          <Image className="mr-2" src="http://localhost:3001/signin.svg" alt="signin" width={24} height={24} />
                          Sign In
                        </a>
                        <a>Join  today</a>
                    </div>
                    <a>
                      <Image src="http://localhost:3001/cart.svg" alt="signin" width={21} height={21} />
                    </a>
                </div>
            </div>
        </div>
    </header> 
  )
}

export default SharedHeader