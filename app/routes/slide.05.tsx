export default function Slide() {
  const nextShowcase = [
    { label: 'Twitch', url: 'https://m.twitch.tv', img: 'https://cdn-icons-png.flaticon.com/512/2111/2111668.png' },
    { label: 'TikTok', url: 'https://m.tiktok.com', img: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png' },
    { label: 'Notion', url: 'https://notion.com', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png' },
    { label: 'HBO Max', url: 'https://hbomax.com', img: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8' },
    { label: 'Typeform', url: 'https://typeform.com', img: 'https://static-00.iconduck.com/assets.00/typeform-icon-icon-510x512-x1e6lllv.png' },
  ];

  const remixShowcase = [
    { label: 'Shopify', url: 'https://shopify.com', img: 'https://cdn-icons-png.flaticon.com/512/536/536473.png' },
    { label: 'NASA', url: 'https://gcn.nasa.gov', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png', width: '3rem' },
    { label: 'Docker Scout', url: 'https://scout.docker.com', img: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
    { label: 'Webstudio', url: 'https://webstudio.is', img: 'https://i.imgur.com/LyqfGYl.png' },
    { label: 'Github Copilot4PRs', url: 'https://copilot4prs.githubnext.com', img: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png' },
  ];

  const Showcase = ({ label, url, img, width }: { label: string; url: string; img: string; width?: string; }) => {
    return (
      <a
        href={url}
        target="_blank"
        className="text-geekie underline inline-flex items-end gap-4"
      >
        <img className="h-10" style={{width: width || '2.5rem'}} src={img} />
        <p className="-mb-1">{label}</p>
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
          <div className="font-semibold flex flex-col gap-4 text-2xl mt-5">
            <span>Mantenedora:</span>
            <Showcase label="Vercel" url="https://vercel.com" img="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" />
          </div>
          <div className="font-semibold text-2xl mt-8">
            Showcase:
            <p className="mt-4">
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
        <div className="flex flex-col md:flex-1 font-muli text-dark pl-10 border-l-2 border-[#CCCCCC]">
          <h4 className="text-4xl font-bold">Remix</h4>
          <div className="font-semibold text-2xl flex flex-col gap-4 mt-5">
            <span>Mantenedoras:</span>
            <Showcase label="React Router" url="https://reactrouter.com" img="https://miro.medium.com/v2/resize:fit:512/1*0FyDA9f-ncxV0eK7OqtR9A.png" />
            <Showcase {...remixShowcase[0]} />
          </div>
          <div className="font-semibold text-2xl mt-8">
            Showcase:
            <p className="mt-4">
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

