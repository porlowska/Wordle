export default function Guess({ word, guess, isGuessed }) {
  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      {new Array(5).fill(0).map((_, i) => {
        const bgColor = !isGuessed
          ? "bg-white"
          : guess[i] === word[i]
          ? "bg-green-400"
          : word.includes(guess[i])
          ? "bg-yellow-400"
          : "bg-white";

        return (
          <div
            className={`${bgColor} w-10 h-10 border border-gray-600 uppercase flex items-center justify-center text-xl`}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );
}
