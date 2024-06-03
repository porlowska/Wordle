
import Guess from './components/Guess';
import Qwerty from './components/Qwerty';
import PuzzleStore from '@/stores/PuzzleStore';

export default function Home() {
  return (
    <div>
      <h1>Wordle</h1>
      <Guess/>
      <h2>won/loss</h2>
      <Qwerty/>
    </div>
  );
}
