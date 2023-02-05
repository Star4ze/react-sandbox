import './GeneralInfo.css'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Certification from './Components/Certification'

function GeneralInfo() {
    return (
        <div className ="GeneralInfo">
            <Education />
            <Projects />
            <Certification />
        </div>
    )
}

export default GeneralInfo;