import { 
    faTrash, 
    faSignOutAlt, 
    faPenToSquare, 
    faSpinner, 
    faPlusCircle, 
    faIcons,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
  } from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash, 
    faSignOutAlt, 
    faPenToSquare, 
    faSpinner, 
    faPlusCircle, 
    faPhone, 
    faEnvelope, 
    faMapMarkedAlt,
    faLock
  );
};

export default Icons;
