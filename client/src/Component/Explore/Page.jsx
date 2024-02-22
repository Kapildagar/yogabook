

export const Page = ({currentPage,handlePage, lastindex,totalitems}) => {
    // console.log(totalPage)
  return (
    <>
    <div className="absolute bottom-[-100px] flex gap-2 justify-center items-center">
        <button
        className="border-[2px] w-[100px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500"
          disabled={currentPage === 1}
          onClick={() => handlePage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="text-orange-600 hover:underline font-bold text-[20px]"> Page {currentPage} </span>
        <button
          disabled={lastindex >= totalitems}
          className="border-[2px] w-[100px] rounded-md h-[40px] border-white text-white font-bold bg-gradient-to-r to-yellow-300 from-orange-500"
          onClick={() => handlePage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    
    </>
  )
}
