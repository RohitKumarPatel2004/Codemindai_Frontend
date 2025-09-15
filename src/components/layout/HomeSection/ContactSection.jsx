const ContactSection = () => {
  return (
    <section className="min-h-screen bg-dark text-light p-10">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">We’d love to hear from you! Fill the form below 👇</p>
      <form className="max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-light text-primary" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-light text-primary" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-light text-primary"></textarea>
        <button className="px-6 py-2 bg-secondary text-dark rounded-full hover:bg-light transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
