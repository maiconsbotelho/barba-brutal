"use client";
import Logo from "@/components/shared/Logo";
import useUsuario from "@/data/hooks/useUsuario";
import { TelefoneUtils } from "@barba/core";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FormUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const { usuario, entrar } = useUsuario();
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (usuario?.email) {
      const dest = params.get("destino") as string;
      router.push(dest ? dest : "/");
    }
  }, [usuario, router, params]);

  return (
    <div className="flex justify-center items-center h-screen relative">
      <Image
        src="/banners/principal.webp"
        fill
        alt="Barbearia"
        className="object-cover"
      />
      <div
        className="
                    flex flex-col justify-center items-center gap-10
                    absolute top-0 left-0 w-full h-full
                    bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30
                "
      >
        <Logo />
        <div className="flex flex-col w-4/5 sm:w-1/5 gap-5">
          <div className="flex flex-col gap-4 rounded">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              className="bg-zinc-900 px-4 py-2 rounded"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="bg-zinc-900 px-4 py-2 rounded"
            />
            <input
              type="tel"
              value={TelefoneUtils.formatar(telefone)}
              onChange={(s) =>
                setTelefone(TelefoneUtils.desformatar(s.target.value))
              }
              placeholder="Telefone"
              className="bg-zinc-900 px-4 py-2 rounded"
            />
            <div className="flex gap-5">
              <button
                onClick={() => entrar({ nome, email, telefone })}
                className="button bg-green-600 flex-1"
              >
                Entrar
              </button>
              <button
                onClick={() => {
                  router.push("/");
                }}
                className="button flex-1"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
