import Hero from "../components/HeroComponent";

function Home() {
  return (
    <>
      <Hero url="https://cdnvideo.dolimg.com/cdn_assets/1901dabc6d4aceaabb8400d5e26e33874a1bf01d.mp4" />
      <div>
        <h2>Novedades</h2>
        <Hero url="https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-singlehero-desktop_b0f2685c.jpeg?region=0,0,1600,680&width=1536" />
      </div>
    </>
  );
}

export default Home;
