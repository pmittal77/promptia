import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-powered prompting tool
        </span>
      </h1>
      <p className="desc text-center">Promptia is a AI powered prompting tool for the modern world to discover and share really cool prompts</p>
      <div>My Homepage2 for Promptia</div>
      <Feed />
    </section>
  );
}

export default Home;