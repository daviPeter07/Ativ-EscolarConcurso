import Navbar from '../components/Navbar'
import Card from '../components/Card'

function Concursos() {
  const cursos = [
    {
      image: 'https://via.placeholder.com/300x200?text=Curso+Policial',
      title: 'Preparatório Área Policial',
      description: 'Curso completo para concursos de Polícia Civil, Polícia Militar e Polícia Federal. Material atualizado e professores especializados.'
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Curso+Administrativo',
      title: 'Preparatório Área Administrativa',
      description: 'Preparação para cargos de Técnico e Analista Administrativo em diversos órgãos públicos. Foco em legislação e administração.'
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Curso+Fiscal',
      title: 'Preparatório Área Fiscal',
      description: 'Curso especializado para concursos fiscais, incluindo Receita Federal e Auditor Fiscal. Conteúdo completo de direito tributário.'
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Curso+Judiciario',
      title: 'Preparatório Área Judiciária',
      description: 'Preparação para cargos no Poder Judiciário, incluindo Técnico e Analista Judiciário. Material específico para cada tribunal.'
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Curso+Bancario',
      title: 'Preparatório Área Bancária',
      description: 'Curso focado em concursos bancários como Banco do Brasil, Caixa Econômica Federal e BACEN. Atualizado com as últimas provas.'
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Curso+Militar',
      title: 'Preparatório Área Militar',
      description: 'Preparação completa para concursos militares do Exército, Marinha e Aeronáutica. Inclui preparação física e intelectual.'
    }
  ]

  return (
    <div>
      <Navbar />
      <main>
        <h1>Nossos Cursos</h1>
        <div className="cursos-container">
          {cursos.map((curso, index) => (
            <Card
              key={index}
              image={curso.image}
              title={curso.title}
              description={curso.description}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Concursos

