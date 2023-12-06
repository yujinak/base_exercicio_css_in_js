import { FormEvent, useState } from 'react'

import { Formulario, Campo } from './styles'

// tipagem
type Props = {
  aoPesquisar: (termo: string) => void
}

// define elemento com CSS
const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  // HTML
  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button>Pesquisar</button>
    </Formulario>
  )
}
export default FormVagas
