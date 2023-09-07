import GeekieLogo from "~/components/GeekieLogo";

export default function Slide() {
  return (
    <div className="w-full h-full bg-geekie flex flex-col gap-8 justify-center items-center">
      <GeekieLogo />
      <img src="https://media.crystallize.com/crystallize_marketing/22/11/30/2/remix_run_logo.png" className="w-[500px]" />
    </div>
  );
}

