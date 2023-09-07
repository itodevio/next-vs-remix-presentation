import WithoutRemixImage from '~/assets/images/without_remix.png';
import WithRemixImage from '~/assets/images/with_remix.png';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col p-10 md:py-20 md:px-16">
      <h3 className="text-geekie font-muli font-bold text-3xl">Remix</h3>
      <span className="text-dark font-multi font-medium text-2xl">Carregamento em Paralelo</span>
      <div className="w-full h-full flex gap-14 justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <span className="text-dark font-bold text-5xl">React.js</span>
          <img src={WithoutRemixImage} className="rounded-lg" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-dark font-bold text-5xl">Remix</span>
          <img src={WithRemixImage} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
