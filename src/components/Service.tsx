import {FaCode, FaLaptopCode} from 'react-icons/fa' 
import {SiFreelancer} from 'react-icons/si'

interface service  {
    id: number
    title: string
    des: string 
    icon: number

}

interface info { 
    data: service
}


const Service = ({data}: info) => {
    return (
        <div className='serviceContinter'>
               <div className="icon">{data.icon == 1 ? <FaCode/> : data.icon == 2 ? <FaLaptopCode/> : <SiFreelancer/>} </div>
               
               <h2>{data.title}</h2>
               <p>{data.des}</p>
        </div>
    )
}

export default Service
    