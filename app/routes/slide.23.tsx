export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col p-10 md:py-20 md:px-16">
      <h3 className="text-geekie font-muli font-bold text-3xl">Casos de Uso</h3>
      <span className="text-dark font-multi font-medium text-2xl">🤔💭</span>
      <div className="flex flex-col md:flex-row gap-4 w-full h-full justify-center items-center">
        <div className="flex flex-col gap-10 mt-6">
          <div className="flex gap-4">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            <div className="flex flex-col gap-4">
              <h4 className="text-dark text-3xl font-muli font-bold">
                Site da {' '}
                <a href="https://geekie.com.br" target="_blank" className="text-geekie underline">
                  Geekie
                </a>
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl font-muli font-medium">
                  O projeto do site da geekie foi desenvolvido com Next.js
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            <div className="flex flex-col gap-4">
              <h4 className="text-dark text-3xl font-muli font-bold">
                Explorar possibilidades
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl font-muli font-medium">
                  Features mais recentes do React como Server Components são <br/>nativamente suportadas
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
                Futuro do backend
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl font-muli font-medium">
                  Esses frameworks fullstack são um bom approach para solução <br/>para os problemas de arquitetura que enfrentamos com o combo <br/><span className="text-geekie font-semibold">Nginx</span> + <span className="text-geekie font-semibold">uWSGI</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
            <div className="flex flex-col gap-4">
              <h4 className="text-dark text-3xl font-muli font-bold">
                Projeto de gráficos
              </h4>
              <div className="flex flex-col gap-2">
                <p className="text-dark text-xl font-muli font-medium">
                  Chance de teste de uso em escala menor com o projeto de <br/> gráficos para PDFs no backend, que o time de acompanhamento puxou <br/> na Jenga
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
