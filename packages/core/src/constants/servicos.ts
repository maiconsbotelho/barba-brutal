import Servico from '../servico/Servico'

const servicos: Servico[] = [
    {
        id: 1,
        nome: 'Corte Viking',
        descricao:
            'Venha receber um corte de Viking, com lâmina na pele e estilo de guerreiro. Saia pronto para enfrentar qualquer batalha com um visual que impõe respeito.',
        preco: 55,
        qtdeSlots: 3,
        imagemURL: '/servicos/corte-de-cabelo.jpg',
    },
    {
        id: 2,
        nome: 'Barba de Lenhador',
        descricao:
            'Venha dar um trato na sua barba de lenhador, com aparo preciso e estilo de macho raiz. Saia com uma barba que impõe respeito e faz tremer até as árvores.',
        preco: 45,
        qtdeSlots: 2,
        imagemURL: '/servicos/corte-de-barba.jpg',
    },
    {
        id: 3,
        nome: 'Garras Brutais',
        descricao:
            'Venha transformar suas patas de urso em garras de lobo. Nosso serviço de Manicure & Pedicure para homens é tão bruto quanto você, mas com um toque de classe.',
        preco: 40,
        qtdeSlots: 2,
        imagemURL: '/servicos/manicure-pedicure.jpg',
    },
    {
        id: 4,
        nome: 'Combo Alpha',
        descricao:
            'Nosso combo "Alpha" inclui um corte de cabelo de Viking, uma barba de lenhador e manicure & pedicure de gladiador. Saia pronto para enfrentar qualquer batalha com estilo e unhas afiadas.',
        preco: 95,
        qtdeSlots: 2,
        imagemURL: '/servicos/combo.jpg',
    },
    {
        id: 5,
        nome: 'Pequeno Caçador',
        descricao:
            'Transforme seu pequeno aventureiro em um mini caçador, com um corte cheio de atitude e estilo. Cabelo afiado como uma guitarra e maneiro como uma Harley.',
        preco: 60,
        qtdeSlots: 2,
        imagemURL: '/servicos/corte-infantil.jpg',
    },
    {
        id: 6,
        nome: 'Noivo Raiz',
        descricao:
            'Prepare-se para o grande dia com um tratamento digno de um verdadeiro guerreiro da estrada. Corte de cabelo afiado, barba de lenhador e manicure de motoqueiro, tudo enquanto você relaxa ao som de rock pesado.',
        preco: 189,
        qtdeSlots: 2,
        imagemURL: '/servicos/dia-de-noivo.jpg',
    },
]

export default servicos
