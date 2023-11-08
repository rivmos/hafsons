import Image from "next/image";
import Logo from "./Logo";

const SectionHeading = ({text} : {text:string}) => <h4 className="font-semibold text-lg mb-8 text-primaryColor">{text}</h4>

const Footer = () => {
    return (
        <div className="bg-black text-white py-10 px-16 z-20">
            <div className="container mx-auto">
                <div className="flex justify-between items-start">
                    <div>
                        <Logo />
                        <p className="text-sm mt-4 max-w-xs">We offer the very best services in our field. We never settle for second best and always have your satisfaction as our top priority. It&apos;s who we are and we are proud of it.</p>
                    </div>
                    <div>
                        <SectionHeading text="Quick links" />
                        <ul className="text-sm space-y-6">
                            <li>Home</li>
                            <li>Our Team</li>
                            <li>About</li>
                            <li>Insight</li>
                        </ul>
                    </div>
                    <div>
                        <SectionHeading text="Business Hours" />
                        <ul className="text-sm space-y-12">
                            <li>Mon - Fri: 9:00 am ~ 5:00 pm</li>
                            <li>Saturday: Appointment only</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                    <div>
                        <SectionHeading text="Reach us" />
                        <ul className="text-sm space-y-8">
                            <li className="flex items-center space-x-2">
                                <img src="/img/icons/footer_call.svg" alt="Hafsons Mobile" className="h-8"/>
                                <span>0208 679 9353</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <img src="/img/icons/footer_email.svg" alt="Hafsons Email" className="h-8"/>
                                <span>info@hafsons.co.uk</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <img src="/img/icons/footer_address.svg" alt="Hafsons Address" className="h-8"/>
                                <span>656 Streatham High Road, London, SW16 3QL</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex justify-between items-center border-t border-white pt-4">
                    <p className="text-sm">&copy;{new Date().getFullYear()} | E-Solutions All Rights Reserved.</p>
                    <div className="flex items-center space-x-4">
                        <div>
                            Follow Us: 
                        </div>
                        <div>
                        </div>
                        <a href="#" className="text-xl hover:text-gray-400"><img src="/img/icons/facebook.svg" alt="Facebook" className="h-4"/></a>
                        <a href="#" className="text-xl hover:text-gray-400"><img src="/img/icons/x.svg" alt="X"  className="h-4"/></a>
                        <a href="#" className="text-xl hover:text-gray-400"><img src="/img/icons/instagram.svg" alt="Instagram"  className="h-4"/></a>
                        <a href="#" className="text-xl hover:text-gray-400"><img src="/img/icons/linkedin.svg" alt="LinkedIn"  className="h-4"/></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;
