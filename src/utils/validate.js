export const validateForm = (email, password) => {
  // const validName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName);
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  console.log("run run");

  // if (!validName) return "Name is invalid";
  if (!validEmail) return "Email is invalid";
  if (!validPassword) return "Password is invalid";

  return null;
};
