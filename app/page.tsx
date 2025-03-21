import Image from "next/image";
import Hero from "./components/main/Hero";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
      </div>

    </div>
  );
}
