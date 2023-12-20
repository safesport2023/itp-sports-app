import './Resources.css'
import KidsHelpPhoneLogo from '../assets/Kids-Help-Phone-Logo.png'
import CCCPlogo from '../assets/CCCP-logo.png'
import AbuseFreeSport from '../assets/AFSSA.png'
// eslint-disable-next-line
const Resources = () => {
    return (
        <div className='resources-page'>
            <div className='content-section'>



                <h3 className='important-text'>If you are in need of immediate support, here is a list of curated resources for you. If you would like to file a complaint, please contact abusefreesport.ca and they will be able to support you in how to file.
                </h3>

                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}



                <h3>
                    Please also know that a trusted adult is a great support in challenging times.
                </h3>




                <h3>
                    {/*  eslint-disable-next-line */}
                    <a href='https://kidshelpphone.ca/need-help-now-text-us/' target="_blank"><img className="image-links1" src={KidsHelpPhoneLogo} alt="Kids Helpphone" ></img> </a>
                </h3>




                <h3>
                    {/*  eslint-disable-next-line */}
                    <a href='https://abuse-free-sport.ca/' target="_blank"> <img className="image-links2" src={AbuseFreeSport} alt="Abuse Free Sport" ></img></a>
                </h3>




                <h3>
                    {/*  eslint-disable-next-line */}
                    <a href="https://www.protectchildren.ca/en/" target="_blank"><img className="image-links3" src={CCCPlogo} alt="Center for Child Protection" ></img>
                    </a>

                </h3>

            </div>
            <div className='content-section2'>

                <h3>
                    For Safe Sport information for the following sports and please check out your club’s or National Sporting Organizations website as well:
                </h3>
                <hr className='thickLine clearfix' /> {/* Horizontal line divider */}

                <h3>
                    Athletics Canada Safe Sport page
                </h3>

                <h3>
                    Volleyball Canada’s Safe Sport page
                </h3>

                <h3>
                    Swimming Canada’s Safe Sport page.
                </h3>


                <h3>
                    For some other resources:
                </h3>
                <h3>
                    {/*  eslint-disable-next-line */}
                    <a href='https://www.bullyingcanada.ca/' target="_blank">https://www.bullyingcanada.ca/</a>
                </h3>

                <h3>
                    {/*  eslint-disable-next-line */}
                    <a href='https://thearmyofsurvivors.org/' target="_blank">https://thearmyofsurvivors.org/</a>
                </h3>

                <h3>
                    {/*  eslint-disable-next-line */}
                    <a href='https://bulliedbrain.com/' target="_blank">https://bulliedbrain.com/</a>
                </h3>





            </div>
        </div >
    );
};

export default Resources;