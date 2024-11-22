import { Metadata } from "next"


export const metadata:Metadata = {
  title:"Contact page"
}
const ContactPage = () => {
  return (
    <div className='w-full px-3 mx-auto'>
      <div className="flex items-center justify-between">
        <div className="">
          <h2 className='text-[50px] font-bold text-white px-5'>Contact</h2>
        </div>
        <div className="flex flex-col justify-between w-[500px] my-[25px]">
          <span className='w-[50px] h-[2px] bg-[#79C8C7]'></span>
          <p className='text-white font-semibold text-[18px] pt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quia iusto obcaecati. Provident, sed doloremque. Tenetur fugiat quibusdam quasi labore delectus cum beatae eaque vero, aut accusantium eum eligendi reprehenderit.</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
