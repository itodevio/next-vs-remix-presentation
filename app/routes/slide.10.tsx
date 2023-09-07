import SRRImage from '~/assets/images/ssr_next.png';
import SSGImage from '~/assets/images/ssg_next.png';
import ISRImage from '~/assets/images/isr_next.png';
import CSRImage from '~/assets/images/csr_next.png';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col py-20 px-16 overflow-hidden">
      <h3 className="text-geekie font-muli font-bold text-3xl">Next.js</h3>
      <span className="text-dark font-multi font-medium text-2xl">Multirendering</span>
      <div className="h-full grid grid-cols-2 justify-items-center overflow-auto mt-8 gap-y-8 w-[90%] mx-auto">
        <div className='flex-col gap-[24px]'>
          <div className="text-dark text-3xl flex gap-2 font-muli font-bold">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            SSR
          </div>
          <img
            alt="marca azul no canto"
            src={SRRImage}
          />
        </div>
        <div className='flex-col gap-[24px]'>
          <div className="text-dark text-3xl flex gap-2 font-muli font-bold">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            SSG
          </div>
          <img
            alt="marca azul no canto"
            src={SSGImage}
          />
        </div>
        <div className='flex-col gap-[24px]'>
          <div className="text-dark text-3xl flex gap-2 font-muli font-bold">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            ISR
          </div>
          <img
            alt="marca azul no canto"
            src={ISRImage}
          />
        </div>
        <div className='flex-col gap-[24px]'>
          <div className="text-dark text-3xl flex gap-2 font-muli font-bold">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            CSR
          </div>
          <img
            alt="marca azul no canto"
            src={CSRImage}
          />
        </div>
      </div>
    </div>
  );
}
