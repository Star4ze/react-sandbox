import GeneralInfo from './GeneralInfo/GeneralInfo';
import './Info.css';
import OtherInfo from './OtherInfo/OtherInfo';

function Info(){
    return(
        <div className="info">
            <GeneralInfo/>
            <OtherInfo/>
        </div>
    );
}

export default Info;