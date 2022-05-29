// ---- ICONS -----
import CameraWorkIcon from "../components/Icons/CameraWorkIcon"
import PhotoIcon from "../components/Icons/PhotoIcon"

export default function CameraWorkPage(props) {
    return (
        <div className="CameraWorkPage">
            <main className="Page">
                <div className="Body">
                    <div className="CameraTopDiv">
                        <CameraWorkIcon />
                        <h1 className="CameraTopText">Camera Work</h1>
                        <p className="CameraTopDescription">High level overview of camera experience and offered services, etc</p>
                    </div>
                    <div className="CameraMainDiv">
                        {/* SOFTWARE DEV */}
                        <div className="Group">
                        <h1 className="HomeMainText">Software Development</h1>
                        <div className="GroupInner">
                        <PhotoIcon />
                        <p className="GroupDescription">Little blurb here about services pertaining to this category</p>
                        </div>
                        </div>

                        {/* CAMERA WORK */}
                        <div className="Group">
                        <h1 className="HomeMainText">Camera Work</h1>
                        <div className="GroupInner">
                        <p className="GroupDescription">Little blurb here about services pertaining to this category</p>
                        <PhotoIcon />
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}