import './Service.css'

const ServiceCard = ({service}) => {
  return (
    <div>
       <div className={"px-4 py-6 my-2 flex gap-x-4 shadow-lg  transition duration-500 " + service.color}>
                    <div>
                      <img src={service.image} width={150} height={150} alt="" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <h2 className="text-xl text-gray-300 transition duration-500 font-bold">
                        {service.title}
                      </h2>
                      <p className="text-gray-400 transition duration-500">
                        {service.body}
                      </p>
                      <button className="py-1 font-bold px-2 mt-3 primary-color w-[130px] bg-white">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
    </div>
  )
}

export default ServiceCard
