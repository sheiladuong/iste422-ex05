import { Tabs } from "@chakra-ui/react"
import PeopleGroup from './PeopleGroup.jsx'
import {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

const People = () => {
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        getData('people/')
            .then((json) => {
                setPeopleObj(json);
                setLoaded(true);
            })
    }, [] );

    if(!loaded) return <><h1>People loading...</h1></>
    
    return (
        <div id="people">
        <h1 className="people">{peopleObj.title}</h1>
        
            <Tabs.Root defaultValue="Faculty" variant="subtle">
                <Tabs.List>
                    <Tabs.Trigger value="Faculty">Faculty</Tabs.Trigger>
                </Tabs.List>
                <Tabs.List>
                    <Tabs.Trigger value="Staff">Staff</Tabs.Trigger>
                </Tabs.List>
                <div className="people-tabs">
                <Tabs.Content value="Faculty">
                    <PeopleGroup title="Faculty" data={peopleObj.faculty}/>
                </Tabs.Content>
                <Tabs.Content value="Staff">
                    <PeopleGroup title="Staff" data={peopleObj.staff}/>
                </Tabs.Content>
                </div>
            </Tabs.Root>
        </div>
    );
}

export default People