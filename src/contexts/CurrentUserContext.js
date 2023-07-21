import React from "react";
const CurrentUserContext = React.createContext();
export const currentUser = {
    name: '',
    about: '',
    avatar: '',
}
export default CurrentUserContext;