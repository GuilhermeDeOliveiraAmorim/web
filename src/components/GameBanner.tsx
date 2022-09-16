interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCounter: number;
}

function GameBanner(props: GameBannerProps) {
  const { title, bannerUrl, adsCounter } = props;

  return (
    <a className="relative rounded-lg overflow-hidden" href="">
      <img src={bannerUrl} alt="" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCounter} anúncio(s)
        </span>
      </div>
    </a>
  );
}

export { GameBanner };
