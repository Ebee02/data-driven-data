const Challenge = () => {
  const ninjaTurtles = ["Donatello", "Rafael", "Michaelangelo", "Leonardo"];

  const ninjaTurtlesEl = ninjaTurtles.map((turtle) => (
    <h2 key={turtle}>{turtle}</h2>
  ));
  return (
    <div className="text-2xl font-medium p-5">
      <h1 className="mb-6 text-4xl">Challage component</h1>
      {ninjaTurtlesEl}
    </div>
  );
};

export default Challenge;
