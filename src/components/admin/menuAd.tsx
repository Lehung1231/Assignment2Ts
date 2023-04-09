import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const MenuAd = () => {
  return <>
  <div className="flex flex-col bg-slate-100  w-2/6 pl-4 pr-20 pt-6 h-100%">
  <a href="#" className="py-2 px-4 text-gray-600 hover:bg-[#00B0D7] hover:text-white rounded-2xl "> <FontAwesomeIcon icon={faMobileButton} className='mr-4'/>
Điện thoại</a>
  <a href="#" className="py-2 px-4 text-gray-600 hover:bg-[#00B0D7]  hover:text-white rounded-2xl"><FontAwesomeIcon icon={faLaptop}  className='mr-4' />Laptop</a>
  <a href="#" className="py-2 px-4 text-gray-600 hover:bg-[#00B0D7]  hover:text-white rounded-2xl"><FontAwesomeIcon icon={faDesktop}  className='mr-4'/>Máy tính bảng</a>
  <a href="#" className="py-2 px-4 text-gray-600 hover:bg-[#00B0D7]  hover:text-white rounded-2xl"><FontAwesomeIcon icon={faMusic}  className='mr-4'/>Âm thanh</a>
</div>
  </>
}

export default MenuAd