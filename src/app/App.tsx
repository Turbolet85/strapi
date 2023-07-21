import Hero from '../features/Hero/Hero';
import Navbar from '../features/Navbar/Navbar';
import Sidebar from '../features/Sidebar/Sidebar';
import Submenu from '../features/Submenu/Submenu';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};

export default App;
