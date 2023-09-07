import BlueMarksCircle from '~/assets/images/blue_marks_circle.png';

export default function Slide() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col md:flex-row px-[10vw] md:px-0 gap-4 md:gap-0 justify-center md:justify-start items-center">
      <img
        className="absolute -top-24 md:-top-32 -right-20 md:-right-20 w-60 h-60 md:w-[26rem] md:h-[26rem]"
        src={BlueMarksCircle}
      />
      <div className="border-b-4 border-[#FFC300] w-full md:-mr-[13.5vw] lg:-mr-[10.5vw] xl:-mr-[7vw] text-geekie font-muli font-bold text-5xl md:w-[48vh] text-center md:pb-6 transform md:rotate-[-90deg]">
        AGENDA
      </div>
      <div className="flex flex-col justify-center gap-3 text-dark text-3xl font-semibold">
        <span>
          <span className="text-geekie mr-4 inline-block w-10">01.</span>
          Por que essas techs?
        </span>
        <span>
          <span className="text-geekie mr-4 inline-block w-10">02.</span>
          Rendering
        </span>
        <span>
          <span className="text-geekie mr-4 inline-block w-10">03.</span>
          Next.js
        </span>
        <span>
          <span className="text-geekie mr-4 inline-block w-10">04.</span>
          Remix
        </span>
        <span>
          <span className="text-geekie mr-4 inline-block w-10">05.</span>
          Casos de uso
        </span>
      </div>
    </div>
  );
}

