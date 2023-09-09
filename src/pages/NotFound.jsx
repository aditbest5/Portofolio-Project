import { Hero } from "react-daisyui";

export default function NotFound() {
  return (
    <>
      <Hero className="py-24 transition ease-in duration-300">
        <Hero.Content className="py-20 sm:py-32">
          <div>
            <h1 className="text-5xl font-serif font-bold">
              404 Pages Not Found
            </h1>
          </div>
        </Hero.Content>
      </Hero>
    </>
  );
}
