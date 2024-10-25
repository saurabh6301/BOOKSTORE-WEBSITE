import { useState } from 'react';
import axios from "axios";

function Contact() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);





    const [message, setMessage] = useState("Register Here !!");
    const UserHandle = (e) => {
        setUser(e.target.value);
    };

    const EmailHandle = (e) => {
        setEmail(e.target.value);
    };
    const PasswordHandle = (e) => {
        setPassword(e.target.value);
    };
    const MessageHandle = () => {
        setMessage("You are Register Successfully !!");
    }
    const HandleOnChange = async (e) => {
        e.preventDefault();
        setUser("");
        setEmail("");
        setPassword("");
        console.log("this is my " + user + " " + email + " " + password);
        const data = {
            "user": user,
            "email": email,
            "password": password
        }
        if (!user || !email || !password) {
            setError("Fill all the fields !!");
            return;
        }
        MessageHandle();
        try {
            const response = await axios.post("http://localhost:9999/addUser", data);
            console.log(response);

        }
        catch (error) {
            console.log(error.massage);
        }
    };
    const PageReload = (e) => {
        window.location.reload();
        e.preventDefault();
    }


    return (<>
        <div>
            <h1 className="text-6xl font-serif text-gray-900 sm:text-2xl text-center border-b-4 border-double border-yellow-200 bg-slate-50 mt-5">Contact</h1>
        </div>
        <div className="relative isolate overflow-hidded py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex  flex-col justify-between lg:flex-row space-y-10 lg:space-y-0 ">
                    <div className="flex justify-center">
                        <img src="Contact.jpg" alt="contact image" className=" h-[25rem] shadow-md"  />
                    </div>
                    <div className="mx-auto max-w-2xl lg:mx-0 w-[35rem] space-x-0 lg:space-x-5">
                                <h1 className=" text-start md:text-center text-2xl font-bold mb-4">{message}</h1>
                                {error && <p className="text-red-500 mb-4">{error}</p>}
                                <form onSubmit={HandleOnChange} className="space-y-8 ">
                                    <div>
                                        <label htmlFor="name" className=" text-lg">Your Name</label>
                                        <input
                                            type="text"
                                            className=" w-full p-2 pl-10 text-sm text-gray-700 bg-white"
                                            id="name"
                                            name="name"
                                            placeholder="Enter here"
                                            value={user}
                                            onChange={UserHandle}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-lg">Your Email</label>
                                        <input
                                            type="email"
                                            className=" w-full p-2 pl-10 text-sm text-gray-700 bg-white"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={EmailHandle}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className=" text-lg">Phone number</label>
                                        <input
                                            type="tel"
                                            className=" w-full p-2 pl-10 text-sm text-gray-700 bg-white"
                                            id="password"
                                            name="password"
                                            value={password}
                                            onChange={PasswordHandle}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="flex justify-start md:justify-center space-x-4">
                                        <button
                                            type="submit"
                                            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                                            onClick={PageReload}
                                        >
                                            Refrace
                                        </button>
                                    </div>
                                </form>


                        
                    </div>

                </div>

            </div>
        </div>


        </>
    )

}

export default Contact;



