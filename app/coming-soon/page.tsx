import Logo from "@/components/functional/logo";
import { Button } from "@/components/ui/button";
import left from "@/public/coming-soon/_ui-arrow-narrow-left.svg";
import right from "@/public/coming-soon/_ui-arrow-right.svg";
import testimonial from "@/public/coming-soon/Container.png";
import Priority from "@/public/coming-soon/Icon Container (1).png";
import updated from "@/public/coming-soon/Icon Container (2).png";
import Offers from "@/public/coming-soon/Icon Container (3).png";
import Access from "@/public/coming-soon/Icon Container.png";
import play from "@/public/coming-soon/Icon.svg";
import vectorLeft from "@/public/coming-soon/Vector-left.svg";

import vectorRight from "@/public/coming-soon/Vector-right.svg";
import facebook from "@/public/icons/facebook.svg";
import github from "@/public/icons/github.svg";
import instagram from "@/public/icons/instagram.svg";
import logo from "@/public/icons/logo.svg";
import twitter from "@/public/icons/twitter.svg";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const socialLinkButtonClass: string =
    "w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-white border-[1px] rounded-full border-[#d0d0d0] inline-flex justify-center items-center";
  const sharedClass: string = "flex flex-col items-center";
  const countDownBlockClass: string =
    "flex flex-wrap md:flex-nowrap justify-center items-center space-x-[4px] lg:space-x-[8px] md:gap-[12px]";
  const countDownNumberClass: string =
    "text-[25px] md:text-[40px] lg:text-[56px] leading-[120%] md:leading-[71px] font-[500] text-center text-white capitalize";
  const countDownTextClass: string =
    "text-[18px] md:text-[28px] lg:text-[36px] leading-[120%] md:leading-[46px] text-[#dedede] text-center font-[500] capitalize";
  const countDownColonClass: string =
    "text-[25px] md:text-[40px] lg:text-[56px] leading-[120%] md:leading-[71px] font-[500] text-center text-[#dedede]";

  return (
    <>
      <header className="h-20 flex items-center justify-between px-[10px] w-full">
        <Logo />
        <div className="space-x-2 sm:space-x-6 md:space-x-8 hidden md:block">
          <button className={socialLinkButtonClass}>
            <Image
              src={twitter}
              alt="our twitter page"
              height={24}
              className="h-[16px] sm:h-[24px]"
            />
          </button>
          <button className={socialLinkButtonClass}>
            <Image
              src={facebook}
              alt="our facebook page"
              height={24}
              className="h-[16px] sm:h-[24px]"
            />
          </button>
          <button className={socialLinkButtonClass}>
            <Image
              src={instagram}
              alt="our instagram page"
              height={24}
              className="h-[16px] sm:h-[24px]"
            />
          </button>
        </div>

        <Menu className="md:hidden block" />
      </header>

      <section
        className={`${sharedClass} gap-16 w-full md:mb-[61px] md:mt-[80px]`}
      >
        <div
          className={`${sharedClass} gap-3 md:w-8/10 w-full max-w-2xl relative`}
        >
          <h2 className="text-center p-5 backdrop-blur-[200px] text-[1b1b1b] rounded-[500px] text-[40px] sm:text-5xl md:text-6xl leading-[100%] font-[700]">
            Tired of Wasting Hours on{" "}
            <span className="text-[#009A49]">Inventory</span> ?
          </h2>
          <div className="hidden md:grid grid-cols-2 absolute top-3">
            <Image
              src={vectorLeft}
              alt="vector"
              priority
              className="aria-hidden"
            />
            <Image
              src={vectorRight}
              alt="vector"
              priority
              className="aria-hidden"
            />
          </div>
          <p className="text-center font-[300] px-3 text-[16px] sm:text-[32px] leading-normal text-[#717171] md:w-3xl">
            Join Early Access & Automate Your Inventory With Ease—Free for 6
            Months!{" "}
            <span className="text-[#009A49] md:inline-block hidden underline cursor-pointer">
              Sign Up Now!
            </span>
          </p>
          <Button className="md:hidden block "> Sign Up Now</Button>
        </div>
      </section>

      <section className="flex justify-center pt-[24px] items-center mb-[62px] mt-8 md:mt-0">
        <div
          className="w-[min(80%,800px)] xl:w-[1003px] xl:h-[613px] rounded-[24px] outline-[10px] sm:outline-[15px]  lg:outline-[20px] outline-[#00000080] relative bg-cover aspect-[1003/613] xl:aspect-auto flex flex-col items-center justify-between pt-5"
          style={{
            backgroundImage:
              "linear-gradient(#000000B2, #000000B2), url('/coming-soon/coming-soon.jpeg')",
          }}
        >
          <div className="flex gap-2 items-start">
            <Image src={logo} alt="shop desk logo" priority width={20} />
            <p className="text-[17px] text-white font-[500]">ShopDesk</p>
          </div>
          <div className="rounded-[12px] p-3 flex items-center bg-[#00000066] h-[53.5px] w-[53.5px] my-auto">
            <Image src={play} alt="play button" width={30} priority />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-[#19A45B] h-[185px] mb-[96px] hidden">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-2 px-2 md:gap-6 md:px-6 lg:gap-8 lg:px-8 items-center">
          <div className={countDownBlockClass}>
            <p className={countDownNumberClass}>24</p>
            <p className={countDownTextClass}>days</p>
          </div>
          <p className={countDownColonClass}>:</p>
          <div className={countDownBlockClass}>
            <p className={countDownNumberClass}>24</p>
            <p className={countDownTextClass}>hours</p>
          </div>
          <p className={countDownColonClass}>:</p>
          <div className={countDownBlockClass}>
            <p className={countDownNumberClass}>24</p>
            <p className={countDownTextClass}>minutes</p>
          </div>
          <p className={countDownColonClass}>:</p>
          <div className={countDownBlockClass}>
            <p className={countDownNumberClass}>24</p>
            <p className={countDownTextClass}>seconds</p>
          </div>
        </div>
      </section>

      {/* <Features text="FEATURES ROLLING IN" /> */}

      <section className="bg-[#E5F5ED] flex flex-col items-center gap-16 md:py-[100px] py-12  w-full mt-8 md:mt-0">
        <div className="w-full flex justify-center items-center ">
          <p className="text-[#009A49] text-center md:text-[32px] text-base leading-[24px] font-[500]  bg-[#009A49]/10 md:py-6 py-3 px-6 md:px-[70px]  rounded-[64px] md:w-[500px]">
            Sign Up for Early Access
          </p>
        </div>
        <div className={`${sharedClass} gap-2.5 md:w-[500px] w-[338px]`}>
          <form
            action=""
            className="w-full  flex flex-col items-center gap-6  "
          >
            <input
              type="email"
              id="email"
              placeholder="Full Name"
              className="w-full  h-[62px] p-4 border-[1px] bg-white border-[#dedede] rounded-[9px] placeholder:text-[#b8b8b8] placeholder:text-[20px] placeholder:leading-[30px] placeholder:font-[450] font-[450] text-[20px] text-leading-[30px]"
            />
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full  h-[62px] p-4 border-[1px] bg-white border-[#dedede] rounded-[9px] placeholder:text-[#b8b8b8] placeholder:text-[20px] placeholder:leading-[30px] placeholder:font-[450] font-[450] text-[20px] text-leading-[30px]"
            />
            <input
              type="email"
              id="email"
              placeholder="Business Type"
              className="w-full  h-[62px] p-4 border-[1px] bg-white border-[#dedede] rounded-[9px] placeholder:text-[#b8b8b8] placeholder:text-[20px] placeholder:leading-[30px] placeholder:font-[450] font-[450] text-[20px] text-leading-[30px]"
            />
            <input
              type="email"
              id="email"
              placeholder="Business Name (Optional)"
              className="w-full  h-[62px] p-4 border-[1px] bg-white border-[#dedede] rounded-[9px] placeholder:text-[#b8b8b8] placeholder:text-[20px] placeholder:leading-[30px] placeholder:font-[450] font-[450] text-[20px] text-leading-[30px]"
            />
            <div className="rounded-[9px] bg-[#1b1b1b] py-[12px] px-6 text-white text-[16px] leading-[24px] font-[500] h-[60px] w-full  flex items-center justify-center gap-[6px] cursor-pointer">
              <button className="">Sign up</button>
              <ArrowRight />
            </div>
          </form>
          <p className="text-[#A0A0A0] text-[14px] leading-[100%] text-center font-[500] hidden">
            We respect your privacy. No spam.
          </p>
        </div>
      </section>

      <section className=" flex flex-col items-center md:gap-16 gap-8 md:py-16 py-8 ">
        <div className="w-full flex justify-center items-center ">
          <p className="text-[#009A49] text-center md:text-[32px] text-base leading-[24px] font-[500]  bg-[#009A49]/5 md:py-6 py-3 px-6 md:px-[70px] rounded-[64px]">
            Why Join the Waiting List?
          </p>
        </div>
        <div className="flex items-center justify-center w-full flex-wrap md:gap-y-[64px] gap-12 text-center max-w-6xl mx-auto">
          <div className="flex justify-between items-center flex-col md:flex-row gap-12 w-9/12">
            <div className="flex flex-col items-center justify-center gap-5 ">
              <Image
                src={Access}
                width={48}
                height={48}
                alt="early access image"
              />
              <div className="flex flex-col gap-2  items-center justify-center">
                <p className=" font-medium text-2xl text-[#2a2a2a] ">
                  Exclusive Early Access
                </p>
                <p className="text-base text-[#717171] ">
                   Try Shopdesk before anyone else.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 ">
              <Image
                src={Priority}
                width={48}
                height={48}
                alt="early access image"
              />
              <div className="flex flex-col gap-2  items-center justify-center">
                <p className=" font-medium text-2xl text-[#2a2a2a] ">
                  Exclusive Early Access
                </p>
                <p className="text-base text-[#717171] ">
                   Try Shopdesk before anyone else.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-col md:flex-row gap-12 w-9/12 ">
            <div className="flex flex-col items-center justify-center gap-5 ">
              <Image
                src={updated}
                width={48}
                height={48}
                alt="early access image"
              />
              <div className="flex flex-col gap-2  items-center justify-center">
                <p className=" font-medium text-2xl text-[#2a2a2a] ">
                  Exclusive Early Access
                </p>
                <p className="text-base text-[#717171] ">
                   Try Shopdesk before anyone else.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 ">
              <Image
                src={Offers}
                width={48}
                height={48}
                alt="early access image"
              />
              <div className="flex flex-col gap-2  items-center justify-center">
                <p className=" font-medium text-2xl text-[#2a2a2a] ">
                  Exclusive Early Access
                </p>
                <p className="text-base text-[#717171] ">
                   Try Shopdesk before anyone else.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-8">
          <p className="md:text-2xl text-base font-medium text-center text-[#5f5f5f]">
            Spots Are Limited <br />
            <span className="text-[#009A49]"> Join the Waiting List Now!</span>
          </p>
        </div>
      </section>

      <section className="bg-[#E5F5ED] flex flex-col items-center gap-[40px] py-8 mt-8 hidden">
        <div className="w-[min(90%,1212px)] flex justify-between items-center ">
          <button className="size-[48px] p-[15px] rounded-[12px] border-[1px] border-[#C7D3E1] bg-white flex justify-center items-center">
            <Image src={left} alt="left button" height={18} width={18} />
          </button>
          <p className="text-[#009A49] text-center text-[16px] leading-[24px] font-[500]">
            Reviews from Beta Testers
          </p>

          <button className="size-[48px] p-[15px] rounded-[12px] bg-[#001A00] flex justify-center items-center">
            <Image src={right} alt="left button" height={18} width={18} />
          </button>
        </div>
        <p className="text-2xl sm:text-[32px] text-center font-[450] sm:leading-[42px] text-black max-w-[50ch] px-3">
          Shop Desk transformed how we manage our stock – it's a game changer.
          Finally, a retail management solution that is intuitive and scalable.
          I can’t wait for the full launch!
        </p>
        <p className="text-2xl sm:text-[32px] text-center font-[450] sm:leading-[42px] text-black max-w-[50ch] px-3">
          — Lisa M, Small Business Owner
        </p>
        <Image
          src={testimonial}
          alt="testimonial polariod"
          height={80}
          width={80}
        />
      </section>

      <footer className="py-[41px] px-[72px] flex flex-col gap-12 justify-center items-center content-center bg-white border-t border-t-[#e2e8f0]">
        <div className="space-x-2 sm:space-x-6 md:space-x-16 md:hidden flex ">
          <button className={socialLinkButtonClass}>
            <Image
              src={twitter}
              alt="our twitter page"
              height={24}
              className="h-[16px] sm:h-[24px]"
            />
          </button>
          <button className={socialLinkButtonClass}>
            <Image
              src={facebook}
              alt="our facebook page"
              height={24}
              className="h-[16px] sm:h-[24px]"
            />
          </button>
          <button className={socialLinkButtonClass}>
            <Image
              src={instagram}
              alt="our instagram page"
              height={24}
              className="h-[16px] sm:h-[24px]"
            />
          </button>
          <button className={socialLinkButtonClass}>
            <Image
              src={github}
              alt="our github page"
              height={24}
              className="h-[16px] sm:h-[24px]"
            />
          </button>
        </div>
        <div className="h-[61px] w-full flex flex-col md:flex-row md:justify-between md:items-end">
          <p className="text-[#71717a] text-[14px] leading-[22px] font-[400] text-center">
            © Copyright 2024, Powered by Timbu Business
          </p>
          <div className="md:flex gap-[10px] flex-col md:flex-row md:gap-[54px] items-center *:text-[#71717a] *:text-[14px] *:leading-[22px] *:font-[400] *:text-center pl-3 hidden ">
            <p>Cookies</p>
            <p>Terms of Sevice</p>
            <p>Privacy Policy</p>
            <p>Manage privacy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
