import HeaderBanner from "@/sections/HeaderBanner";
import HeroBanner from "@/sections/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="w-full bg-dark-base h-screen flex items-center justify-center dark:bg-light-base">
        <h4 className="text-light-base text-4xl dark:text-dark-base">FOOTER</h4>
      </div>
    </>
  );
}
