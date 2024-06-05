'use client'
import React from "react"
import logic from "@/logic"
import Grid from "./components/grid/Grid"



export default function Home(){




return(
  <div className='flex flex-col bg-gray-100 h-screen w-screen items-center justify-center'>
  <h1 className='text-6xl font-bold uppercase'>Wordle</h1>

  <Grid/>



  </div>

)  
}