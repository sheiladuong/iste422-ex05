import { Table, 
         TableBody, 
         TableCell,
         TableContainer, 
         TableHead, 
         TableRow, 
         TablePagination, } from '@mui/material/';
import {useState, useEffect} from 'react'
import getData from '../utils/getData.js'

const Employment = () => {
    const [employObj, setEmployObj] = useState();
    const [loaded, setLoaded] = useState(false);
    const [coopPage, setCoopPage] = useState(0);
    const [rowsPerCoopPage, setRowsPerCoopPage] = useState(5);
    const [employPage, setEmployPage] = useState(0);
    const [rowsPerEmployPage, setRowsPerEmployPage] = useState(5);


    useEffect( () => {
        getData('employment/')
            .then((json) => {
                setEmployObj(json);
                setLoaded(true);
            })
    }, [] );

    if(!loaded) return <><h1>Employment loading...</h1></>

    const handleCoopChangePage = (event, newPage) => {
        setCoopPage(newPage);
    };
    
    const handleCoopChangeRowsPerPage = (event) => {
        setRowsPerCoopPage(parseInt(event.target.value, 10));
        setCoopPage(0);
    };
    
    const coopTable = employObj.coopTable || [];
    const currentCoopData = coopTable.coopInformation ? coopTable.coopInformation.slice(coopPage * rowsPerCoopPage, coopPage * rowsPerCoopPage + rowsPerCoopPage) : [];
      
    
    const handleEmployChangePage = (event, newPage) => {
        setEmployPage(newPage);
    };
    
    const handleEmployChangeRowsPerPage = (event) => {
        setRowsPerEmployPage(parseInt(event.target.value, 10));
        setEmployPage(0);
    };
    
    const employTable = employObj.employmentTable || [];
    const currentEmployData = employTable.professionalEmploymentInformation ? employTable.professionalEmploymentInformation.slice(employPage * rowsPerEmployPage, employPage * rowsPerEmployPage + rowsPerEmployPage) : [];


    return (
        <div id="employment">
        {/* EMPLOYMENT INTRO AND CONTENT */}
        <h1 className="employment">Employment</h1>
        <h2 className="employ-intro">{employObj.introduction.title}</h2>
        <div className="employ-content">
            {/* Loop */}
            {employObj.introduction.content.map((e) =>
                <div key={e.title}>
                    <h2 className="employ-content-title">{e.title}</h2>
                    <p className="employ-content-desc">{e.description}</p>
                </div>
            )}
        </div>

        {/* DEGREE STATISTICS */}
        <div className="degree-stats-container">
            <h2 className="degree-stats-title">{employObj.degreeStatistics.title}</h2>
            <div className="degree-stats-row">
                {employObj.degreeStatistics.statistics.map((stat) =>
                    <div className="degree-stats-col" key={stat.value}>
                        <h3 className="degree-stats-value">{stat.value}</h3>
                        <p className="degree-stats-desc">{stat.description}</p>
                    </div>
                )}
            </div>
        </div>

        {/* EMPLOYERS and CAREERS*/}
        <div className="employers-careers-container">
            <div className="employers-container">
                <h2 className="employers-title">{employObj.employers.title}</h2>
                <div className="employers-names-container">
                    {employObj.employers.employerNames.map((employer) =>
                        <p className="employers-names">{employer}</p>
                    )}
                </div>
            </div>
            <div className="careers-container">
                    <h2 className="careers-title">{employObj.careers.title}</h2>
                    <div className="careers-names-container">
                        {employObj.careers.careerNames.map((career =>
                            <p className="careers-names">{career}</p>
                        ))}
                    </div>
            </div>
        </div>

        {/* COOP TABLE */}
        <h2 className="coopTable-title">Co-op Table</h2>
        <div className="center-table">
        <TableContainer sx={{ width: '90%', maxHeight: '400px', overflowY: 'auto', border: '1px solid #CCCCCC' }}>
            <Table>
                <TableHead>
                    <TableRow sx={{ position: 'sticky', top: 0, backgroundColor: '#101012', zIndex: 1 }}>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>Employer</TableCell>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>Degree</TableCell>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>City</TableCell>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>Term</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentCoopData.map((coop) =>
                        <TableRow key={coop.employer}>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{coop.employer}</p>
                            </TableCell>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{coop.degree}</p>
                            </TableCell>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{coop.city}</p>
                            </TableCell>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{coop.term}</p>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div style={{ position: 'sticky', bottom: 0, backgroundColor: '#101012', zIndex: 2 }}>
                <TablePagination 
                    sx={{ color: '#FFFFFF', width: '100%', margin: '0 auto' }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={employObj.coopTable.coopInformation.length}
                    rowsPerPage={rowsPerCoopPage}
                    page={coopPage}
                    onPageChange={handleCoopChangePage}
                    onRowsPerPageChange={handleCoopChangeRowsPerPage}
                />
            </div>
        </TableContainer>
        </div>

        {/* EMPLOYMENT TABLE */}
        <h2 className="employTable-title">Employment Table</h2>
        <div className="center-table">
        <TableContainer sx={{ width: '90%', maxHeight: '400px', overflowY: 'auto', border: '1px solid #CCCCCC' }}>
            <Table>
                <TableHead>
                    <TableRow sx={{ position: 'sticky', top: 0, backgroundColor: '#101012', zIndex: 1 }}>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>Employer</TableCell>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>Degree</TableCell>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>City</TableCell>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>Title</TableCell>
                        <TableCell sx={{ color: '#FFFFFF', fontSize: '1.1rem'}}>Start Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentEmployData.map((employ) =>
                        <TableRow key={employ.employer}>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{employ.employer}</p>
                            </TableCell>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{employ.degree}</p>
                            </TableCell>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{employ.city}</p>
                            </TableCell>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{employ.title}</p>
                            </TableCell>
                            <TableCell sx={{ color: '#FFFFFF', fontSize: '0.8rem' }}>
                                <p>{employ.startDate}</p>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div style={{ position: 'sticky', bottom: 0, backgroundColor: '#101012', zIndex: 2 }}>
                <TablePagination 
                    sx={{ color: '#FFFFFF', width: '100%', margin: '0 auto' }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={employObj.employmentTable.professionalEmploymentInformation.length}
                    rowsPerPage={rowsPerEmployPage}
                    page={employPage}
                    onPageChange={handleEmployChangePage}
                    onRowsPerPageChange={handleEmployChangeRowsPerPage}
                />
            </div>
        </TableContainer>
        </div>
        </div>
    );
}

export default Employment