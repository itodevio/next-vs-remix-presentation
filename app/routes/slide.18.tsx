import RemixDataImage from '~/assets/images/remix_dataflow.png';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col p-10 md:py-20 md:px-16">
      <h3 className="text-geekie font-muli font-bold text-3xl">Remix</h3>
      <span className="text-dark font-multi font-medium text-2xl">Data Flow</span>
      <div className="w-full h-full flex gap-14 justify-center items-center">
        <div className="flex gap-4 w-1/3 justify-center ">
          <div className="bg-geekie w-4 h-4 flex-shrink-0 rounded-full mt-1.5" />
          <div className="flex flex-col gap-4">
            <h4 className="text-dark text-3xl font-muli font-bold">
              Front 🤝 Back
            </h4>
            <p className="text-dark text-xl font-muli font-medium">
              Com uma linha extremamente tênue entre o front o back, o Remix entrega uma DX excepcional com uma comunicação enxuta entre os dois.
            </p>
            <p className="text-dark text-xl font-muli font-medium">
              Basta criar uma função <span className="text-geekie font-semibold">loader</span> para pegar dados no back e montar a página com <span className="text-geekie font-semibold">SSR</span>, lendo os dados através do hook <span className="text-geekie font-semibold">useLoaderData()</span>.
            </p>
            <p className="text-dark text-xl font-muli font-medium">
              Para envio de dados para alguma API, é só criar uma função <span className="text-geekie font-semibold">action</span> e o Remix criará uma rota POST apontando para a mesma URL da route, o que significa que os <span className="text-geekie font-semibold">{'<form>'}</span> chamam automaticamente a action do prórpio arquivo!
            </p>
          </div>
        </div>
        <img src={RemixDataImage} className="rounded-lg" />
      </div>
    </div>
  );
}
