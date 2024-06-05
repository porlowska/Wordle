
import Tile from "./Tile"

export default function Row({word, guess, isGuessed}){

    // each world has 5 letters, by itterating through the array we can dynamically change the colours?
    
    return (
        <div className="grid grid-cols-5 gap-2 mb-2">
            {new Array(5).fill(0).map((_, i)=> {
                const bgColor = !isGuessed
                ?'bg-white'
                :guess[i] === word[i]
                ?'bg-green-400'
                :word.includes(guess[i])
                ?'bg-yellow-400'
                :'bg-white'

            return(
                <>
                <Tile bgColor={bgColor} letter={guess[i]}/> 
                </>
                )})}
        </div>
    )
}