import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
//-----------------------|| ELEMENT REFERENCE HOOKS  ||-----------------------//

const useErrorsRef = (props) => {
  const { message } = useSelector((state) => state.message);
  let errors = {};
  if (message) {
    for (let key in message.errors) {
      errors[key] = message.errors[key][0]; // for now only take the first error of the array
    }
  }
  const serverErrors = useRef({current : errors});
  useEffect(
    () => () => {
      serverErrors.current = false;
    },
    [],
  );
console.log(serverErrors);
  return serverErrors;
};

export default useErrorsRef;
