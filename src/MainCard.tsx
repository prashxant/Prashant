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
          <Footer/>
        </Card>
    </div>
  )
}

export default MainCard