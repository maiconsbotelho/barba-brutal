'use client'
import { usePathname, useRouter } from 'next/navigation'
import useUsuario from '@/data/hooks/useUsuario'

export default function ForcarUsuario(props: any) {
    const { carregando, usuario } = useUsuario()
    const caminho = usePathname()
    const router = useRouter()

    function redirecionarPara(url: string) {
        router.push(url)
        return <div className="flex justify-center items-center h-screen">Direcionando...</div>
    }

    if (!usuario?.email && carregando) return <div>Carregando...</div>
    if (!usuario?.email) return redirecionarPara(`/entrar?destino=${caminho}`)

    return props.children
}
