import Swal from "sweetalert2";

const sweatalert = (props) => {
  Swal.fire({
    title: props.title,
    text: props.messsage,
    icon: props.icon,
  });
};

const swalSuccess = (props) => {
  Swal.fire({
    title: props.title,
    text: props.messsage,
    icon: "success",
  });
};

const swalError = (props) => {
  Swal.fire({
    title: props.title,
    text: props.messsage,
    icon: "error",
  });
};

export { sweatalert, swalSuccess, swalError };
