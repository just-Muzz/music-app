import music from "../img/MusicLogo.png"
import CenterMenu from "./CenterMenu";

const btnStyles = "border-2 rounded-[10px] border-[#232a4e] px-[25px] py-[7px] hover:bg-[#232a4e]"
const Header = () => {
  return (
    <header className="header bg-[#081730] flex justify-between items-center px-20 pt-[2.4rem] text-[0.8rem]">

      <img src={music} alt="" className="logo h-[42px] w-[42px]" />

      <CenterMenu />

      <div className="buttons flex">
        <button className={btnStyles + ` mr-9`}>Sign Up</button>
        <button className={btnStyles + ` bg-[#232a4e]`}>Log in</button>
      </div>

    </header>
  );
}

export default Header;