import GeekieLogo from "~/components/GeekieLogo";

export default function Slide() {
  return (
    <div className="w-full h-full p-8 gap-10 md:gap-14 lg:gap-20 bg-geekie flex flex-col justify-center items-center">
      <GeekieLogo />
      <div>
        <h1 className="text-white text-center text-5xl md:text-7xl lg:text-9xl font-muli font-extrabold">
          React à Tona:
        </h1>
        <h2 className="text-white text-center text-4xl md:text-6xl lg:text-8xl font-muli font-extrabold">
          Inovando com Next.js e Remix
        </h2>
      </div>
    </div>
  );
}

