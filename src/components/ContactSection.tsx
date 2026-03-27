const ContactSection = () => {
  return (
    <div id="contact" className="flex flex-col gap-3 mt-10">
      <h2 className="text-[22px] text-foreground font-semibold tracking-tight">Contact</h2>
      <p className="text-[19px] text-muted-foreground leading-relaxed max-w-[650px]">
        For interviews, speaking engagements, or story tips — reach out via{" "}
        <a
          href="mailto:joe.castaldo@gmail.com"
          className="text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground transition-colors underline-offset-2"
        >
          email
        </a>
        {" "}or{" "}
        <a
          href="https://www.linkedin.com/in/joecastaldo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground transition-colors underline-offset-2"
        >
          LinkedIn
        </a>.
      </p>
    </div>
  );
};

export default ContactSection;
