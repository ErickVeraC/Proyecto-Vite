import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Principal from "./components/Principal";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

const topicData = [
  {
    topicImage: "💡",
    topicTitle: "Instant Server Start",
    topicInformation:
      "On demand file serving over native ESM, no bundling required!",
  },
  {
    topicImage: "⚡️",
    topicTitle: "Lightning Fast HMR",
    topicInformation:
      "Hot Module Replacement (HMR) that stays fast regardless of app size.",
  },
  {
    topicImage: "🛠️",
    topicTitle: "Rich Features",
    topicInformation:
      "Out-of-the-box support for TypeScript, JSX, CSS and more.",
  },
  {
    topicImage: "📦",
    topicTitle: "Optimized Build",
    topicInformation:
      "Pre-configured Rollup build with multi-page and library mode support.",
  },
  {
    topicImage: "🔩",
    topicTitle: "Universal Plugins",
    topicInformation:
      "Rollup-superset plugin interface shared between dev and build.",
  },
  {
    topicImage: "🔑",
    topicTitle: "Fully Typed APIs",
    topicInformation: "Flexible programmatic APIs with full TypeScript typing.",
  },
];

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      <Principal />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[90%] mx-auto">
        {topicData.map((topic, index) => {
          return (
            <Cards
              key={`topic-${index}`}
              topicImage={topic.topicImage}
              topicTitle={topic.topicTitle}
              topicInformation={topic.topicInformation}
            />
          );
        })}
      </div>
      <hr className="border-0 h-0.5 bg-slate-950 my-20" />
      <div className="max-w-[90%] mx-auto">
        <Sponsors />
      </div>
      <hr className="border-0 h-0.5 bg-slate-950 my-20" />
      <Footer />
    </>
  );
}

export default App;
