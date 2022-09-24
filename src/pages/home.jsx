import React, { useRef } from 'react';
// import { firebase } from "../firebase";
import { addDoc, collection } from "@firebase/firestore"

export default function Home() {
    const messageRef = useRef();
    // const ref = collection(firebase, "messages");

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);
    }
    return (
        <div>
            <form onSumbit={handleSave}>
                <label>Enter Message</label>
                <iunput type="text" ref={messageRef} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
