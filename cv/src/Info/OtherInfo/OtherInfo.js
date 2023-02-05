import './OtherInfo.css'

function OtherInfo() {
    return (
        <div className="otherInfo">
            <section>
                <strong>Skills</strong>
                <div class="flex-row">
                    <ul>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>SQL</li>
                        <li>Firebase/Mongo DB</li>
                    </ul>
                    <ul>
                        <li>MERN</li>
                        <li>Flutter</li>
                        <li>Android</li>
                    </ul>
                </div>
            </section>
            <section>
                <strong>Languages</strong>
                <ul>
                    <li>Sinhala (Native)</li>
                    <li>English</li>
                </ul>
            </section>
            <section>
                <strong>Volunteer Experinence</strong>
                <ul>
                    <li>Editor in Leo Club of Kotelawala Defense University</li>
                </ul>
            </section>
        </div>
    )

}

export default OtherInfo;