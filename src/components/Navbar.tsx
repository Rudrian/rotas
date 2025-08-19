export default function Navbar() {
    return (
        <nav className="p-5 bg-neutral-700 flex justify-between items-center">
            <h2 className="text-red-700 text-2xl font-semibold">SENAI</h2>
            <ul className="flex justify-center items-center gap-5 text-white">
                <li><a href="/home">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contatos">Contatos</a></li>
                <li><a href="/">Principal</a></li>
            </ul>       
        </nav>
    );
}