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
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
                
const DeleteTask = () => {

    return (
        <Dialog>
        <DialogTrigger render = { <Button variant="outline" className = "border-transparent"/>}><Trash size={16} className ="cursor-pointer"/></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Excluir tarefa</DialogTitle>
            <DialogDescription>
                Tem certeza de que deseja continuar?
            </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            <DialogClose render = {<Button variant="outline">Cancelar</Button>}/>
            <Button variant = "default" type="submit">Continuar</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    )
}

export default DeleteTask
    