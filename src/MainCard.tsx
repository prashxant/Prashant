import {Card, CardDescription,CardContent, CardHeader, CardTitle, CardFooter} from "@/components/ui/card"

  
function MainCard() {
  return (
    <div >
        <Card className="rounded-sm  bg-zinc-900 border-zinc-800 border-2 text-col-yel" >
          <CardHeader>
            <CardTitle>Prashant Sharma </CardTitle>
            <CardDescription>Trying to understand why tech is do facinating</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
           <CardFooter>
            <p>Card Footer</p>
           </CardFooter>
        </Card>
    </div>
  )
}

export default MainCard