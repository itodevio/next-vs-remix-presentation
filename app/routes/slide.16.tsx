export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col p-10 md:py-20 md:px-16">
      <h3 className="text-geekie font-muli font-bold text-3xl">Remix</h3>
      <span className="text-dark font-multi font-medium text-2xl">Features e conceitos</span>
      <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
        <div className="flex gap-4 w-1/2 justify-center ">
          <div className="bg-geekie w-4 h-4 flex-shrink-0 rounded-full mt-1.5" />
          <div className="flex flex-col gap-4">
            <h4 className="text-dark text-3xl font-muli font-bold">
              <span className="text-geekie">
                SSR
              </span>
              {' '}
              por padrão
            </h4>
            <p className="text-dark text-xl font-muli font-medium">
              O foco do Remix é entregar páginas sem excesso de javascript nos bundles, com boa performance e SEO out of the box
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-1/2 justify-center ">
          <div className="bg-geekie w-4 h-4 flex-shrink-0 rounded-full mt-1.5" />
          <div className="flex flex-col gap-4">
            <h4 className="text-dark text-3xl font-muli font-bold">
              Web Fetch API
            </h4>
            <p className="text-dark text-xl font-muli font-medium">
              Construído em cima da Web Fetch API ao invés do Node, é possível rodar em qualquer lugar. Tem inclusive suporte nativo para o Cloudflare Workers, a maior solução de Edge Computing atualmente
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-1/2 justify-center ">
          <div className="bg-geekie w-4 h-4 flex-shrink-0 rounded-full mt-1.5" />
          <div className="flex flex-col gap-4">
            <h4 className="text-dark text-3xl font-muli font-bold">
              Web Standars - {' '}
              <span className="text-geekie">
                #UseThePlatform
              </span>
            </h4>
            <p className="text-dark text-xl font-muli font-medium">
              O incentivo máximo é para usar o que a plataforma web já fornece nativamente, como as actions dos <span className="text-geekie font-bold">{'<form>'}</span> e componentes de <span className="text-geekie font-bold">{'<input/>'}</span> sem lidar com estado nos <span className="text-geekie font-bold">value</span> e <span className="text-geekie font-bold">onChange</span> (embora não seja proibido, caso seja realmente necessário)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
