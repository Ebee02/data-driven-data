import Entry from "./components/Entry";
import Header from "./components/Header";
import Challenge from "./components/Challenge";
import Contact from "./components/Contact";
import Joke from "./components/Joke";
import dog1 from "./assets/images/dog1.jpg";
import dog2 from "./assets/images/dog2.jpg";
import dog3 from "./assets/images/dog3.jpg";
import dog4 from "./assets/images/dog4.jpg";
import mountFugi from "./assets/images/Rectangle-77.png";

function App() {
  return (
    <>
      <Header />
      <div className="py-16 px-20 flex flex-col gap-8">
        <Entry
          img={{ src: mountFugi, alt: "image of mount fuji" }}
          title="Mount Fuji"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          country="japan"
          dates="12 Jan, 2025 - 24 Jan, 2025"
          text={`Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.`}
        />
      </div>
      {/* <Challenge img="/src/assets/images/dog1.jpg" /> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 p-8">
        {" "}
        <Contact
          img={dog1}
          title="Mr. Docker"
          telePhone={2346345375343}
          email="docker@gmail.com"
        />
        <Contact
          img={dog2}
          title="Mr. Fluffykins"
          telePhone={2346345375343}
          email="fluffy@gmail.com"
        />
        <Contact
          img={dog3}
          title=" Debbie"
          telePhone={2346345375343}
          email="debbie@gmail.com"
        />
        <Contact
          img={dog4}
          title="Tony "
          telePhone={2346345375343}
          email="tony@gmail.com"
        />
      </div> */}

      {/* <div className="p-6">
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
      </div> */}
    </>
  );
}

export default App;
