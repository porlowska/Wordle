export default function Qwerty(){
    const keys = ["qwertyuiop","asdfghjkl","zxcvbnm"]
    return (
        <div>
            {keys.map((row)=>(
                <div className="flex justify-center">
                    {row.split('').map((char)=>{
                        
                        return(
                        <div className={`bg-white flex w-9 h-11 rounded-md items-center justify-center uppercase m-0.5 font-medium`}>{char}</div>
                    )})}
                </div>
            ))}
        </div>
    )
}