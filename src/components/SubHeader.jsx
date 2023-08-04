

const SubHeader = () => {
    return (
     <>
  
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap py-5 px-10 flex-col md:flex-row items-center">
      <a className="flex flex-col md:flex-row title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className="" src="/assets/images/video-light 1.png" alt="" />
        <p className="text-[#009ddd] font-bold ml-2">Video consultation</p>
        <p className="mx-1"> with </p>
        <img className="" src="/assets/images/Ellipse 49.png" alt="" />
        <p className="font-bold">Dr. James Star</p>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 bg-[#f8f6f4] text-[#958070] rounded-md px-2 py-[2px] ">Flu (influanza)</a>
        <a className="mr-5 text-[#f76d00] flex items-center gap-x-1">     <img className="" src="/assets/images/message-lines-solid-2 3.png" alt="" /> Message</a>
     
      </nav>
    </div>
  </header>
  
     </>
    )
  }
  
  export default SubHeader