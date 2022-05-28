import './Footer.css';


export default function Footer(props) {
    return (
        <footer>
            <p className='FooterText'>Copyright &copy; Tyler Farhner {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
}