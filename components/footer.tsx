import Link from "next/link";
import ReactDOM from "react-dom";
const Footer = () => {
  return (
    <div className="text-center border-t border-black p-2 text-slate-400">
      <div>
        
        <button><Link href="https://www.linkedin.com/in/blerton-rexhepi-63664a225/">
          <img src="/linkedin.svg" height={25} width={25} className="mr-2" />
            </Link> </button>
   
        <button><Link href={'https://www.facebook.com/blertonmufc'}> 
          <img src='/facebook.svg' height={25} width={25} className='ml-2' />
      </Link>  </button>
      </div>
      <div>© All rights reserved Blerton Rexhepi 2022</div>
    </div>
  );
};
export default Footer;
