'use client'
import { observer, useLocalObservable } from 'mobx-react-lite';
import Guess from './components/Guess';
import Qwerty from './components/Qwerty';
import PuzzleStore from '@/stores/PuzzleStore';


export default observer(function Home() {
  
  return (
    <div className='flex flex-col bg-gray-100 h-screen w-screen items-center justify-center'>
      <h1 className='text-6xl font-bold uppercase'>Wordle</h1>
      {new Array(5).fill(0).map((_, i)=>(
                <Guess word={"test"} guess={"guess"} isGuessed={true} />
            ))}
      <Qwerty/>
    </div>
  );
})
