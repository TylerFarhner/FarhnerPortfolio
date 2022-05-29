import '../StyleSheets/AboutPage.css'

import ProfileIcon from "../components/Icons/ProfileIcon"

export default function AboutPage(props) {
    return (
        <div className="AboutPage">
            <main className="Page">
                <div className="Body">
                    <div className="AboutTopDiv">
                        <ProfileIcon />
                        <p className="AboutTopText">Who am I?</p>
                    </div>
                    <div className="AboutMainDiv">
                        <p className="AboutMainText">Description about myself, etc, you know the lame old drill yada yada</p>
                    </div>
                </div>
            </main>
        </div>
    )
}