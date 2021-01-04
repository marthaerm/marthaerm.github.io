import React from 'react';
// import './index.css';
function Examples (){
    return (
        <div id="projects" className="mt-20">
            <h3 className="text-2xl mb-4 text-purple-500">
                <span className="font-bold">> Learning Projects</span>
            </h3>
            <div className="font-courier text-gray-800">
                <p>These are some ptojects I created to learn more about some technologies.</p>
            </div>
            
            <div className="flex justify-between gap-10">
                <div>
                    <h3 className="pt-2 font-bold text-xl text-yellow-400">
                        JavaScript
                    </h3>
                    <ul className="text-blue-500 underline hover:text-blue-600 hover:no-underline">
                        <li>

                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="pt-2 font-bold text-xl text-blue-400">
                        CSS
                    </h3>
                    <ul className="text-blue-500 underline hover:text-blue-600 hover:no-underline">
                        <li>
                            <a href="https://marthaerm.github.io/tailwind-practice/" target="blank">> TailwindCSS</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="pt-2 font-bold text-xl text-blue-500">
                        ReactJS
                    </h3>
                    <ul className="text-blue-500 underline hover:text-blue-600 hover:no-underline">
                        <li>
                            <a href="https://github.com/marthaerm/react-todo-app" target="blank">> Todo App</a>
                        </li>

                        <li>
                            <a href="https://github.com/marthaerm/ror-react-todo-app" target="blank">> Todo App with Ruby on Rails</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="pt-2 font-bold text-xl text-red-500">
                        Ruby
                    </h3>
                    <ul className="text-blue-500 underline hover:text-blue-600 hover:no-underline">
                        <li>
                            <a href="https://github.com/marthaerm/ror-todo-app" target="blank">> Todo App</a>
                        </li>

                        <li>
                            <a href="https://github.com/marthaerm/ror-react-todo-app" target="blank">> Todo App with React</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default Examples;