//  ---- ICONS ----
import SoftwareDevIcon from '../components/Icons/SoftwareDevIcon'
import CellPhoneIcon from '../components/Icons/CellPhoneIcon'
import ComputerIcon from '../components/Icons/ComputerIcon'

export default function CodingPage(props) {
    return (
        <div className="CodingPage">
            <main className="Page">
                <div className="Body">
                    <div className="CodingTopDiv">
                        <SoftwareDevIcon />
                        <h1 className="CodingTopText">Software Development</h1>
                        <p>High level overview of tech experience and offered services, etc</p>
                    </div>
                    <div className="CodingMainDiv">
                        <p className="CodingMainText">Coding Main Text</p>
                        {/* SOFTWARE DEV */}
                        <div className="Group">
                        <div className="GroupInner">
                        <div>
                        <h2 className="HomeMainText">Mobile Applications</h2>
                        <CellPhoneIcon />
                        </div>
                        <p className="GroupDescription">Description of Mobile based Projects, examples, etc</p>
                        </div>
                        </div>

                        {/* CAMERA WORK */}
                        <div className="Group">
                        <div className="GroupInner">
                        <p className="GroupDescription">Description of Web based Projects, examples, etc</p>
                        <div>
                        <h2 className="HomeMainText">Websites</h2>
                        <ComputerIcon />
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}