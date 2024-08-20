function Cards(props) {
  return (
    <article className="rounded p-6 w-full gap-x-4 bg-gray-700 space-y-4">
      <div>
        <p className="bg-slate-800 inline-block px-4 py-2 rounded text-xl">
          {props.topicImage}
        </p>
      </div>
      <h5 className="font-semibold">{props.topicTitle}</h5>
      <p className="font-light">{props.topicInformation}</p>
    </article>
  );
}

export default Cards;
