import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Placeholder – EmailJS integration requires user's service/template IDs
    setTimeout(() => {
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1200);
  };

  return (
    <SectionWrapper>
      <h1 className="font-heading text-4xl font-bold mb-4">
        Get In <span className="text-gradient">Touch</span>
      </h1>
      <div className="h-1 w-16 bg-primary rounded mb-12" />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            Have a question or want to work together? Feel free to reach out – I'd love to hear from you!
          </p>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">Email</p>
                <p className="text-foreground font-body">dilshad@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">Location</p>
                <p className="text-foreground font-body">Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 space-y-5"
        >
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-secondary/50 border-border font-body"
            maxLength={100}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-secondary/50 border-border font-body"
            maxLength={255}
          />
          <Textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-secondary/50 border-border font-body resize-none"
            maxLength={1000}
          />
          <Button type="submit" disabled={sending} className="w-full font-body">
            {sending ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
