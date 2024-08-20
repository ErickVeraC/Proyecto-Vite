import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Principal from "./components/Principal";

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
      <Navbar />
      <Principal />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
    </>
  );
}

export default App;
