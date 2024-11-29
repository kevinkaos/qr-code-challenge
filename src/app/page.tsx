import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-[499px] sm:h-[540px] w-[320px] container mx-auto flexjustify-center rounded-[20px] p-[16px] pb-[40px]">
      <Image
        src="/image-qr-code.png"
        alt="qr code"
        width={288}
        height={288}
        className="mb-[24px] rounded-[10px]"
      />
      <div className="px-[16px]">
        <div className="text-center text-[22px] font-bold text-slate-900 leading-[120%] mb-[16px] tracking-[0px]">
          Improve your front-end skills by building projects
        </div>
        <div className="text-center text-[15px] sm:text-[22px] font-normal sm:font-bold text-slate-500 leading-[140%] sm:leading-[120%] tracking-[0.2px] sm:tracking-[0.2px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
}
