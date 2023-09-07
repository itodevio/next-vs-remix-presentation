import GeekieLogo from "~/components/GeekieLogo";

export default function Slide() {
  return (
    <div className="w-full h-full bg-geekie flex flex-col gap-8 justify-center items-center">
      <GeekieLogo />
      <h1 className="text-white text-7xl font-muli font-bold">Live Coding!</h1>
      <img src="https://media.tenor.com/rMxNr07CxSMAAAAM/cat-crazy-cat.gif" />
    </div>
  );
}

