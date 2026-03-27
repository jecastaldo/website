const Footer = () => {
  return (
    <footer className="py-20 pl-8 md:pl-10 pr-6">
      <div className="flex items-center justify-between">
        <p className="text-[12px] text-muted-foreground/40">
          © {new Date().getFullYear()} Joe Castaldo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
