interface BotoesProps{
  inc: (valor: number) => void
  dec: (valor: number) => void
}

export default function Botoes(props: BotoesProps){
  return(
    <div className="flex justify-between gap-2 pt-2">
      <button className="flex-1 botao" onClick={() => props.dec(10)}>
        -10
      </button>
      <button className="flex botao" onClick={() => props.inc(13)}>
        +13
      </button>
    </div>
  )
}