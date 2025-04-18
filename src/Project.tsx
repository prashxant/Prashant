import { Card } from "./components/ui/card"






const projects = [
  {
    name:"Mr-Habbit",
    description:"Habbit tracking using Heatmaps ",
    codebase:"https://github.com/prashxant/Mr-habbit",
    live:"https://mr-habbit.vercel.app/"
  },
  {
    name:"Planner-Al",
    description:"Planning trips using AI",
    codebase:"https://github.com/prashxant/Planner-Al",
    live:"https://planner-al.vercel.app/"
  },{
    name:"Scribe-AI",
    description:"Note making AI app",
    codebase:"https://github.com/prashxant/Scribe-AI",
    live:"https://github.com/prashxant/Scribe-AI"
  },{
    name:"Boogymen",
    description:"Hostel Delivery System",
    codebase:"https://github.com/prashxant/Boogymen-but-better",
    live:"https://boogymen.netlify.app/"
  },{
    name:"Aquafine",
    description:"Fish estimation using AI-ML", 
   codebase:"https://github.com/prashxant/Aquafine",
    live:"https://github.com/prashxant/Aquafine"
  },
]




function Project() {
   

    
  return (
   <div className="m-4 ">
    <span className="font-bold text-4xl">Projects</span>
    {projects.map(({ name, codebase, live,description },index)=>(
             <Card
             key={index}
             className="rounded-md bg-zinc-900 border-2 border-zinc-800 mt-2 text-col-yel p-4"
           >
             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
               <div>
                 <h2 className="font-bold text-xl">{name}</h2>
                 <p className="text-sm text-zinc-400 mt-1">{description || "No description provided."}</p>
               </div>
     
               <div className="mt-2 sm:mt-0 flex flex-col sm:items-end text-sm space-y-1">
                 {codebase ? (
                   <a
                     href={codebase}
                     className="text-blue-400 hover:underline"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     View Codebase
                   </a>
                 ) : (
                   <span className="text-zinc-500 italic">No codebase</span>
                 )}
     
                 {live ? (
                   <a
                     href={live}
                     className="text-green-400 hover:underline"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     Live Demo
                   </a>
                 ) : (
                   <span className="text-zinc-500 italic">No live link</span>
                 )}
               </div>
             </div>
           </Card>
    ))}
        

   </div>
  )
}

export default Project