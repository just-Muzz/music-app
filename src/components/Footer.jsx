import CenterMenu from "./CenterMenu";

function Footer() {
  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          {/* <Facebook /> */}
          <i class="bi bi-facebook"></i>
        </div>
        <div className={SocialStyle}>
          {/* <Twitter /> */}
          <i class="bi bi-twitter"></i>
        </div>
        <div className={SocialStyle}>
          {/* <YouTube /> */}
          <i class="bi bi-youtube"></i>
        </div>
        <div className={SocialStyle}>
          {/* <LinkedIn /> */}
          <i class="bi bi-linkedin"></i>
        </div>
      </div>
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
}

export default Footer;
