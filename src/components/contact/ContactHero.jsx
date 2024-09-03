import ContactInfo from "./ContactInfo";

const ContactHero = () => {
  return (
    <>
      <div className="w-[140vh] h-[80vh]  grid grid-cols-12 gap-[1rem]">
        <div className="col-span-6 flex flex-col justify-center items-start gap-[1rem]">
          <div className="text-[4rem] w-[75%]">WE ARE READY TO ASSIST YOU</div>
          <div className="text-[1.2rem] font-[500]">
            Questions or need assistance? Reach out for personalized beauty
            solutions tailored just for you.
          </div>
          <div className="text-[1.2rem] font-[500]">
            Our expert team is dedicated to helping you find the perfect
            products and routines to enhance your natural beauty. We offer
            one-on-one consultations to understand your unique needs.
          </div>
          <div className="uppercase w-fit p-[1rem] bg-[#FAD3B1] text-black cursor-pointer">
            Book Now
          </div>
        </div>
        <div className="col-span-6">
          <img
            src={"/assets/contact_hero.jpg"}
            className="w-full h-full object-cover"
            alt="contact_hero"
          />
        </div>
      </div>
      <div className="custom-container pb-[2rem]">
        <ContactInfo />
      </div>
    </>
  );
};

export default ContactHero;
