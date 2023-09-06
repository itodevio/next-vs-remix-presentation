import GeekieLogo from "~/components/GeekieLogo";

export default function Slide() {
  return (
    <div className="w-full h-full bg-geekie flex flex-col gap-8 justify-center items-center">
      <GeekieLogo />
      <h1 className="text-white text-7xl font-muli font-bold">
        Rendering
      </h1>
    </div>
  );
}

