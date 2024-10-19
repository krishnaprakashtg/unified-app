import Image from "next/image";
import 'tailwindcss/tailwind.css';

const SharedFooter = () => {
  return (
    <footer className="bg-[#f1f1f1] pb-8">
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <div className="mb-8 grid grid-cols-1 items-center border-b-2 border-solid border-[#ccc] py-8 transition-all md:grid-cols-4">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Image
              src="http://localhost:3003/email.png"
              alt="email"
              className="h-[13px] w-[19px]"
              width={19}
              height={13}
            />
            <label className="text-themered font-semibold">Sign up for Email offers</label>
          </div>
          <div className="my-5 flex justify-center rounded-md border border-solid border-[#cccccc] bg-white p-1 md:my-0">
            <input className="flex-auto px-2 focus:outline-none" type="text" name="search" />
            <button className="w-[100px] rounded-md bg-[#646464] py-2 text-white">Signup</button>
          </div>
          <div className="mb-5 flex justify-center gap-4 md:mb-0">
            <Image
              src="https://bjs.scene7.com/is/image/bjs/Footer_Apple_Store?fmt=png-alpha"
              alt="Google Play" 
              width={88}
              height={27}
            />
            <Image
              src="https://bjs.scene7.com/is/image/bjs/Footer_google-play"
              alt="App Store" 
              width={88}
              height={27}
            />
          </div>
          <div className="flex justify-center gap-4 md:justify-end">
            <Image
              src="https://bjs.scene7.com/is/image/bjs/Footer_if_facebook?fmt=png-alpha"
              alt="facebook"
              className="h-[34px] w-[34px]"
              width={34}
              height={34}
            />
            <Image
              src="https://bjs.scene7.com/is/image/bjs/Footer_if_twitter?fmt=png-alpha"
              alt="facebook"
              className="h-[34px] w-[34px]"
              width={34}
              height={34}
            />
            <Image
              src="https://bjs.scene7.com/is/image/bjs/Footer_if_pinterest?fmt=png-alpha"
              alt="facebook"
              className="h-[34px] w-[34px]"
              width={34}
              height={34}
            />
            <Image
              src="https://bjs.scene7.com/is/image/bjs/Footer_if_instagram?fmt=png-alpha"
              alt="facebook"
              className="h-[34px] w-[34px]"
              width={34}
              height={34}
            />
          </div>
        </div>
        <nav className="grid grid-cols-1 text-[#666] transition-all md:grid-cols-4">
          <ul>
            <li className="leading-7">
              <h4 className="mb-2 text-xl font-bold">Membership</h4>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Membership Options/Join</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Corporate Membership Program</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Coupons</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">My Account</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">BJ's Services</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Membership Terms</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">BJ's One™</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Same Day Select Terms</a>
            </li>
          </ul>
          <ul className="mt-4 md:mt-0">
            <li className="leading-7">
              <h4 className="mb-2 text-xl font-bold">Customer Care</h4>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Membership Options/Join</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Corporate Membership Program</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Coupons</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">My Account</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">BJ's Services</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Membership Terms</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">BJ's One™</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Same Day Select Terms</a>
            </li>
          </ul>
          <ul className="mt-4 md:mt-0">
            <li className="leading-7">
              <h4 className="mb-2 text-xl font-bold">Quick Links</h4>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Membership Options/Join</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Corporate Membership Program</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Coupons</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">My Account</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">BJ's Services</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Membership Terms</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">BJ's One™</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Same Day Select Terms</a>
            </li>
          </ul>
          <ul className="mt-4 md:mt-0">
            <li className="leading-7">
              <h4 className="mb-2 text-xl font-bold">Corporate</h4>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Membership Options/Join</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Corporate Membership Program</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Coupons</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">My Account</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">BJ's Services</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Membership Terms</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">BJ's One™</a>
            </li>
            <li className="leading-7">
              <a className="cursor-pointer">Same Day Select Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default SharedFooter;
