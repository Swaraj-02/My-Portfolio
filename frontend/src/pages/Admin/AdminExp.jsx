import { useSelector, useDispatch } from "react-redux";

export default function AdminExp() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const { Experiences } = portfolioData;

  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        {Experiences.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl flex flex-col gap-6"
          >
            <h1 className="text-5xl">{item.period}</h1>
            <h2 className="text-3xl">{item.title}</h2>
            <h2 className="text-2xl">{item.company}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
