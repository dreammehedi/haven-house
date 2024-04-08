import Button from "../../shareComponents/Button";
function HeroSlider() {
  return (
    <div
      style={{
        background: `linear-gradient(50deg, rgba(28, 28, 30, 1), rgba(7, 3, 18, 0.2)),url(https://i.ibb.co/d63sknz/slider2.png)`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
      }}
      className="w-full h-full rounded-3xl overflow-hidden"
    >
      <div className="w-full h-full md:max-w-3xl p-4 md:p-6 flex flex-col justify-center space-y-3 text-white">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-normal lg:leading-[4rem] capitalize">
          Discover Your Dream{" "}
          <span className="text-green-500">Single-Family Home</span>
        </h1>
        <p className="text-slate-200 text-wrap">
          Welcome to our collection of stunning single-family homes! Whether you
          are a first-time buyer, a growing family, or someone looking to
          downsize, we have the perfect home for you. Our selection features a
          variety of styles, sizes, and locations to meet your needs and
          preferences.
        </p>
        <Button cls={"mr-auto"} name="Explore Homes"></Button>
      </div>
    </div>
  );
}

export default HeroSlider;
