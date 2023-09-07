export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col p-10 md:py-20 md:px-16">
      <h3 className="text-geekie font-muli font-bold text-3xl">Rendering</h3>
      <span className="text-dark font-multi font-medium text-2xl">Métodos</span>
      <div className="flex flex-col md:flex-row gap-4 w-full h-full justify-center items-center">
        <div className="flex flex-col gap-10 mt-6">
          <div className="flex gap-4">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            <div className="flex flex-col gap-4">
              <h4 className="text-dark text-3xl font-muli font-bold">
                Static Site Generation - {' '}
                <span className="text-geekie">
                  SSG
                </span>
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl font-muli font-medium">
                  - Páginas são geradas em tempo de build
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Muito performático
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Ótimo para SEO
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Não da pra atualizar os dados uma vez buildado
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            <div className="flex flex-col gap-4">
              <h4 className="text-dark text-3xl font-muli font-bold">
                Client-Side Rendering - {' '}
                <span className="text-geekie">
                  CSR
                </span>
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl font-muli font-medium">
                  - Páginas são enviadas com um HTML <span className="font-semibold">minimo</span> para o <br/>
                  <div className="pl-4 inline" /> {' '}
                  navegador, que então usa Javascript e chamadas para <br/>
                  <div className="pl-4 inline" /> {' '}
                  APIs para <span className="text-geekie font-bold">HIDRATAR</span> os dados
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Como os dados não vem do servidor, são necessários <br />
                  <div className="pl-4 inline" /> {' '}
                  vários componentes de loading
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Dados atualizados em tempo de execução
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Péssimo para SEO
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            <div className="flex flex-col gap-4">
              <h4 className="text-dark text-3xl font-muli font-bold">
                Server-Side Rendering - {' '}
                <span className="text-geekie">
                  SSR
                </span>
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl font-muli font-medium">
                  - Páginas são geradas no servidor a cada request
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Dados são buscados antes de montar a página e <br />
                  <div className="pl-4 inline" />
                  incorporados no HTML
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Ótimo para SEO
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Mais lento que o SSG*
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            <div className="flex flex-col gap-4">
              <h4 className="text-dark text-3xl font-muli font-bold">
                Incremental Static Regeneration - {' '}
                <span className="text-geekie">
                  ISR
                </span>
                <img
                  className="inline h-8 ml-4 -mt-2"
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3244252/nextjs-icon-md.png"
                />
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl font-muli font-medium">
                  - Páginas são geradas em tempo de build, com um timer <br />
                  <div className="pl-4 inline" />
                  para revalidação, onde o servidor as rebuilda
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Muito Performático
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Ótimo para SEO
                </p>
                <p className="text-dark text-xl font-muli font-medium">
                  - Dados são atualizados a cada build, que podem ser realizados <br />
                  <div className="pl-4 inline" />
                  em intervalos de segundos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

