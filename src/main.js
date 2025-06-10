import './styles/main.scss';

document.getElementById('app').innerHTML = `
  <header class="header">
    <h1>Kaliop Poland</h1>
    <nav>
      <i class="mdi mdi-menu"></i>
    </nav>
  </header>
  
  <main>
    <section class="hero">
      <h2>Delivering digital value for people</h2>
      <p>Dostawca rozwiązań IT dla biznesu: 20 lat doświadczeń na rynku</p>
    </section>
    
    <section class="stats">
      <div class="stat-item">
        <span>403</span>
        <span>polubienia</span>
      </div>
      <div class="stat-item">
        <span>459</span>
        <span>obserwujący</span>
      </div>
    </section>
    
    <section class="contact">
      <h3>Kontakt</h3>
      <p>Re: Inova 198, Słupskie, Poland</p>
      <p>59 841 37 Hz</p>
      <a href="mailto:tkan@kaliop.pl">tkan@kaliop.pl</a>
      <a href="https://kaliop.pl">kaliop.pl</a>
    </section>
  </main>
  
  <footer>
    <p>© Kaliop Poland 2023</p>
  </footer>
`;