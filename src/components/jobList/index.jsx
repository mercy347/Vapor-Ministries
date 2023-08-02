import data from "../../data.json"
import { useState } from "react"
import logo from "../../assets/logo.png.jpg"



const JobList = ()=>{
    const [value, setValue] = useState("")

    const handleChange = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return (
       
        <div className="w-full h-screen flex flex-col items-center bg-red-500 @media (min-width: 1280px) { ... }
        ">
            <div className="text-7xl flex justify-center flex-col items-center shadow-2xl shadow-lg shadow-white ">
                <img alt="Logo" className="w-60 h-40" src={logo}/>
                <h1>Vapor Ministries Timesheets</h1>
                  
            </div>
            <input type="text" onChange={handleChange} className="bg-red-300 w-80 h-10 m-10 p-4 rounded-lg outline outline-offset-2 outline-white  " placeholder="Search By title. "/>
             
            <div className="w-full px-20 flex flex-wrap justify-space-between grid gap-x-8 gap-y-4 grid-cols-3">
        
            {
                !value ? null : 
                data.filter((job)=>{
                    if (  job.title.toLowerCase().includes(value.toLowerCase())   ){
                        return job
                    }
                }).map((job)=>{
                    return (
                        <div className="w-80 h-40 bg-white" key={job.id}>
  
                            <h1 className=" text-2xl text-red-500 bg-gray-100">{job.title}</h1>
                            {job.subtitles.map((sub, index)=>{
                                return (
                                    <div key={index}>
                                        <p>{sub}</p>
                                    </div>
                                )
                            })}
                           
                        </div>
                        
                    )
                })
            }
            </div>
        </div>

    )
}

export default JobList