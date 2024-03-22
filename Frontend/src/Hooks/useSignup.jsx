import { useState } from "react";

const useSignup = ({ fullname, username, password, confirmPassword, gender }) => {
    const [loading, setLoading] = useState(false);
    const success = handleError({ fullname, username, password, confirmPassword, gender });
    if (!success) return
    try {
        setLoading(true);
        //backend Request
    }
    catch (error) {
        //show any error
    }
    finally {
        setLoading(false)
    }
    return { loading };


}

export default useSignup

function handleError({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword) {
        window.alert("Fill all the required fields");
        return false;
    }
    if (password.length < 8) {
        window.alert("Password Must be 8 character long")
        return false;
    }
    if (password != confirmPassword) {
        window.alert("Password Did'nt match");
        return false;
    }
}