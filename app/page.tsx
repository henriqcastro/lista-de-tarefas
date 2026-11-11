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
import { Plus, Menu, X, Check } from 'lucide-react';

const Home = () => {
  return (
   <main className = "w-full h-screen bg-gray-100 flex justify-center items-center">
     <Card className = "w-lg p-2">
        <div className = "flex gap-2">
               <Input placeholder = "Adicionar tarefa"/>
               <Button variant = "outline" className = "cursor-pointer"><Plus />Cadastrar</Button>
        </div>

      <Separator />

      <div  className = "flex gap-2">
        <Badge variant="outline" className="cursor-pointer"><Menu />Todos</Badge>
        <Badge variant="outline" className="cursor-pointer"><Check/>Concluídos</Badge>
        <Badge variant="outline" className="cursor-pointer"><X/>Não concluídos</Badge>
      </div>

    </Card>     

     </main>
  )
}

export default Home