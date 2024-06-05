import Row from "./Row";


export default function Grid(){
 return(
    <>
   
      {store.guesses.map((_, i)=>(
                <Guess word={store.word} guess={store.guesses[i]} isGuessed={i<store.currentGuess} />
            ))}
      
    </>
 )
}