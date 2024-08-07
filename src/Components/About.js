import Barsik from './img/Barsik.jpg'

function About() {
    return(
        <div className='container-about'>
            <div className='heading'>
                <h2>ABOUT US</h2>
            </div>
            <div className='barsik'>
                <div className='about'>
                    <p>"LET'S PURR TOGETHER!" <br></br> Barsik, the Founder</p>
                </div>
                <div >
                    <img src={Barsik}  className='barsik-img'alt='pic' />
                </div>
            </div>
            <div className='about_text'>
                <p>Are you looking for a place where you can buy boat equipment and watch funny pictures of kittens at the same time? Do you want to have fun and have a good time while ordering the right products? Then welcome to the world's first MEW online store completely run by cats. We were founded in 2023 and already have 2 employees. This is a family business. Today MEW owns 10 sq. m of office and warehouse space and ships about 100 purr-sells daily. We are about to win an AWARD for the best cat-focused online yacht and boat equipment store and can proudly boast that we are the largest sailing and powerboat equipment delivery company in Europe, operated by cats for 2 languages! And we're just getting started!</p>
            </div>
        </div>
    )
}

export default About;