const ContactSection = () => {
  return (
    <div id="contact" className="flex flex-col gap-3 mt-10">
      <h2 className="text-[12px] text-muted-foreground uppercase tracking-widest">Contact</h2>
      <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[650px]">
        For interviews, speaking engagements, or story tips — reach out on{" "}
        <a
          href="https://x.com/Joe_Castaldo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-muted-foreground/40 hover:decoration-foreground transition-colors underline-offset-2"
        >
          Twitter
        </a>
        {" "}or{" "}
        <a
          href="https://linkedin.com/in/joecastaldo"
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
