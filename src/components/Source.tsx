type SourceItem = {
  text: string;
  url: string;
};

type SourceProps = {
  sources: SourceItem[];
};

const Source = ({ sources }: SourceProps) => {
  return (
    <div className="bg-[#f0f8ff] p-10 rounded-2xl mt-5 w-full lg:w-[980px] mx-auto text-wrap">
      <h3>出典・参考文献</h3>
      <ul className="w-full text-wrap">
        {sources.map((source) => (
          <li key={`${source.text}-${source.url}`} className="my-5">
            <p className="wrap-anywhere">{source.text}</p>
            <a
              className="underline text-[#4169e1] hover:opacity-50 w-full block wrap-anywhere"
              href={source.url}
            >
              {source.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Source;
