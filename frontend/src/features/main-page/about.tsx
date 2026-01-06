function About() {
  return (
    <section
      className="m-12 max-md:m-4 flex flex-col gap-12 text-lg max-md:text-sm"
      id="about"
    >
      <div>
        <h2 className="text-4xl max-md:text-2xl font-bold bg-gradiant text-transparent bg-clip-text mb-6">
          about sp0m:
        </h2>
        <p className="  md:leading-relaxed">
          sp0m is a phishing simulation platform that lets you create convincing
          fake pages and track who falls for them. Whether you're testing your
          organization's security awareness or learning how social engineering
          attacks work, sp0m gives you the tools to craft realistic phishing
          campaigns and monitor the results in real-time.
        </p>
      </div>

      <div>
        <h3 className="text-2xl max-md:text-xl font-bold mb-4">
          What You Can Do
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h4 className="text-xl max-md:text-lg font-semibold mb-2 text-pink-500">
              ✏️ Create Fake Pages
            </h4>
            <p className="max-md:text-base">
              Build convincing replicas of login pages, forms, and other sites
              that look completely legitimate to unsuspecting users.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h4 className="text-xl max-md:text-lg font-semibold mb-2 text-pink-500">
              🔎 Track Victims
            </h4>
            <p className="max-md:text-base">
              Monitor who clicks your links, what data they submit, and how they
              interact with your phishing pages.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h4 className="text-xl max-md:text-lg font-semibold mb-2 text-pink-500">
              📊 Visualize Results
            </h4>
            <p className="max-md:text-base">
              See detailed analytics and visualizations of your campaign
              performance and victim interactions.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <h4 className="text-xl max-md:text-lg font-semibold mb-2 text-pink-500">
              ⚡ Deploy Instantly
            </h4>
            <p className="max-md:text-base">
              Launch your phishing campaigns quickly with shareable links that
              you can distribute however you want.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl max-md:text-2xl font-bold mb-4">
          How It Works
        </h3>
        <ol className="space-y-4">
          <li className="flex gap-4">
            <span className="font-bold text-pink-500 text-xl max-md:text-lg">
              1.
            </span>
            <span>
              <strong>Deploy:</strong> Get a unique link to your fake page that
              you can share with targets.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-pink-500 text-xl max-md:text-lg">
              2.
            </span>
            <span>
              <strong>Monitor:</strong> Watch in real-time as people interact
              with your page and submit their data.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-pink-500 text-xl max-md:text-lg">
              3.
            </span>
            <span>
              <strong>Analyze:</strong> Review the collected data and see who
              fell for your phishing attempt.
            </span>
          </li>
        </ol>
      </div>

      <div>
        <h3 className="text-3xl font-bold mb-4">Who Uses This?</h3>
        <div className="space-y-3">
          <p>
            <strong className="text-pink-500">Security Teams:</strong> Test
            employee awareness and identify who needs additional security
            training in your organization.
          </p>
          <p>
            <strong className="text-pink-500">Penetration Testers:</strong> Add
            social engineering to your security assessments and demonstrate
            real-world attack vectors.
          </p>
          <p>
            <strong className="text-pink-500">Researchers:</strong> Study human
            behavior in phishing scenarios and understand what makes attacks
            successful.
          </p>
          <p>
            <strong className="text-pink-500">Students:</strong> Learn hands-on
            how phishing works and why it's such an effective attack method.
          </p>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded">
        <h3 className="text-2xl max-md:text-xl font-bold mb-3 text-red-700 dark:text-red-400">
          ⚠️ Legal Disclaimer
        </h3>
        <p className="text-base max-md:text-sm leading-relaxed">
          This platform is for authorized security testing and educational
          purposes only. Using sp0m to target individuals without their consent
          or proper authorization is illegal and unethical. You are solely
          responsible for how you use this tool. Always obtain explicit
          permission before conducting phishing simulations, and comply with all
          applicable laws and regulations.
        </p>
      </div>
    </section>
  );
}

export default About;
