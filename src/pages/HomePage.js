import SoftwareDevIcon from "../components/Icons/SoftwareDevIcon"
import CameraWorkIcon from "../components/Icons/CameraWorkIcon"
import ConsultingIcon from "../components/Icons/ConsultingIcon"

export default function HomePage(props) {
    return (
        <div className="HomePage">
            <main className="Page">

                {/* BODY */}
                <div className="Body">
                    {/* TOP DIV */}
                    <div className="HomeTopDiv">
                        <h1>Creative Technical Solutions</h1>
                        <p className="HomeTopText">Personalized Web/Mobile Development, Business Media, & Consulting etc etc fancy little blurb describing the biz </p>
                    </div>

                    {/* MAIN DIV */}
                    <div className="HomeMainDiv">
                        {/* SOFTWARE DEV */}
                        <div className="Group">
                        <h1 className="HomeMainText">Software Development</h1>
                        <div className="GroupInner">
                        <SoftwareDevIcon />
                        <p className="GroupDescription">Little blurb here about services pertaining to this category</p>
                        </div>
                        </div>

                        {/* CAMERA WORK */}
                        <div className="Group">
                        <h1 className="HomeMainText">Camera Work</h1>
                        <div className="GroupInner">
                        <p className="GroupDescription">Little blurb here about services pertaining to this category</p>
                        <CameraWorkIcon />
                        </div>
                        </div>

                        {/* CONSULTING */}
                        <div className="Group">
                        <h1 className="HomeMainText">Technical Consulting</h1>
                        <div className="GroupInner">
                        <ConsultingIcon />
                        <p className="GroupDescription">Little blurb here about services pertaining to this category</p>
                        </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}