import ReactRouterImage from '~/assets/images/react_router.png';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col p-10 md:py-20 md:px-16">
      <h3 className="text-geekie font-muli font-bold text-3xl">Remix</h3>
      <span className="text-dark font-multi font-medium text-2xl">React Router</span>
      <div className="w-full h-full flex gap-14 justify-center items-center">
          <img src={ReactRouterImage} className="rounded-lg" />
      </div>
    </div>
  );
}
