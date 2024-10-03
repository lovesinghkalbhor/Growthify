"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ContactUsModal() {
  // State variables to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Email and phone validation patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/; // Simple pattern for a 10-digit phone number

  // Effect to validate the form whenever the input fields change
  useEffect(() => {
    const isEmailValid = emailPattern.test(email);
    const isPhoneValid = phonePattern.test(phone);

    setEmailError(isEmailValid ? "" : "Invalid email address");
    setPhoneError(isPhoneValid ? "" : "Phone number must be 10 digits");

    setIsFormValid(
      name.trim() !== "" &&
        email.trim() !== "" &&
        isEmailValid &&
        phone.trim() !== "" &&
        isPhoneValid &&
        message.trim() !== ""
    );
  }, [name, email, phone, message]);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message link
    const whatsappNumber = "918815152801"; // Replace with your WhatsApp number
    const whatsappMessage = `Hello, my name is ${name}.\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");

    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
  };

  return (
    <>
      <button
        className="fixed bottom-5 flex justify-center items-center animate-bounce z-[1000] left-5 w-16 h-16 rounded-full bg-white border border-black"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <Image
          src="/images/chat.png"
          className="w-8 h-8"
          width={40}
          height={40}
          alt="Chat Icon"
        />
      </button>
      <dialog data-theme="light" id="my_modal_3" className="modal rounded-lg">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="flex w-full space-x-3" onSubmit={handleSubmit}>
            <div className="w-full px-5 py-10 m-auto bg-white rounded-lg">
              <div className="mb-6 text-3xl font-light text-center text-gray-800">
                Send us a Message
              </div>
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2">
                  <div className="relative">
                    <input
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      type="text"
                      id="contact-form-name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative">
                    <input
                      className={`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent ${
                        emailError && email != "" ? "border-red-500" : ""
                      }`}
                      type="email"
                      id="contact-form-email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm">
                        {email ? emailError : ""}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative">
                    <input
                      className={`rounded-lg border-transparent flex-1 appearance-none border shadow-sm border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent ${
                        phoneError && phone != "" ? "border-red-500" : ""
                      }`}
                      type="tel"
                      id="contact-form-phone"
                      placeholder="Phone no"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {phoneError && (
                      <p className="text-red-500 text-sm">
                        {phone ? phoneError : ""}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="comment">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                      id="comment"
                      placeholder="Enter your Message"
                      name="comment"
                      rows="5"
                      cols="40"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className={`py-2 px-4 bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${
                      !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!isFormValid}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
