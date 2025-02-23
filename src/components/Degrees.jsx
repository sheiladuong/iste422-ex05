import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
  } from './ui/accordion.jsx'
import {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

const Degrees = () => {
    const [degreesObj, setDegreesObj] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        getData('degrees/')
            .then((json) => {
                setDegreesObj(json);
                setLoaded(true);
            })
    }, [] );

    if(!loaded) return <><h1>Degrees loading...</h1></>
    
    return (
        <div id="degrees">
        <h1 className="degrees">Degrees</h1>

        {/* Undergraduate degrees */}
        <h1 className="degree-type">Undergraduate</h1>
        {/* Loop through undergraduate degrees and put in ChakraUI Accordion */}
        <AccordionRoot variant="enclosed" multiple defaultValue={[]}>
            <div className="accordion-container">
                {degreesObj.undergraduate.map((ug) =>
                    <AccordionItem key={ug.degreeName} value={ug.degreeName}>
                        <AccordionItemTrigger>
                            <div className="degrees-title">
                                {ug.title}<span style={{textTransform:"uppercase"}}> &#40;{ug.degreeName}&#41;</span>
                            </div>
                        </AccordionItemTrigger>
                        <AccordionItemContent>
                            <p>{ug.description}</p>
                            <br/>
                            <p className="concentration-title">Concentrations:</p>
                            {ug.concentrations.map((concentration) => (
                                <>
                                {concentration}
                                <br />
                                </>
                            ))}
                        </AccordionItemContent>
                    </AccordionItem>
                )}
            </div>
        </AccordionRoot>

        {/* Graduate degrees and certificates */}
        <h1 className="degree-type">Graduate</h1>
        {/* Loop through graduate degrees and put in ChakraUI Accordion */}
        <AccordionRoot variant="enclosed" multiple defaultValue={[]}>
            <div className="accordion-container">
                {degreesObj.graduate.slice(0,3).map((g) =>
                    <AccordionItem key={g.degreeName} value={g.degreeName}>
                        <AccordionItemTrigger>
                            <div className="degrees-title">
                                {g.title}<span style={{textTransform:"uppercase"}}> &#40;{g.degreeName}&#41;</span>
                            </div>
                        </AccordionItemTrigger>
                        <AccordionItemContent>
                            <p>{g.description}</p>
                            <br/>
                            <p className="concentration-title">Concentrations:</p>
                            {g.concentrations.map((concentration) => (
                                <>
                                {concentration}
                                <br />
                                </>
                            ))}                    
                        </AccordionItemContent>
                    </AccordionItem>
                )}
                {degreesObj.graduate.slice(3,4).map((g) =>
                    <AccordionItem key={g.degreeName} value={g.degreeName}>
                        <AccordionItemTrigger>
                            <span className="degrees-title" style={{textTransform:"capitalize"}}>{g.degreeName}</span>
                        </AccordionItemTrigger>
                        <AccordionItemContent>
                            {g.availableCertificates.map((certificate) => (
                                <>
                                    {certificate}
                                    <br />
                                </>
                            ))}
                        </AccordionItemContent>
                    </AccordionItem>
                )}
            </div>
        </AccordionRoot>
        </div>
    );
}

export default Degrees