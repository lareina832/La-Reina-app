function mostrarJugada() {
  document.getElementById("jugada").style.display = "block";

  document.getElementById("jugada").scrollIntoView({
    behavior: "smooth"
  });
}

function confirmarJugada() {

  const sorteo = document.getElementById("sorteo").value;
  const loteria = document.getElementById("loteria").value;
  const numero = document.getElementById("numero").value.trim();
  const modalidad = document.getElementById("modalidad").value;
  const monto = document.getElementById("monto").value;

  if (numero === "") {
    alert("Por favor ingresá el número de tu jugada.");
    return;
  }

  if (monto === "" || Number(monto) <= 0) {
    alert("Por favor ingresá el monto de tu jugada.");
    return;
  }

  document.getElementById("pago").style.display = "block";

  document.getElementById("pago").scrollIntoView({
    behavior: "smooth"
  });
}

function enviarWhatsApp() {

  const sorteo = document.getElementById("sorteo").value;
  const loteria = document.getElementById("loteria").value;
  const numero = document.getElementById("numero").value;
  const modalidad = document.getElementById("modalidad").value;
  const monto = document.getElementById("monto").value;

  const mensaje =
    "👑 LA REINA 832%0A%0A" +
    "🎟️ NUEVA JUGADA%0A" +
    "Sorteo: " + sorteo + "%0A" +
    "Lotería: " + loteria + "%0A" +
    "Número: " + numero + "%0A" +
    "Modalidad: " + modalidad + "%0A" +
    "Monto: $" + monto + "%0A%0A" +
    "✅ Ya realicé la transferencia.";

  // IMPORTANTE:
  // Reemplazá 549XXXXXXXXXX por el número de WhatsApp
  // de LA REINA 832, incluyendo código de país.

  const whatsapp = "549XXXXXXXXXX";

  window.open(
    "https://wa.me/" + whatsapp + "?text=" + mensaje,
    "_blank"
  );
    }
