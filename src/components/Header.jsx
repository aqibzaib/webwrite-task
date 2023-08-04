

const Header = () => {
  return (
   <>

<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="" src="/assets/images/1-01 3.png" alt="" />
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 font-bold">Consultation</a>
      <a className="mr-5 hover:text-gray-900">Medical weight loss</a>
      <a className="mr-5 hover:text-gray-900">Aging</a>
      <a className="mr-5 hover:text-gray-900">Sexual health</a>
      <a className="mr-5 hover:text-gray-900">Lab testing</a>
    </nav>
    <button className="inline-flex items-center border-0 rounded focus:outline-none text-base mt-4 md:mt-0">
    <img src={'/public/assets/images/Ellipse 25.png'} />
     
    </button>
  </div>
</header>

   </>
  )
}

export default Header