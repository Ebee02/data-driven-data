type JokePropsType = {
  setup?: string;
  punchline: string;
  upvote?: number;
  downvote?: number;
  isPun?: boolean;
  comment?: Array<{ author: string; body: string }>;
};

const Joke = (props: JokePropsType) => {
  return (
    <div className="flex flex-col gap-1 ">
      {props.setup && (
        <h1 className="text-xl font-bold">
          <span className="text-green-700 uppercase">Setup: </span>
          {props.setup}
        </h1>
      )}
      <p className="text-lg font-medium">
        <span className="text-blue-700 uppercase">punchline: </span>{" "}
        {props.punchline}
      </p>
      {props.downvote && props.upvote && props.isPun && (
        <div className="flex flex-col items-end w-full">
          <p>Up votes: {props.upvote}</p>
          <p>Down votes: {props.downvote}</p>
          <p>Is it a pun: {props.isPun.toString()}</p>
        </div>
      )}
      <hr className="border border-gray-400" />
    </div>
  );
};

export default Joke;
