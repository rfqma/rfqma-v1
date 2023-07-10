import React from "react";

import { AiFillFile, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <footer className="container mx-auto mb-20 rounded-t-lg w-96 lg:text-left">
                <div className="flex justify-center gap-10 p-4 mx-auto text-gray-700 opacity-50">
                    <a href="https://www.instagram.com/maruarchive">
                        <AiFillInstagram className="hover:text-gray-900" size={'2em'} />
                    </a>
                    <a href="https://www.linkedin.com/in/rifqi-maulana-541a88227/">
                        <AiFillLinkedin className="hover:text-gray-900" size={'2em'} />
                    </a>
                    <a href="https://github.com/rfqma">
                        <AiFillGithub className="hover:text-gray-900" size={'2em'} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCvHa-tWK7BKq-Ep6HFUahjQ">
                        <AiFillYoutube className="hover:text-gray-900" size={'2em'} />
                    </a>
                    <a href="https://drive.google.com/file/d/1kOvJJpiFmWUybrf3aXDM5o-CWgCdi1QV/view?usp=share_link">
                        <AiFillFile className="hover:text-gray-900" size={'2em'} />
                    </a>
                </div>
                <div className="mt-5 text-center text-gray-700/50 font-[rubik]">
                    © 2023 Copyright,
                    Rifqi Maulana
                </div>
            </footer>

        </>
    )
}
export default Footer