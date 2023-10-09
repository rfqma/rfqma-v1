import React from "react";

import img from "../assets/images/rifqimaulana-headshot.jpg"

const HomePage = () => {
    return (
        <>
            {/* CONTAINER */}
            <div className="container p-10 mx-auto text-center rounded-lg 2xl:w-5/12 xl:w-7/12 lg:w-9/12 md:w-11/12 sm:w-12/12">
                {/* CONTAINER HEADER */}
                <div className="p-6">
                    <img src={img} className="rounded-full w-36" alt="rifqimaulana-headshot.jpg" />
                    <h1 className="text-left pt-6 text-5xl font-[rubik] font-semibold">Rifqi Maulana</h1>
                </div>
                {/* END OF CONTAINER HEADER */}
                <hr />
                {/* CONTAINER ABOUT */}
                <div className="p-6">
                    <p className="text-left font-[rubik]">
                        a 20yo Minimalist. Digital Native, Photography and Videography
                        Enthusiast. Undergraduate student majoring on Computer Engineering.
                        <br /><br />
                        <span className="font-semibold">Working with me? <a href="mailto:rifqimaulanax@gmail.com" className="text-blue-500 hover:text-blue-700">Email me!</a></span>
                    </p>
                </div>
                {/* END OF CONTAINER ABOUT */}
                <hr />
                {/* CONTAINER WORKS */}
                <div className="p-6">
                    <h1 className="mb-5 text-2xl font-[rubik] font-semibold">Latest Works</h1>
                    {/* YOUTUBE EMBED */}
                    <div className="w-full mb-10 aspect-w-16 aspect-h-9">
                        <iframe title="ytFrame" className="rounded-lg" src="https://www.youtube.com/embed/KdqK7SruAT0" frameBorder="0" allowFullScreen={true}></iframe>
                    </div>
                    {/* END OF YOUTUBE EMBED */}
                    {/* INSTAGRAM EMBED */}
                    <div className="w-full border rounded-lg aspect-w-16 aspect-h-15">
                        <iframe title="igFrame" className="rounded-lg" src="https://www.instagram.com/p/CkrwSwcPmq6/embed" frameBorder="0" scrolling="no" allowtransparency="true" allowFullScreen={true}></iframe>
                    </div>
                    {/* END OF INSTAGRAM EMEBD */}
                </div>
                {/* END OF CONTAINER WORKS */}
                <br />
            </div>
            {/* END OF CONTAINER */}
        </>
    )
}
export default HomePage