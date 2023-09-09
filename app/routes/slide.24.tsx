import GeekieLogo from "~/components/GeekieLogo";

export default function Slide() {
  return (
    <div className="w-full h-full bg-geekie flex flex-col gap-8 justify-center items-center">
      <GeekieLogo />
      <h1 className="text-white text-7xl font-muli font-bold">Dúvidas?</h1>
      <img src="https://qph.cf2.quoracdn.net/main-qimg-8f9fe43cce17e3723ecf26196fef9583" />
    </div>
  );
}

