import { ToastContainer as ToastContainerComponent } from "react-toastify";
function ToastContainer() {
  return (
    <ToastContainerComponent
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={5}
    />
  );
}
export default ToastContainer;
