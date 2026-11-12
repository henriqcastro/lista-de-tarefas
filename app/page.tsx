import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Plus, Menu, X, Check, SquarePen, Trash } from 'lucide-react';

const Home = () => {
  return (
   <main className = "w-full h-screen bg-gray-100 flex justify-center items-center">
     <Card className = "w-lg">
        <CardHeader className = "flex gap-2">
               <Input placeholder = "Adicionar tarefa"/>
               <Button variant = "default" className = "cursor-pointer"><Plus />Cadastrar</Button>
        </CardHeader>

      <CardContent>
        <Separator className ="mb-4"/>

        <div className = "flex gap-1">
          <Badge className="cursor-pointer"><Menu />Todos</Badge>
          <Badge className="cursor-pointer"><Check/>Concluídos</Badge>
          <Badge className="cursor-pointer"><X/>Não concluídos</Badge>
        </div>
    <div className = "mt-2 border-t">
      <div className = "h-12 flex justify-between items-center border-b">
        <div className = "w-1 h-full bg-green-300"></div>
            
          <p className = "flex-1 px-2">Estudar React</p>
          
          <div className = "flex items-center gap-2">
            <SquarePen size={16} className = "cursor-pointer"/>
            <Trash size={16} className = "cursor-pointer"/>
          </div>

       </div>    
      </div>

        </CardContent>

      </Card>     

     </main>
  )
}

export default Home