import Image from "next/image";
import BannerSection from "./components/home-component/BannerSection";
import LatestProduct from "./components/home-component/LatestProduct";

export default function Home() {
  return (
    <>
      <BannerSection />
      <LatestProduct/>
      <div className="text-2xl text-center mt-5">
        Main Page
      </div>
    </>
  );
}
