import React from "react";
import { Link } from "react-router-dom";
import List from './JSONtoJSX.jsx'
import { useLocation } from 'react-router-dom'

export default function Layout(props) {


    const location = useLocation();
    // if (location.pathname === '/') {
    //     location.pathname = "Home"
    // }

    return (
        <html className="h-full bg-white">
            <body className="h-full overflow-hidden">
                <div>
                    <div className="fixed inset-0 bg-gray-100 bg-opacity-75" />
                    <div className="fixed inset-0 z-40 flex">
                        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">

                            <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4 px-4">
                                <div className="flex flex-shrink-0 items-center px-2">
                                    {/* <img className="h-8 w-auto" src="https://placeimg.com/640/480/any" alt="Your Company"/> */}
                                    <div className="flex  flex-col">
                                        <p className=" text-lg font-bold">Playground</p>
                                        <p className=" text-gray-600 text-sm ">Berkeley Coding Bootcamp Summer 2023</p>
                                    </div>
                                </div>
                                <nav aria-label="Sidebar" className="mt-5">
                                    <div className="space-y-1 px-2">
                                        <Link to="/" className={ ` ${location.pathname === '/' ? ' bg-gray-100 text-gray-800 ' : ' bg-gray-0 text-gray-600 '} hover:bg-gray-50  group flex items-center rounded-md px-2 py-2 text-base font-medium` }>
                                            <svg className="text-gray-500 mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>
                                            Overview
                                        </Link>
                                        <div className=" pt-4 ">
                                            <p className="font-bold mb-2">Course content</p>
                                            <List data={props.menuLinks} />
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                                <a href="#" className="group block flex-shrink-0">
                                    <div className="flex items-center">
                                        <div>
                                            {/* <img className="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt=""> */}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Kish Parikh</p>
                                            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View Github</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" ml-80 flex min-w-0 flex-1 flex-col overflow-hidden">
                    <div className="relative z-50 flex flex-1 overflow-hidden">
                        <main className=" p-12 relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                            <h1 className="text-4xl font-bold mb-4">{ decodeURIComponent(location.pathname).toLowerCase().replaceAll(' ', '') }</h1>
                            {props.content}
                        </main>
                    </div>
                </div>
            </body >
        </html >
    );
}