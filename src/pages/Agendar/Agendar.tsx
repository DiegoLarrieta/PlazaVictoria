import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const Agendar = () => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [comments, setComments] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const horarios = [" 9:00 am "," 10:00 am ", " 11:00 am ", " 12:00 pm ", "1:00 pm", " 2:00 pm ", " 3:00 pm ", " 4:00 pm "," 5:00 pm"];

  const handleSubmit = () => {
    if (!name || !occupation || !date || !time) {
      alert("Por favor llena todos los campos.");
      return;
    }

    const formattedDate = date.toLocaleDateString("es-MX");
    const message = `Hola, me gustaría agendar una cita para conocer Plaza Victoria.

🔹 Nombre: ${name}
🔹 Ocupación: ${occupation}
🔹 Fecha: ${formattedDate}
🔹 Hora: ${time}
📝 Comentarios: ${comments || "Ninguno"}`;

    const whatsappURL = `https://wa.me/5217711234567?text=${encodeURIComponent(message)}`;
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

        <input
          type="text"
          placeholder="Ocupación"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          className="w-full border rounded px-4 py-2"
        />

        <textarea
          placeholder="Comentarios (opcional)"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full border rounded px-4 py-2"
        />

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
                className={`px-4 py-2 rounded border ${
                  time === h ? "bg-[#dfc3c0] text-white" : "bg-white"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#dfc3c0] text-white py-2 px-6 rounded mt-4 hover:opacity-90 w-full"
        >
          Confirmar cita y enviar a WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Agendar;
