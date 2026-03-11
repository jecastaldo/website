import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  const onSubmit = () => {
    toast.success("Message sent! I'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xs tracking-[0.25em] uppercase font-medium text-primary mb-3">
          Contact
        </h2>
        <p className="text-sm font-light text-muted-foreground mb-10">
          For interviews, speaking engagements, or story tips.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            placeholder="Name"
            {...register("name", { required: true })}
            className="rounded-lg h-11 font-light text-sm bg-background border-border focus:border-primary"
          />
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="rounded-lg h-11 font-light text-sm bg-background border-border focus:border-primary"
          />
          <Textarea
            placeholder="Message"
            {...register("message", { required: true })}
            className="rounded-lg min-h-[120px] font-light text-sm bg-background border-border focus:border-primary resize-none"
          />
          <Button type="submit" className="rounded-lg font-medium text-sm px-8 h-11">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
