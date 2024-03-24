# Projeto: Formação Kotlin Back-end Developer

Este é um projeto simples em Kotlin que demonstra a estrutura de uma formação educacional para desenvolvedores back-end, onde é possível cadastrar alunos, matriculá-los em uma formação específica e exibir informações dos alunos inscritos.

## Classes

### Nível

Um enum que define os diferentes níveis de formação disponíveis: BÁSICO, INTERMEDIÁRIO e AVANÇADO.

### ConteudoEducacional

Uma data class que representa um conteúdo educacional com título e descrição.

### Formacao

Uma classe que representa uma formação educacional. Cada formação possui um nome, um nível (definido pelo enum Nível) e uma lista de conteúdos educacionais. A classe também mantém uma lista de alunos inscritos.

### Aluno

Uma classe que representa um aluno com nome e CPF. Possui um método para exibir informações do aluno.

## Funcionalidades

- **Matricular Aluno:** A classe Formacao possui um método `matricular(aluno: Aluno)` que permite matricular um aluno na formação. O método adiciona o aluno à lista de inscritos e exibe uma mensagem confirmando a matrícula.
- **Exibir Alunos Inscritos:** O programa principal demonstra como criar uma lista de alunos, matriculá-los na formação e exibir informações dos alunos inscritos.
