type Props = {
  title: string;
  subtitle?: string;
  backgroundImageUrl?: string;
  leading?: React.ReactNode;
};

export default function SubpageHero({ title, subtitle, backgroundImageUrl = "/hero-bg.jpg", leading }: Props) {
  return (
    <div
      className="relative text-white py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {leading}
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-white/80 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}

