import { useState } from "react";
import { Phone, Mail, Home } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const getLanguageContent = (lang: string) => {
    const content: Record<string, {
      title: string;
      description: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      button: string;
      whatsapp: string;
      email: string;
      messageSent: string;
      thankYou: string;
    }> = {
      en: {
        title: "Contact Me",
        description: "If you want to learn more about my projects, collaborate on any initiative or have any questions, don't hesitate to contact me.",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message",
        button: "Send Message",
        whatsapp: "WhatsApp",
        email: "Email",
        messageSent: "Message sent",
        thankYou: "Thank you for your message, I'll get back to you soon."
      },
      es: {
        title: "Contáctame",
        description: "Si deseas obtener más información sobre mis proyectos, colaborar en alguna iniciativa o tienes alguna consulta, no dudes en ponerte en contacto conmigo.",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "Tu email",
        messagePlaceholder: "Tu mensaje",
        button: "Enviar Mensaje",
        whatsapp: "WhatsApp",
        email: "Correo",
        messageSent: "Mensaje enviado",
        thankYou: "Gracias por tu mensaje, te responderé pronto."
      },
      fr: {
        title: "Contactez-moi",
        description: "Si vous souhaitez en savoir plus sur mes projets, collaborer à une initiative ou si vous avez des questions, n'hésitez pas à me contacter.",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre email",
        messagePlaceholder: "Votre message",
        button: "Envoyer un Message",
        whatsapp: "WhatsApp",
        email: "Email",
        messageSent: "Message envoyé",
        thankYou: "Merci pour votre message, je reviendrai vers vous bientôt."
      },
      de: {
        title: "Kontaktiere Mich",
        description: "Wenn Sie mehr über meine Projekte erfahren, an einer Initiative mitarbeiten oder Fragen haben, zögern Sie nicht, mich zu kontaktieren.",
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "Ihre E-Mail",
        messagePlaceholder: "Ihre Nachricht",
        button: "Nachricht Senden",
        whatsapp: "WhatsApp",
        email: "E-Mail",
        messageSent: "Nachricht gesendet",
        thankYou: "Danke für Ihre Nachricht, ich werde mich bald bei Ihnen melden."
      }
    };
    
    return content[lang] || content.en;
  };
  
  const content = getLanguageContent(language);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: content.messageSent,
      description: content.thankYou
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto glass-card p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
          {content.title}
        </h2>
        <p className="text-gray-800 dark:text-gray-400 mb-8 text-center">
          {content.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <a href="https://wa.me/50683476182" target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center justify-center gap-3 hover:bg-white/20 transition-colors text-black dark:text-white">
            <Phone className="w-6 h-6" />
            {content.whatsapp}
          </a>
          <a href="mailto:orlanisbe02@hotmail.com" className="glass-card p-4 flex items-center justify-center gap-3 hover:bg-white/20 transition-colors text-black dark:text-white">
            <Mail className="w-6 h-6" />
            {content.email}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-black dark:text-white">+506 8347-6182</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-black dark:text-white">orlanisbe02@hotmail.com</span>
          </div>
          <div className="flex items-center gap-3 md:col-span-2">
            <Home className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-black dark:text-white">Alajuela, Costa Rica</span>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder={content.namePlaceholder} 
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-md" 
              required 
            />
          </div>
          <div>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder={content.emailPlaceholder} 
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-md" 
              required 
            />
          </div>
          <div>
            <textarea 
              value={message} 
              onChange={e => setMessage(e.target.value)} 
              placeholder={content.messagePlaceholder} 
              rows={4} 
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-md" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gray-900 dark:bg-white font-semibold py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-slate-50 dark:text-slate-950"
          >
            {content.button}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
