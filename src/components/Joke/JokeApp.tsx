import jokesData from "./jokesData";
import Joke from "./Joke";

const JokeApp = () => {
  const jokesDataElement = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div className="flex flex-col gap-4 p-6">{jokesDataElement}</div>;
};

export default JokeApp;
