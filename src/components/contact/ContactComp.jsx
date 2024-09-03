"use client";
import { useRouter } from "next/navigation";
import CustomInput from "../common/CustomInput";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import ContactService from "@/utils/controllers/contactServices";
import toast, { Toaster } from "react-hot-toast";

const ContactComp = () => {
  // const dispatch = useDispatch();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact_number: "",
      message: "",
    },
    onSubmit: async (values, resetForm) => {
      // dispatch(login(values));
      const params = {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          contact_number: values.contact_number,
          message: values.message,
        },
      };
      const response = await ContactService.createAppointment(params);

      if (response?.status === 500) {
        return toast.error(response.message, { duration: 5000 });
      }
      resetForm();
    },
  });

  return (
    <>
      <Toaster />
      <div className="flex flex-col justify-normal gap-[2rem] mt-[4rem]">
        <div className="w-full h-screen grid grid-cols-2 gap-0">
          <div className="w-full h-screen">
            <img
              src={"/assets/about2.webp"}
              className="w-full h-full object-cover"
              alt="contact_form"
            />
          </div>
          <div className="p-[2rem] flex flex-col justify-center items-center">
            <form
              action=""
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center items-center "
            >
              <div className="w-full py-[3rem] text-[3.5rem] font-[300]">
                Make an Appointment
              </div>
              <div className="w-full flex flex-col justify-normal gap-[1rem]">
                <div className="grid grid-cols-2 gap-[2rem]">
                  <div className="">
                    <div>
                      <CustomInput
                        type="text"
                        placeholder="Your Name"
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        onChng={formik.handleChange("firstName")}
                        onBlr={formik.handleBlur("firstName")}
                        val={formik.values.firstName}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <div>
                        <CustomInput
                          type="text"
                          placeholder="Your Name"
                          label="Last Name"
                          id="lastName"
                          name="lastName"
                          onChng={formik.handleChange("lastName")}
                          onBlr={formik.handleBlur("lastName")}
                          val={formik.values.lastName}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[2rem]">
                  <div className="">
                    <div className="">
                      <div>
                        <CustomInput
                          type="email"
                          placeholder="Your Email"
                          label="Email Address"
                          id="email"
                          name="email"
                          onChng={formik.handleChange("email")}
                          onBlr={formik.handleBlur("email")}
                          val={formik.values.email}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <div>
                        <CustomInput
                          type="text"
                          placeholder="Your Contact Number"
                          label="Conatct Number"
                          id="contact_number"
                          name="contact_number"
                          onChng={formik.handleChange("contact_number")}
                          onBlr={formik.handleBlur("contact_number")}
                          val={formik.values.contact_number}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-[2rem]">
                  <div className="">
                    <div className=" flex flex-col justify-normal gap-[0.5rem]">
                      <div>Message</div>
                      <div>
                        <textarea
                          id="message"
                          name="message"
                          value={formik.values.message}
                          placeholder="Your Message"
                          onChange={formik.handleChange("message")}
                          onBlur={formik.handleBlur("message")}
                          rows="4"
                          cols="50"
                          className="w-full min-h-[10rem] bg-[#FAD3B1] placeholder:text-[black]/50 placeholder:text-[0.875rem] px-3 py-2"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[2rem]">
                  <button
                    type="submit"
                    className=" bg-black p-[0.875rem] text-[white] flex justify-center items-center"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComp;
