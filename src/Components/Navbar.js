import 'flowbite';
import '../Components/navbar.css'
function Navbar() {
    return (
    <div className=''>
    <nav className=''>
        <ul>
        <li className=''>
      <a href="/">Accueil</a>
        </li>
        <li className=''>
        <a href="/location">Voitures Louées</a>
        </li>
        <li className=''>
        <a href="/rdv">Prendre rendez-vous</a>
        </li>
        <li className=''>
       <a href="/contact"> Contact</a>
        </li>

        </ul>
    </nav>
</div>
    )
}
export default Navbar;