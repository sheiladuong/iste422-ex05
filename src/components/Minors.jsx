import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
  } from './ui/accordion.jsx'
import {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

const Minors = () => {
    const [minorsObj, setMinorsObj] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        getData('minors/')
            .then((json) => {
                setMinorsObj(json);
                setLoaded(true);
            })
    }, [] );

    if(!loaded) return <><h1>Minors loading...</h1></>
    
    return (
        <div id="minors">
        {/* Minors */}
        <div className="minors-list">
            <h1 className="minors">Minors</h1>
            {/* Loop through minors and put in ChakraUI Accordion */}
            <AccordionRoot variant="enclosed" multiple defaultValue={[]}>
                <div className="accordion-container">
                    {minorsObj.UgMinors.map((ugm) =>
                        <AccordionItem key={ugm.name} value={ugm.name}>
                            <AccordionItemTrigger><p className="minors-title">{ugm.title}</p></AccordionItemTrigger>
                            <AccordionItemContent>
                                <p>{ugm.description}</p>
                                <br/>
                                <p className="minors-courses">Courses:</p>
                                {ugm.courses.map((course) => (
                                    <>
                                    {course}
                                    <br />
                                    </>
                                ))}
                            </AccordionItemContent>
                        </AccordionItem>
                    )}
                </div>
            </AccordionRoot>
        </div>
        </div>
    );
}

export default Minors