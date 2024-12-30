import Entry from "./components/Entry";
import Header from "./components/Header";
import Challenge from "./components/Challenge";
import Contact from "./components/Contact";
import Joke from "./components/Joke";

function App() {
  return (
    <>
      {/* <Header />
      <div className="py-16 px-20 flex flex-col gap-8">
        <Entry />
      </div> */}
      {/* <Challenge img="/src/assets/images/dog1.jpg"  /> */}

      <div className="grid  items-center gap-8 p-8">
        {" "}
        {/* <Contact
          img="/src/assets/images/dog1.jpg"
          title="Mr. Docker"
          telePhone={2346345375343}
          email="docker@gmail.com"
        />
        <Contact
          img="/src/assets/images/dog2.jpg"
          title="Mr. Fluffykins"
          telePhone={2346345375343}
          email="fluffy@gmail.com"
        />
        <Contact
          img="/src/assets/images/dog3.jpg"
          title=" Debbie"
          telePhone={2346345375343}
          email="debbie@gmail.com"
        />
        <Contact
          img="/src/assets/images/dog4.jpg"
          title="Tony "
          telePhone={2346345375343}
          email="tony@gmail.com"
        /> */}
        <Joke
          upvote={6}
          downvote={2}
          isPun={true}
          setup="Why was the scarecrow given an oscar?"
          punchline="Because he was outstanding in the fields"
          comment={[{ author: "John Smith", body: "lorem" }]}
        />
        <Joke
          setup="How did the hacker escape the police?"
          punchline="He just ransomware"
        />
        <Joke
          setup="I gave my daughter a fridge for her birthday"
          punchline="Can wait to see her face light up when she opens it."
        />
        <Joke punchline="It's hard to explain puns to keptomaniacs because they always take things literary" />
      </div>
    </>
  );
}

export default App;
