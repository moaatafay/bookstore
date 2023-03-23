import React from "react";

function PopUp  ({showPopup,handleClosePopUp,name,description})  {


return(
    <>
    {showPopup && (
        <div id="small-modal" tabindex="-1" className="popup">
        <div class="relative w-full h-full max-w-md md:h-auto">
           
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
               
                <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    {name}
                    </h3>
                    <button onClick={handleClosePopUp} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
            
                <div class="p-6 space-y-6">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {description}
                    </p>
                   
                </div>
              
               
            </div>
        </div>
     </div>
           )}
           </>

)


}
export default PopUp;




