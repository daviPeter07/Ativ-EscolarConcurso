import Navbar from '../components/Navbar'

function About() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Sobre o Desenvolvedor</h1>
        <section>
          <h2>Informações do Desenvolvedor</h2>
          <div>
            <p><strong>Nome:</strong> Davi Peterson Matos Conde</p>
            <p><strong>Curso:</strong> Análise e Desenvolvimento de Sistemas</p>
            <p><strong>Instituição:</strong> Universidade do Norte - Uninorte</p>
          </div>
          
          <div>
            <h3>Apresentação</h3>
            <p>
              Desenvolvedor web com foco em tecnologias modernas como React, TypeScript 
              e desenvolvimento front-end. Atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade 
              do Norte, com interesse em criar soluções web eficientes e com boa experiência 
              do usuário.
            </p>
            <p>
              Este projeto foi desenvolvido como parte das atividades acadêmicas, 
              demonstrando habilidades em desenvolvimento de interfaces responsivas, 
              roteamento de páginas e organização de componentes React.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
