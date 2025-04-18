import {Card} from "@/components/ui/card"
import Intro from "./Intro"
import GithubHeatmap from "./GithubHeatmap"
import Project from "./Project"
import Footer from "./Footer"
  
function MainCard() {
  return (
    <div >
        <Card className="rounded-sm mt-2 bg-zinc-900 border-zinc-800 border-2 text-col-yel" >
          <Intro/>
          <GithubHeatmap />
          <Project />
          <p className="font-bold ml-5  text-4xl">Blogs</p>
          <p className="ml-5"> Trying to add em soon . . . </p>
          

          <Footer/>
        </Card>
    </div>
  )
}

export default MainCard