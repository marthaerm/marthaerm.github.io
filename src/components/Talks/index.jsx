import React from 'react';
// import './index.css';
function Talks (){
    return (
        <div id="talks" className="mt-20">
            <h3 className="text-2xl mb-4 text-purple-500">
                <span className="font-bold">> Talks</span>
            </h3>
            <div className="font-courier text-gray-800">
                <p>These are some talks I've recently participated.</p>
            </div>
            
            <div className="flex justify-between gap-10">
                <div>
                    <h3 className="pt-2 font-bold text-xl text-purple-400">
                        Internships: Un camino para ser Software Engineer
                    </h3>
                    <div className="grid grid-cols-2 grid-rows-5">
                        <iframe
                            title="Internships: Un camino para ser SoftwareEngineer"
                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEeU4V-Q7s&#x2F;view?embed"
                            className="col-span-2 row-span-5 w-full h-80"
                        />
                    </div>
                </div>                
            </div>
        </div>
        
    );
}

export default Talks;