export const isValidEmail = (email) => {
    const emailRegex =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    return emailRegex.test(email);
  };
  
export const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex =/^[0-9]{10}$/;
    
    return phoneRegex.test(phoneNumber);
  };
export const isValidName= (Name) => {
    const nameRegex =/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    
    return nameRegex.test(Name);
  };
export const isValidPosition= (Position) => {
    // const posRegex =/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    const posRegex =/^[A-Za-z\s]+$/;
    
    return posRegex.test(Position);
  };