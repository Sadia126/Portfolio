/* eslint-disable no-unused-vars */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current.from_name.value ||
      !form.current.from_email.value ||
      !form.current.message.value
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_6yztckl",
        "template_bpew9ea",
        form.current,
        "t1ITBz3kJjw8j3IKP"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message!");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div
      className="flex justify-center items-center contact mb-24"
      id="contact"
    >
      <div className="w-96">
        <h1 className="text-4xl font-bold text-center mt-20 mb-20 ">Contact</h1>
        <form
          className="flex flex-col w-full text-base"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="mt-4">Name</label>
          <input
            type="text"
            name="name"
            className="w-full h-6 p-7 outline-none rounded-md border border-gray-300 focus:border-teal-500"
          />
          <label className="mt-4">Email</label>
          <input
            type="email"
            name="email"
            className="w-full h-6 p-7 outline-none rounded-md border border-gray-300 focus:border-teal-500"
          />
          <label className="mt-4">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            className="w-full p-4 outline-none rounded-md border border-gray-300 focus:border-teal-500 resize-none"
          />

          <input
            type="submit"
            value="Send"
            className="mt-8 cursor-pointer bg-[#c3902c] hover:bg-[#c3902c] text-white
             border-none rounded-lg h-10 btn "
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
