import React from 'react'
import assets from '../assets/assets'

const ChatContainer = ({setSelectedUser,selectedUser}) => {
  return selectedUser? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex gap-3 py-4 mx-3 items-center'>
        <img src={assets.profile_martin} alt='' className='w-8 rounded-full'/>
        <p className='text-amber-50 text-lg flex-1'> 
         Martin Johnson 
        <span className='w-2 h-2  bg-green-500 rounded-full'></span>
        </p>
        <img src={assets.arrow_icon} onClick={()=>{setSelectedUser(null)}} alt=''
         className='md:hidden max-w-7'/>
         <img src={assets.help_icon} alt='' className='max-md:hidden max-w-5 cursor-pointer'/>
      </div>
    </div>
  ):(<div className='flex flex-col justify-center items-center text-gray-500 relative
      bg-white/10 max-md:hidden'>
        <img src={assets.logo_icon} alt='' className='max-w-15'/>
        <p className='text-lg text-white font-medium'>Chat Anytime,Anywhere</p>
     
   </div>)
}

export default ChatContainer