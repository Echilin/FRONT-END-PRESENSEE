// Dados mockados do Diário do Monitor.
// Quando a API existir, basta trocar estas funções por chamadas ao `services/api`
// (ex.: api.get("/diario/resumo") e api.get(`/alunos/${id}`)).

export const TIPOS_INTERVENCAO = [
  "Conversa Individual",
  "Contato com responsável",
  "Encaminhamento",
]

export const alunos = [
  {
    id: 1,
    nome: "Cirilo Santos",
    turma: "3º Ano A",
    status: "Em Acompanhamento",
    risco: 77,
    frequencia: 66,
    faltas: 16,
    matricula: "20240117",
    email: "cirilo.santos@email.com",
    responsavel: "Maria Santos",
    pendencias: ["Verificar frequência", "Entrar em contato com responsável"],
  },
  {
    id: 2,
    nome: "Gabriel Soares",
    turma: "1º Ano A",
    status: "Em Acompanhamento",
    risco: 58,
    frequencia: 78,
    faltas: 9,
    matricula: "20240232",
    email: "gabriel.soares@email.com",
    responsavel: "Carlos Soares",
    pendencias: ["Verificar frequência"],
  },
  {
    id: 3,
    nome: "Pedro Henrique",
    turma: "2º Ano B",
    status: "Em Acompanhamento",
    risco: 64,
    frequencia: 73,
    faltas: 12,
    matricula: "20240345",
    email: "pedro.henrique@email.com",
    responsavel: "Ana Henrique",
    pendencias: ["Entrar em contato com responsável"],
  },
  {
    id: 4,
    nome: "Miguel Augusto",
    turma: "3º Ano A",
    status: "Em Acompanhamento",
    risco: 71,
    frequencia: 70,
    faltas: 13,
    matricula: "20240456",
    email: "miguel.augusto@email.com",
    responsavel: "Paulo Augusto",
    pendencias: [],
  },
]

// Datas em ISO (AAAA-MM-DD). Mais recentes primeiro.
export const intervencoes = [
  { id: 1, alunoId: 1, tipo: "Conversa Individual", data: "2026-09-14", descricao: "Conversa sobre as faltas do último mês." },
  { id: 2, alunoId: 4, tipo: "Contato com responsável", data: "2026-09-12", descricao: "Responsável informado sobre o risco de evasão." },
  { id: 3, alunoId: 3, tipo: "Conversa Individual", data: "2026-09-10", descricao: "Aluno relatou dificuldade de deslocamento." },
  { id: 4, alunoId: 2, tipo: "Encaminhamento", data: "2026-09-08", descricao: "Encaminhado para reforço escolar." },
  { id: 5, alunoId: 4, tipo: "Conversa Individual", data: "2026-09-05", descricao: "Conversa sobre desempenho e motivação." },
  { id: 6, alunoId: 3, tipo: "Contato com responsável", data: "2026-09-03", descricao: "Ligação sem resposta; nova tentativa agendada." },
  { id: 7, alunoId: 1, tipo: "Contato com responsável", data: "2026-08-29", descricao: "Reunião com a mãe sobre a frequência." },
  { id: 8, alunoId: 2, tipo: "Conversa Individual", data: "2026-08-26", descricao: "Acompanhamento de rotina." },
  { id: 9, alunoId: 4, tipo: "Encaminhamento", data: "2026-08-22", descricao: "Encaminhado para o setor pedagógico." },
  { id: 10, alunoId: 3, tipo: "Conversa Individual", data: "2026-08-19", descricao: "Primeira conversa após as faltas seguidas." },
  { id: 11, alunoId: 1, tipo: "Conversa Individual", data: "2026-08-15", descricao: "Primeira conversa sobre as ausências." },
  { id: 12, alunoId: 2, tipo: "Contato com responsável", data: "2026-08-12", descricao: "Aviso sobre queda de frequência." },
  { id: 13, alunoId: 4, tipo: "Conversa Individual", data: "2026-08-08", descricao: "Registro inicial de acompanhamento." },
  { id: 14, alunoId: 3, tipo: "Encaminhamento", data: "2026-08-05", descricao: "Encaminhado para o serviço social." },
]

export const turmas = [
  { nome: "1º Ano A", alunos: 35, risco: 30 },
  { nome: "2º Ano B", alunos: 32, risco: 50 },
  { nome: "3º Ano A", alunos: 30, risco: 70 },
]

export const anotacoes = [
  { id: 1, data: "2026-09-14", texto: "Cirilo aceitou conversar sobre as faltas. Combinar retorno em duas semanas." },
  { id: 2, data: "2026-09-10", texto: "Pedro Henrique relatou problemas com o transporte." },
  { id: 3, data: "2026-09-05", texto: "Revisar a lista de pendências da turma 3º Ano A." },
]

export const resumoDiario = {
  riscoEvasaoGeral: 66,
  desempenhoMonitor: 66,
}


// ---------- helpers ----------

export function formatarData(iso) {
  const [ano, mes, dia] = iso.split("-")
  return `${dia}/${mes}/${ano}`
}

export function dataHoje() {
  const hoje = new Date()
  const mes = String(hoje.getMonth() + 1).padStart(2, "0")
  const dia = String(hoje.getDate()).padStart(2, "0")
  return `${hoje.getFullYear()}-${mes}-${dia}`
}

export function nivelRisco(percentual) {
  return percentual >= 70 ? "alto" : "medio"
}
