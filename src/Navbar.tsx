import ArrowRight from "./ArrowRight";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-around h-80px top-0 bg-white z-100">
      <Logo />
      <div className="flex gap-20px items-center <md:hidden">
        <span className="cursor-pointer">Affiliates</span>
        <span className="cursor-pointer">Contact us</span>
        </div>
        <div className="flex gap-5px items-center cursor-pointer">
           <span className="mb-3px">start loop</span>
           <ArrowRight/>
        </div>
    </div>
  );
};

export default Navbar;
