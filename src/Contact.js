import telephone from './telephone.png';
import email from './email.png';
import location from './location.png';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import ContactForm from './ContactForm';



function Contact() {
    return(
        <div>
            <div className='heading'>
                <h1>CONTACT</h1>
            </div>
            <div className='container'>
                <div> 
                    <h3>Address: Bozburun, Yeşilova Mah., 237 sokak, Bük Mevki No 22,<br></br> 48710 Marmaris/Muğla, DSV Yatcilik, SY Capkin</h3>
                <div className='contact'>
                    <img src={telephone} width='40px' height='40px' alt='icon'/>
                    <h3>Phone: +90507999999</h3>
                </div>
                <div className='contact'>
                    <img src={email} width='40px' height='40px' alt='icon'/>
                    <h3>Email: sy_capkin@gmail.com</h3>
                </div>
                <div className='contact'>
                    <img src={location} width='40px' height='40px' alt='icon'/>
                    <h3>Location</h3>
                </div>
                <YMaps className='map_container'>
                    <Map defaultState={{ center: [36.67599, 28.06077], zoom: 10 }} />
                </YMaps>
            </div>
                <div>
                    <ContactForm />
                </div>
            </div>
            
        </div>
    )
}

export default Contact;