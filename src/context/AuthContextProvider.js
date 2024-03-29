import { createContext, useEffect, useState } from "react";
import { realTimeDb } from "../firebase.config";
import { onValue, ref } from "firebase/database";
import {
  RecaptchaVerifier,
  onAuthStateChanged,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase.config";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [confirmObj, setConfirmObj] = useState();
  const [user, setUser] = useState();
  onAuthStateChanged(auth, (curruser) => {
    if (curruser) {
      setUser(curruser);
    }
  });
  const reCptchaSetUp = (phone) => {
    const reCaptchaverifire = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );
    reCaptchaverifire.render();
    return signInWithPhoneNumber(auth, `+91${phone}`, reCaptchaverifire);
  };

  const loginWithPhone = async (phone) => {
    const res = await reCptchaSetUp(phone);

    setConfirmObj(res);

    //  console.log(confirmObj)
  };

  const VerifyOPT = async (otp) => {
    try {
      if (confirmObj === "" || confirmObj === null) {
        throw Error("Please Enter the otp :: ");
      }
      const verify = await confirmObj.confirm(otp);
      console.log(verify);
    } catch (error) {
      console.log("here is error from verify otp ");
    }
  };


  /// All transactions Data 
  const [transactions, setTransactions] = useState();

  const dbRef = ref(realTimeDb, "transactions");

  useEffect(() => {
    onValue(dbRef, (snap) => {
      const data = snap.val();
      const tem = [];
      Object.keys(data).map((items) => {
        tem.push({ ...data[items] });
        return 0 ;
      });
      setTransactions(tem);
    });
  } , []);



  return (
    <AuthContext.Provider
      value={{ loginWithPhone, confirmObj, VerifyOPT, user  ,  transactions }}
    > 
      {children}
    </AuthContext.Provider>
  );
}
