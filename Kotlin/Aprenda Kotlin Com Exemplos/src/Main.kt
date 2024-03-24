enum class Nivel {BASICO, INTERMEDIARIO, DIFICIl}

data class ConteudoEducacional(val titulo: String, val descricao: String)

data class Formacao(val nome: String, val nivel: Nivel, val conteudos: List<ConteudoEducacional>) {
    val inscritos = mutableListOf<Aluno>()

    fun matricular(aluno: Aluno) {
        inscritos.add(aluno)
        println("O aluno ${aluno.nome} proprientário do cpf ${aluno.cpf} foi matriculado na formação ${this.nome}")
    }
}

class Aluno(val nome: String, val cpf: String) {
    fun mostrarInfo(): String {
        return "Aluno: ${this.nome} | CPF: ${this.cpf}"
    }
}


fun main() {
    val listaDeConteudos = mutableListOf<ConteudoEducacional>()
    listaDeConteudos.add(ConteudoEducacional("Agilidade", "Princípios de Agilidade e Desenvolvimento Colaborativo"))
    listaDeConteudos.add(ConteudoEducacional("Documentação", "Aprendendo Kotlin na Prática em Sua Documentação Oficial"))
    listaDeConteudos.add(ConteudoEducacional("Lógica de Programação", "Praticando Sua Lógica de Programação com Kotlin"))
    listaDeConteudos.add(ConteudoEducacional("Padrões de Projeto", "Explorando Padrões de Projetos em Kotlin"))
    listaDeConteudos.add(ConteudoEducacional("Banco de Dados", "Entendendo Banco de Dados SQL e No SQL"))
    listaDeConteudos.add(ConteudoEducacional("Spring Boot", "Kotlin no Backend com Spring Boot 3"))

    val formacao = Formacao("Formação Kotlin Back-end Developer", Nivel.BASICO, listaDeConteudos)

    val listaAlunos = mutableListOf<Aluno>()
    listaAlunos.add(Aluno("João", "123.456.789-00"))
    listaAlunos.add(Aluno("Maria", "987.654.321-00"))
    listaAlunos.add(Aluno("Pedro", "111.222.333-44"))

    for (aluno in listaAlunos) {
        formacao.matricular(aluno)
    }

    for (alunoInscrito in formacao.inscritos) {
        println(alunoInscrito.mostrarInfo())
    }
}