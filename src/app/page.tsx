import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { List, Plus, Check, Circle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-amber-200">
      <Card className="flex h-50 w-150 flex-col items-center justify-center bg-gray-100 p-3">
        <h1>Gerencie suas tarefas</h1>
        <div className="flex flex-row gap-1.5">
          <Input type="text" placeholder="Adicionar tarefa" className="w-96" />
          <Button variant="default" className="w-32 cursor-pointer">
            <Plus />
            Cadastrar
          </Button>
        </div>
        <Separator />
        <CardContent className="flex w-full flex-row pl-7">
          <div className="flex gap-1">
            <Badge className="cursor-pointer">
              <List /> Todas
            </Badge>
            <Badge className="cursor-pointer">
              <Circle /> Não finalizadas
            </Badge>
            <Badge className="cursor-pointer">
              <Check /> Concluidas
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
