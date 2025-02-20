export default function MessageSuccess() {
  return (
    <div
      className="hidden xl:w-[400px] xl:h-[400px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] h-[300px] w-[300px] bg-[white] rounded-[10px] fixed top-[50%] left-[50%] shadow-2xl dark:shadow-[black] translate-x-[-50%] translate-y-[-50%] text-center pt-[0px] pb-[0px] pr-[30px] pl-[30px] text-gray-500"
      id="popUp"
    >
      <img
        className="xl:w-[200px] xl:h-[200px] xl:ml-[100px] xl:mt-[20px] lg:w-[200px] lg:h-[200px] lg:ml-[100px] lg:mt-[20px] md:w-[100px] md:h-[100px] w-[100px] h-[100px] ml-[85px] mt-[15px] md:ml-[85px] md:mt-[10px]"
        src="images/check-mark-1292787_1280.webp"
        alt="img"
      />
      <h1 className="font-bold mt-[20px] text-[20px]">Thank You</h1>
      <p className="font-medium text-[20px]">Message Sent Successfully !!!</p>
      <button
        type="button"
        className="w-[100%] h-[45px] mt-[20px] bg-[green] text-[18px] text-[white] outline-none rounded-[4px] cursor-pointer drop-shadow-sm"
        id="okBtn"
      >
        OK
      </button>
    </div>
  );
}
