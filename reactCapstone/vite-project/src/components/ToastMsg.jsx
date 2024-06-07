import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function ToastMsg({msg}) {

    useEffect(()=>{showToastMessage()},[]);
    const showToastMessage = () => {
      toast.success({msg});
    };
  
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
  
  export default ToastMsg;