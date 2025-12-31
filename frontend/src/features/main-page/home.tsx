import ShadowEffect from "../../shared/components/ui/shadow-effect";

function Home() {
  return (
    <main className="flex justify-evenly max-md:flex-col gap-4 m-12">
      <img
        src="hacker.png"
        className="w-1/2 max-md:w-full"
        alt="hacker"
        loading="lazy"
      />

      <ShadowEffect>
        <div className="flex flex-col h-full w-full justify-around z-10 gap-4">
          <h2 className="text-5xl font-bold">
            start your journey with <span className="text-pink-500">sp0m</span>
          </h2>
          <p className="text-lg">
            sp0m is an interactive web platform designed for learning and
            practicing cybersecurity awareness through simulated scenarios.
            <br />
            Here, you can experiment with creating mock pages and explore how
            phishing techniques work in a safe, controlled environment.
            <br />
            The goal is to help learners, developers, and security enthusiasts
            understand the mechanics of social engineering so they can recognize
            and defend against real-world threats.
            <br />
            <br />
            <strong>Important:</strong> This platform is strictly for
            educational purposes. Do not use it for malicious activity. Always
            respect ethical boundaries and legal compliance when practicing
            cybersecurity skills.
          </p>
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 border border-black">
            Get Started
          </button>
        </div>
      </ShadowEffect>
    </main>
  );
}

export default Home;
