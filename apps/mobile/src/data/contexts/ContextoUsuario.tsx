'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { Usuario } from '@barba/core'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ContextoUsuarioProps {
    carregando: boolean
    usuario: Usuario | null
    entrar: (usuario: Usuario) => Promise<void>
    sair: () => void
}

const ContextoUsuario = createContext<ContextoUsuarioProps>({} as any)

export function ProvedorUsuario({ children }: any) {
    const { get, set } = useLocalStorage()
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    const carregarUsuario = useCallback(
        async function () {
            try {
                const usuarioLocal = await get('usuario')
                if (usuarioLocal) {
                    setUsuario(usuarioLocal)
                }
            } finally {
                setCarregando(false)
            }
        },
        [get]
    )

    async function entrar(usuario: Usuario) {
        setUsuario(usuario)
        await set('usuario', usuario)
    }

    function sair() {
        setUsuario(null)
        set('usuario', null)
    }

    useEffect(() => {
        carregarUsuario()
    }, [carregarUsuario])

    return (
        <ContextoUsuario.Provider
            value={{
                carregando,
                usuario,
                entrar,
                sair,
            }}
        >
            {children}
        </ContextoUsuario.Provider>
    )
}

export default ContextoUsuario
