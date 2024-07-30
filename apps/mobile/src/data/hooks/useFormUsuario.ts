import { useState } from "react"
import useUsuario from "./useUsuario"

export default function useFormUsuario() {
    const { entrar } = useUsuario()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [errors, setErrors] = useState({ nome: '', email: '', telefone: '' })

    function validate() {
        let errors: any = {}

        if (!nome) {
            errors.nome = 'Nome é obrigatório'
        }
        if (!email) {
            errors.email = 'E-mail é obrigatório'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'E-mail inválido'
        }
        if (!telefone) {
            errors.telefone = 'Telefone é obrigatório'
        } else if (!/^\d{10,11}$/.test(telefone)) {
            errors.telefone = 'Telefone deve ter 10 ou 11 dígitos'
        }

        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    async function cadastrar() {
        if (validate()) {
            await entrar({ nome, email, telefone })
        }
    }

    return {
        nome,
        setNome,
        email,
        setEmail,
        telefone,
        setTelefone,
        errors,
        cadastrar,
    }
}