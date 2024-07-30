export default class AgendaUtils {
    private static minutos = [0, 15, 30, 45]

    static horariosDoDia() {
        return {
            manha: this.gerarHorarios([8, 9, 10, 11]),
            tarde: this.gerarHorarios([14, 15, 16, 17]),
            noite: this.gerarHorarios([18, 19, 20, 21]),
        }
    }

    private static gerarHorarios(horas: number[]) {
        return horas.reduce((horarios, hora) => {
            const todos = this.minutos.map((minuto) => {
                return `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}`
            })
            return horarios.concat(todos)
        }, [] as string[])
    }
}
