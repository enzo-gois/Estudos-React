import {useMemo} from 'react'

const CalculoPesado = ({numero}) => {
  const resultadoCalculoPesado = useMemo(() => {
    return operacaoPesada(numero)
  }, [numero])


  return (
    <div>
      Resultado: {resultadoCalculoPesado}
    </div>
  )
}

const operacaoPesada = (num) => {
  console.log("realizando calculo pesado")
  return num * 1000
}

export default CalculoPesado
