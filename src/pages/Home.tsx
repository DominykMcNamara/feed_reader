function Home() {
  return (
    <section className="w-full h-full">
      <div className="flex flex-row gap-2 justify-around items-center ">
        <h1 className="text-4xl font-bold text-center">
          Your front page news where ever you are
        </h1>
        <img
          src="/src/assets/front_page_of_front_page_news.png"
          alt="Front Page News"
          className=""
        />
      </div>
      <div className="flex flex-row justify-around items-center mt-8">
        <a href="#" className="button">
          Log in
        </a>
        <a className="button">Try as a guest</a>
      </div>
    </section>
  );
}

export default Home;
