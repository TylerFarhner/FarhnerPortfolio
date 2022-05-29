// ---- ICONS ----
import ConsultingIcon from '../components/Icons/ConsultingIcon'
import ToolsIcon from '../components/Icons/ToolsIcon'

export default function ConsultingPage(props) {
    return (
        <div className="ConsultingPage">
            <main className="Page">
                <div className="Body">
                    <div className="ConsultingTopDiv">
                        <ConsultingIcon />
                        <h1 className="ConsultingTopText">Technical Consulting</h1>
                        <p>Description of consulting solutions for SBO’s looking to incorporate media, marketing, or tech into their business</p>
                    </div>
                    <div className="ConsultingMainDiv">
                        {/* SOFTWARE DEV */}
                        <div className="Group">
                        <div className="GroupInner">
                        <div>
                        <h2 className="HomeMainText">Digital Toolbox</h2>
                        <ToolsIcon />
                        </div>
                        <p className="GroupDescription">BS blurb about right tools, right time, to bring biz into the tech era</p>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}