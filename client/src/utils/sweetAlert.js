import swal from "sweetalert";

//basic alert
export const basicAlert = (msg, type = "success") => {
  swal(msg.title, msg.msg, type);
};
