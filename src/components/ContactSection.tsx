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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-base font-light text-muted-foreground mb-10">
          For interviews, speaking engagements, or story tips.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            placeholder="Your name"
            {...register("name", { required: true })}
            className="rounded-xl h-12 font-light"
          />
          <Input
            type="email"
            placeholder="Your email"
            {...register("email", { required: true })}
            className="rounded-xl h-12 font-light"
          />
          <Textarea
            placeholder="Your message"
            {...register("message", { required: true })}
            className="rounded-xl min-h-[140px] font-light"
          />
          <Button type="submit" size="lg" className="rounded-xl w-full md:w-auto font-medium">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
