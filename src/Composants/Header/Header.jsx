const Header = () => {
  return (
    <div className="flex gap-0 flex-col ">
      <div className="flex flex-row gap-1">
        <h1 className="text-5xl font-extrabold  text-wrap">NextTask</h1>
        <h2 className=" animate-bounce  m-1 shadow-green-500 inset-shadow-ls shadow-lg rounded-full border-0 border-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-12"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z"
              clipRule="evenodd"
            />
          </svg>
        </h2>
      </div>
      <div>
        <h3 className="italic text-sm font-thin pb-4 max-sm:text-[10px]">
          Organiser votre journee
        </h3>
      </div>
      <i class="hgi hgi-stroke hgi-rounded hgi-bounce-left"></i>
    </div>
  );
};

export default Header;
