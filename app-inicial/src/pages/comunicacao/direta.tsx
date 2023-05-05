import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta(){
  return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-10 text-5xl">Comunicação Direta</h1>
      <Avo nome="pedro" sobrenome="germano" />
    </div>
  )
}