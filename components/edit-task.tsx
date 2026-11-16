import { 
  Dialog, 
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose

} from './ui/dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'

import { SquarePen } from 'lucide-react'

const EditTask = () => {
    return (

        <Dialog>
            
            <DialogTrigger render = { <Button variant="outline" className = "border-transparent"/>}>
                <SquarePen size={16} className ="cursor-pointer"/></DialogTrigger>
            
            <DialogContent>
                
                <DialogHeader>
                    <DialogTitle>Renomear</DialogTitle>
                    <Input className = "mt-2" placeholder = "Nova Tarefa"/></DialogHeader>
                
                <DialogFooter>
                    <DialogClose render = {<Button variant="outline">Cancelar</Button>}/>
                    <Button variant = "default" type="submit">Renomear</Button></DialogFooter>
            
            </DialogContent>

        </Dialog>
    )    
}

export default EditTask
