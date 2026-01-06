import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <section
      className="flex justify-between max-lg:flex-col max-lg:items-center gap-4 m-12 max-md:m-4"
      id="home"
    >
      <img
        src="hacker.png"
        className="w-1/2 h-1/2 max-lg:w-full"
        alt="hacker"
      />

      <div className="flex flex-col h-full w-full justify-around z-10 gap-4">
        <h2 className="text-5xl max-md:text-3xl font-bold">
          start your journey with <span className="text-pink-500">sp0m</span>
        </h2>
        <p className="text-lg max-md:text-base">
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
          <strong>Important:</strong> This platform is strictly for educational
          purposes. Do not use it for malicious activity. Always respect ethical
          boundaries and legal compliance when practicing cybersecurity skills.
        </p>
        <button
          className="text-2xl font-bold px-4 py-2 rounded-lg hover:brightness-120 mx-6 
                     hover:bg-gray-200 border border-black bg-gradiant text-white"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Home;
