import {Card} from "@/components/ui/card"
import Intro from "./Intro"
import GithubHeatmap from "./GithubHeatmap"
  
function MainCard() {
  return (
    <div >
        <Card className="rounded-sm  bg-zinc-900 border-zinc-800 border-2 text-col-yel" >
          <Intro/>
          <GithubHeatmap/>
        </Card>
    </div>
  )
}

export default MainCard