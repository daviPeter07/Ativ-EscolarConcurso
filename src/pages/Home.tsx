import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section>
          <h1>Bem-vindo à Escola de Concursos</h1>
          <p>
            Somos uma escola especializada em preparação para concursos públicos, 
            com anos de experiência e uma equipe de professores altamente qualificados. 
            Nosso objetivo é preparar você para alcançar a aprovação nos melhores 
            concursos do país, oferecendo conteúdo atualizado, material didático de 
            qualidade e metodologia comprovada.
          </p>
          <p>
            Com foco em excelência e resultados, nossa escola já ajudou milhares de 
            alunos a conquistarem seus objetivos profissionais através da aprovação 
            em concursos públicos de diversas áreas.
          </p>
        </section>
        
        <section>
          <h2>Tipos de Concursos que Preparamos</h2>
          <ul>
            <li>Área Policial (Polícia Civil, Polícia Militar, Polícia Federal)</li>
            <li>Área Administrativa (Técnico e Analista)</li>
            <li>Área Fiscal (Receita Federal, Auditor Fiscal, Fiscal de Tributos)</li>
            <li>Área Judiciária (Técnico Judiciário, Analista Judiciário)</li>
            <li>Área Bancária (Banco do Brasil, Caixa Econômica Federal, BACEN)</li>
            <li>Área Militar (Exército, Marinha, Aeronáutica)</li>
            <li>Área de Saúde (Enfermagem, Medicina, Farmácia)</li>
            <li>Área de Educação (Professores, Pedagogos, Coordenadores)</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Home

