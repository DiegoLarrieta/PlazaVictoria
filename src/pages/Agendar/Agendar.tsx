import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Agendar = () => {
  const [name, setName] = useState("");
  const [hasBusiness, setHasBusiness] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [source, setSource] = useState("");
  const [otherSource, setOtherSource] = useState("");
  const [comments, setComments] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");

  const horarios = [
    " 9:00 am ",
    " 10:00 am ",
    " 11:00 am ",
    " 12:00 pm ",
    "1:00 pm",
    " 2:00 pm ",
    " 3:00 pm ",
    " 4:00 pm ",
    " 5:00 pm",
  ];

  const handleSubmit = () => {
    if (!name || !hasBusiness || !businessType || !source || !date || !time) {
      alert("Por favor llena todos los campos obligatorios.");
      return;
    }

    const formattedDate = date.toLocaleDateString("es-MX");

    const sourceFinal = source === "Otro" ? otherSource : source;

    const message = `Hola, me gustaría agendar una cita para conocer Plaza Victoria.

 **Nombre**: ${name}
 ¿Tiene un negocio actualmente?: ${hasBusiness}
 Tipo de negocio que desea abrir: ${businessType}
 ¿Cómo se enteró de Plaza Victoria?: ${sourceFinal}
 **Fecha**: ${formattedDate}
 **Hora**: ${time}
 Comentarios: ${comments || "Ninguno"}`;
    const whatsappURL = `https://wa.me/5217713198995?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Agendar una cita</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-4 py-2"
        />

        <div>
          <label className="block mb-1 font-medium">
            ¿Tiene un negocio actualmente?
          </label>
          <select
            value={hasBusiness}
            onChange={(e) => setHasBusiness(e.target.value)}
            className="w-full border rounded px-4 py-2"
          >
            <option value="">Selecciona una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="¿Qué tipo de negocio desea abrir?"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="w-full border rounded px-4 py-2"
        />

        <div>
          <label className="block mb-1 font-medium">
            ¿Cómo se enteró de Plaza Victoria?
          </label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full border rounded px-4 py-2"
          >
            <option value="">Selecciona una opción</option>
            <option value="Redes sociales">Redes sociales</option>
            <option value="Recomendación">Recomendación</option>
            <option value="Pasó por la zona">Pasó por la zona</option>
            <option value="Otro">Otro</option>
          </select>
          {source === "Otro" && (
            <input
              type="text"
              placeholder="Especifica cómo te enteraste"
              value={otherSource}
              onChange={(e) => setOtherSource(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-2"
            />
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Selecciona la fecha:</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="w-full min-w-[260px] border rounded px-4 py-2"
            placeholderText="Haz clic para elegir una fecha"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Selecciona la hora:</label>
          <div className="grid grid-cols-3 gap-2">
            {horarios.map((h) => (
              <button
                key={h}
                onClick={() => setTime(h)}
                className={`px-4 py-2 rounded-xl border ${
                  time === h ? "bg-[#eda135] text-white" : "bg-white"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Comentarios adicionales (opcional)"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full border rounded px-4 py-2"
        />

        <button
          onClick={handleSubmit}
          className="bg-[#0e6886] text-white py-2 px-6 rounded mt-4 hover:opacity-90 w-full"
        >
          Confirmar cita y enviar a WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Agendar;
