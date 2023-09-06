export default function Slide() {
  const nextShowcase = [
    { label: 'Twitch', url: 'https://m.twitch.tv' },
    { label: 'TikTok', url: 'https://m.tiktok.com' },
    { label: 'Notion', url: 'https://notion.com' },
    { label: 'HBO Max', url: 'https://hbomax.com' },
    { label: 'Typeform', url: 'https://typeform.com' },
  ];

  const remixShowcase = [
    { label: 'Shopify', url: 'https://shopify.com' },
    { label: 'NASA', url: 'https://gcn.nasa.gov' },
    { label: 'Docker Scout', url: 'https://scout.docker.com' },
    { label: 'Webstudio', url: 'https://webstudio.is' },
    { label: 'Github Copilot4PRs', url: 'https://copilot4prs.githubnext.com' },
  ];

  const Showcase = ({ label, url }: { label: string; url: string; }) => {
    return (
      <a
        href={url}
        target="_blank"
        className="text-geekie underline"
      >
        {label}
      </a>
    );
  }

  return (
    <div className="w-full h-full relative flex flex-col p-10 md:py-20 md:px-16 overflow-hidden">
      <h3 className="text-geekie font-muli font-bold text-3xl">Por que essas techs?</h3>
      <span className="text-dark font-multi font-medium text-2xl">Mantenedoras e Showcase</span>
      <div className="w-4/5 h-full gap-16 md:gap-0 flex flex-col mx-auto md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-1 px-0 md:px-6 font-muli text-dark">
          <h4 className="text-4xl font-bold">Next.js</h4>
          <div className="font-semibold text-2xl">
            Mantenedora: {' '}
            <Showcase label="Vercel" url="https://vercel.com" />
          </div>
          <div className="font-semibold text-2xl">
            Showcase:
            <p>
              <Showcase {...nextShowcase[0]} />
              {' - '}
              <Showcase {...nextShowcase[1]} />
              {' - '}
              <Showcase {...nextShowcase[2]} />
              {' - '}
              <Showcase {...nextShowcase[3]} />
              {' - '}
              <Showcase {...nextShowcase[4]} />
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-1 font-muli text-dark">
          <h4 className="text-4xl font-bold">Remix</h4>
          <div className="font-semibold text-2xl">
            Mantenedoras: {' '}
            <Showcase label="React Router" url="https://reactrouter.com" />
            {' '}
            +
            {' '}
            <Showcase label="Shopify" url="https://shopify.com" />
          </div>
          <div className="font-semibold text-2xl">
            Showcase:
            <p>
              <Showcase {...remixShowcase[0]} />
              {' - '}
              <Showcase {...remixShowcase[1]} />
              {' - '}
              <Showcase {...remixShowcase[2]} />
              {' - '}
              <Showcase {...remixShowcase[3]} />
              {' - '}
              <Showcase {...remixShowcase[4]} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

