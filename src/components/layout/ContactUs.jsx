import SectionHeaders from "./SectionHeaders";

export default function ContactUs() {
  return (
    <section className="text-center my-8">
      <SectionHeaders subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
      <div className="mt-8">
        <a
          href="tel:+21678456456"
          className="text-4xl underline text-gray-500 font-lemon"
        >
          +977- 9808949475
        </a>
      </div>
    </section>
  );
}
