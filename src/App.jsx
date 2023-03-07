import MainContent from './components/main-content';
import Sidebar from './components/sidebar';
import './styles/components/app.sass'

function App() {

  return (
    <div id="portfolio">
      <h1>Giovanna Almeida</h1>
      <Sidebar />
      <MainContent />
    </div>
    
  )
}

export default App;