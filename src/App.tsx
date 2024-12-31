import Entry from "./components/Entry";
import Header from "./components/Header";
import dog1 from "./assets/images/dog1.jpg";
import dog2 from "./assets/images/dog2.jpg";
import dog3 from "./assets/images/dog3.jpg";
import dog4 from "./assets/images/dog4.jpg";
import mountFugi from "./assets/images/Rectangle-77.png";
import JokeApp from "./components/Joke/JokeApp";
import entryData from "./components/entryData";

function App() {
  const entryDataElement = entryData.map((data) => {
    return <Entry key={data.id} {...data} />;
  });
  return (
    <>
      <Header />
      <div className="py-16 px-20 flex flex-col gap-8">{entryDataElement}</div>

      {/* <JokeApp /> */}
    </>
  );
}

export default App;
