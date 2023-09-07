import BlueMarksCircle from '~/assets/images/blue_marks_circle.png';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col py-20 px-16 overflow-hidden">
      <h3 className="text-geekie font-muli font-bold text-3xl">Por que essas techs?</h3>
      <span className="text-dark font-multi font-medium text-2xl">React Docs</span>
      <div className="w-full h-full flex gap-flex-col justify-center items-center">
        <p className="text-4xl w-4/5 text-dark font-semibold font-muli">
          A {' '}
          <a
            className="text-geekie underline"
            href="https://react.dev/learn/start-a-new-react-project"
            target="_blank"
          >
            nova doc do React
          </a>
          {' '} já recomenda oficialmente o uso do Next.js e do Remix (e do Gatsby, mas não vem ao caso) como frameworks fullstack
          production-ready para novos projetos Web.
        </p>
      </div>
      <img
        src={BlueMarksCircle}
        className="absolute -bottom-24 md:-bottom-32 -right-20 md:-right-20 w-60 h-60 md:w-[26rem] md:h-[26rem]"
      />
    </div>
  );
}

