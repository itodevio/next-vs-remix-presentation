import GeekieLogo from "~/components/GeekieLogo";

export default function Slide() {
  return (
    <div className="w-full h-full bg-geekie flex flex-col gap-8 justify-center items-center">
      <GeekieLogo />
      <img src="https://www.datocms-assets.com/205/1667580983-next.svg?auto=format&fit=max&w=400" className="bg-white px-4 rounded" />
    </div>
  );
}

