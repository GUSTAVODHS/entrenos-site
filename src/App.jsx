import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 min-h-screen">
        <nav className="bg-orange-400 p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">EntreNós</h1>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:underline">Início</Link>
            <Link to="/sobre" className="text-white hover:underline">Sobre</Link>
            <Link to="/servicos" className="text-white hover:underline">Serviços</Link>
            <Link to="/parceiros" className="text-white hover:underline">Parceiros</Link>
            <Link to="/contato" className="text-white hover:underline">Contato</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <motion.div className="p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h2 className="text-3xl font-bold mb-4">Bem-vindo à EntreNós</h2>
    <p className="text-lg">Conectando eventos a pessoas neurodivergentes.</p>
    <motion.img src="/img/inclusao.jpg" alt="Inclusão em eventos" className="mx-auto mt-6 rounded-2xl shadow-lg" initial={{ scale: 0.9 }} animate={{ scale: 1 }} />
  </motion.div>
);

const Sobre = () => (
  <div className="p-8 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
    <p className="mb-2">A EntreNós nasceu com a missão de tornar eventos mais acolhedores para pessoas com TDAH e TEA.</p>
    <p>Fundada por profissionais que vivenciam a neurodivergência de perto, criamos pontes entre inclusão e experiência de qualidade.</p>
  </div>
);

const Servicos = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">O que fazemos</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Acessibilidade sensorial (sons, luzes, zonas de respiro)</li>
      <li>Consultoria para eventos inclusivos</li>
      <li>Capacitação de equipes</li>
      <li>Curadoria de conteúdo para neurodivergentes</li>
      <li>Apoio a famílias e participantes</li>
    </ul>
  </div>
);

const Parceiros = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Nossos Parceiros</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-blue-100 rounded-xl text-center">Parceiro A</div>
      <div className="p-4 bg-yellow-100 rounded-xl text-center">Parceiro B</div>
    </div>
  </div>
);

const Contato = () => (
  <div className="p-8 max-w-xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Fale Conosco</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Seu nome" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Seu e-mail" className="w-full p-2 border rounded" />
      <textarea placeholder="Sua mensagem" className="w-full p-2 border rounded h-32"></textarea>
      <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">Enviar</button>
    </form>
  </div>
);

export default App;