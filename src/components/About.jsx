import {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

const About = () => {
    const[aboutObj, setAboutObj] = useState();
    const[aboutLoaded, setAboutLoaded] = useState(false);

    useEffect( () => {
        getData('about/').
            then((json) => {
            setAboutObj(json);
            setAboutLoaded(true);
            })
    }, [] );

    if(!aboutLoaded) return <><h1>About Loading...</h1></>
    
    return(
        <div id="about">
        <div className="about-title-background">
            <div className="about-title-container">
                <h2 className="about-title">{aboutObj.title}</h2>
            </div>
        </div>
        <div className="about-desc-container">
            <p className="about-desc">{aboutObj.description}</p>
        </div>
        <div className="about-quote-container">
            <div className="about-quote-container">
                <p className="about-quote">{aboutObj.quote}</p>
                <p className="about-quote-author">--{aboutObj.quoteAuthor}</p>
            </div>
        </div>
        </div>
    );
}

export default About