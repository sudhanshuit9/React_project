export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-black/30 backdrop-blur-md py-4 z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-blue-400">Sudhanshu</h1>

        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
           <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#summary" className="hover:text-blue-400">Summary</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          
        </ul>
      </div>
    </nav>
  );
}
