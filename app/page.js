import FeedbackItem from "./components/FeedbackItem";

export default function Home() {
  return (
    <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-8">
        <h1 className="font-bold text-xl">Mrinal Pramanick</h1>
        <p className="text-opacity-90 text-slate-700">
          So today's thought of the day is "Give yourself some time so that you
          can work on yourself"{" "}
        </p>
      </div>
      <div className="bg-gray-100 px-8 py-4 text-right flex border-b-4 ">
        <div className="grow"></div>
        <div>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
            Make a suggestions
          </button>
        </div>
      </div>
      <div className="px-8">
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
      </div>
    </main>
  );
}
