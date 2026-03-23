import { useState, forwardRef } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { availableSpaces } from '../../../data/spacesData';
import { plazaInfo } from '../../../data/plazaInfo';
import Button from '../../../components/ui/Button';

interface ContactFormProps {
  preselectedUnit?: string;
}

interface FormState {
  name:    string;
  phone:   string;
  email:   string;
  unit:    string;
  message: string;
}

const INITIAL: FormState = { name: '', phone: '', email: '', unit: '', message: '' };

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(
  ({ preselectedUnit = '' }, ref) => {
    const [form, setForm]       = useState<FormState>({ ...INITIAL, unit: preselectedUnit });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors]   = useState<Partial<FormState>>({});

    // Sync preselected unit when parent updates it
    if (form.unit !== preselectedUnit && preselectedUnit) {
      setForm((f) => ({ ...f, unit: preselectedUnit }));
    }

    const validate = (): boolean => {
      const e: Partial<FormState> = {};
      if (!form.name.trim())  e.name  = 'Ingresa tu nombre.';
      if (!form.phone.trim()) e.phone = 'Ingresa tu teléfono o WhatsApp.';
      setErrors(e);
      return Object.keys(e).length === 0;
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const { name, value } = e.target;
      setForm((f) => ({ ...f, [name]: value }));
      setErrors((err) => ({ ...err, [name]: undefined }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      const unitText  = form.unit ? `el ${form.unit}` : 'un local disponible';
      const msgParts  = [
        `Hola, estoy interesado en ${unitText} de Plaza Victoria.`,
        `Mi nombre es *${form.name}*`,
        form.email ? `Correo: ${form.email}` : '',
        form.message ? `\n\n${form.message}` : '',
      ].filter(Boolean);

      const waMsg = encodeURIComponent(msgParts.join('. '));
      const waUrl = `https://wa.me/${plazaInfo.contactWhatsapp}?text=${waMsg}`;

      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setSubmitted(true);
      setForm(INITIAL);
    };

    if (submitted) {
      return (
        <div ref={ref} className="flex flex-col items-center justify-center rounded-2xl bg-primary-50 py-16 text-center">
          <CheckCircle2 className="mb-4 h-14 w-14 text-primary" />
          <h3 className="text-xl font-bold text-zinc-900">¡Mensaje enviado!</h3>
          <p className="mt-2 max-w-sm text-sm text-zinc-500">
            Te redirigimos a WhatsApp para completar tu consulta. Nos pondremos en contacto contigo a la brevedad.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            size="sm"
            className="mt-6"
          >
            Enviar otra consulta
          </Button>
        </div>
      );
    }

    return (
      <div ref={ref} className="scroll-mt-24 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
          ¿Interesado en algún local?
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Déjanos tus datos y nos comunicamos contigo directamente por WhatsApp.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-zinc-700">
              Nombre completo <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="name" name="name" type="text"
              value={form.name} onChange={handleChange}
              placeholder="Tu nombre"
              className={`rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.name ? 'border-red-400' : 'border-zinc-200'}`}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-medium text-zinc-700">
              Teléfono / WhatsApp <span className="text-primary" aria-hidden="true">*</span>
            </label>
            <input
              id="phone" name="phone" type="tel"
              value={form.phone} onChange={handleChange}
              placeholder="772 000 0000"
              className={`rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${errors.phone ? 'border-red-400' : 'border-zinc-200'}`}
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">
              Correo electrónico <span className="text-xs text-zinc-400">(opcional)</span>
            </label>
            <input
              id="email" name="email" type="email"
              value={form.email} onChange={handleChange}
              placeholder="tucorreo@ejemplo.com"
              className="rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Unit selector */}
          <div className="flex flex-col gap-1">
            <label htmlFor="unit" className="text-sm font-medium text-zinc-700">
              Local de interés <span className="text-xs text-zinc-400">(opcional)</span>
            </label>
            <select
              id="unit" name="unit"
              value={form.unit} onChange={handleChange}
              className="rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
            >
              <option value="">Selecciona un local...</option>
              {availableSpaces.map((s) => (
                <option key={s.id} value={s.unit}>
                  {s.unit} — {s.size} m² ({s.floor})
                </option>
              ))}
              <option value="Otro">Otro / No sé cuál</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-700">
              Mensaje <span className="text-xs text-zinc-400">(opcional)</span>
            </label>
            <textarea
              id="message" name="message"
              rows={4}
              value={form.message} onChange={handleChange}
              placeholder="Cuéntanos más sobre lo que buscas: tipo de negocio, presupuesto, fecha de inicio..."
              className="resize-none rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-4 sm:col-span-2">
            <Button type="submit" size="lg" className="gap-2">
              <Send className="h-4 w-4" aria-hidden="true" />
              Enviar por WhatsApp
            </Button>
            <p className="text-xs text-zinc-400">
              * Campos obligatorios
            </p>
          </div>
        </form>
      </div>
    );
  },
);

ContactForm.displayName = 'ContactForm';
export default ContactForm;
