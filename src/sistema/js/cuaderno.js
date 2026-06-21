// Lógica compartida del sitio: sopa de letras, selector de curso (persistente),
// menú flotante, parent gate de la guía de padres y ventanas emergentes.

// ---- Email de contacto (anti-bots) ----
// El correo no está en el HTML: se ensambla aquí desde data-user + data-domain.
(function () {
  document.querySelectorAll(".email-link").forEach(function (a) {
    var u = a.getAttribute("data-user");
    var d = a.getAttribute("data-domain");
    if (!u || !d) return;
    var addr = u + "@" + d;
    a.setAttribute("href", "mailto:" + addr);
    a.textContent = addr;
  });
})();

// ---- Sopa de letras ----
// Cada sopa lleva su rejilla en data-sopa (string de letras) y el nº de columnas en data-cols.
(function () {
  document.querySelectorAll(".sopa[data-sopa]").forEach(function (s) {
    var grid = s.getAttribute("data-sopa").replace(/\s/g, "");
    var cols = s.getAttribute("data-cols") || 11;
    s.style.gridTemplateColumns = "repeat(" + cols + ",1fr)";
    for (var i = 0; i < grid.length; i++) {
      var c = document.createElement("span");
      c.textContent = grid[i];
      s.appendChild(c);
    }
  });
})();

// ---- Selector de curso (recordado entre páginas con localStorage) ----
(function () {
  var KEY = "curso-cuaderno-aventuras";
  var body = document.body;

  function aplica(c) {
    body.classList.remove("solo-3", "solo-4");
    if (c === "3") body.classList.add("solo-3");
    else if (c === "4") body.classList.add("solo-4");
    document.querySelectorAll("#grpCurso button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.curso === c);
    });
  }
  function guarda(c) {
    try { localStorage.setItem(KEY, c); } catch (e) {}
  }
  function lee() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  var guardado = lee();
  if (guardado) {
    aplica(guardado);
  } else if (document.querySelector(".nivel")) {
    // Solo preguntamos el curso en páginas con ejercicios por nivel.
    var w = document.getElementById("welcome");
    if (w) w.classList.add("open");
  }

  document.querySelectorAll("#welcome button[data-curso]").forEach(function (b) {
    b.addEventListener("click", function () {
      var c = b.dataset.curso;
      aplica(c); guarda(c);
      document.getElementById("welcome").classList.remove("open");
    });
  });

  document.querySelectorAll("#grpCurso button").forEach(function (b) {
    b.addEventListener("click", function () {
      var c = b.dataset.curso;
      aplica(c); guarda(c);
    });
  });
})();

// ---- Menú flotante (FAB) ----
(function () {
  var menu = document.getElementById("menu");
  var fab = document.getElementById("fab");
  if (!menu || !fab) return;
  fab.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("open");
  });
  document.addEventListener("click", function (e) {
    if (menu.classList.contains("open") && !menu.contains(e.target) && e.target.id !== "fab")
      menu.classList.remove("open");
  });

  var imprimir = document.getElementById("btnImprimir");
  if (imprimir) imprimir.addEventListener("click", function () {
    menu.classList.remove("open"); window.print();
  });
})();

// ---- Acerca de (funciona con o sin menú: portada del dominio incluida) ----
(function () {
  var btn = document.getElementById("btnAbout");
  var about = document.getElementById("about");
  if (!btn || !about) return;
  btn.addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu) menu.classList.remove("open");
    about.classList.add("open");
  });
})();

// ---- Parent gate: acceso a la guía de padres ----
// Los enlaces con data-guia="/ruta/" piden el año de nacimiento SIEMPRE (no se recuerda).
(function () {
  var EDAD_MINIMA = 18;
  var gate = document.getElementById("gate");
  var destino = null;

  document.querySelectorAll("[data-guia]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var menu = document.getElementById("menu");
      if (menu) menu.classList.remove("open");
      destino = el.getAttribute("data-guia");
      if (gate) {
        gate.classList.add("open");
        var inp = document.getElementById("gateInput");
        if (inp) { inp.value = ""; inp.focus(); }
        var err = document.getElementById("gateError");
        if (err) err.textContent = "";
      }
    });
  });

  if (gate) {
    var form = document.getElementById("gateForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = (document.getElementById("gateInput").value || "").trim();
      var nacimiento = parseInt(val, 10);
      var ahora = new Date().getFullYear();
      var edad = ahora - nacimiento;
      var valido = /^\d{4}$/.test(val) && nacimiento <= ahora && edad >= EDAD_MINIMA && edad <= 120;
      if (valido) {
        gate.classList.remove("open");
        if (destino) window.location.href = destino;
      } else {
        document.getElementById("gateError").textContent = "Esta zona es solo para adultos. Pide a un padre o una madre que entre.";
      }
    });
  }
})();

// ---- Cerrar ventanas ----
(function () {
  document.querySelectorAll("[data-close]").forEach(function (b) {
    b.addEventListener("click", function () {
      b.closest(".backdrop").classList.remove("open");
    });
  });
  // Cerrar tocando el fondo (excepto el de bienvenida, que obliga a elegir curso).
  ["about", "gate"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", function (e) {
      if (e.target.id === id) this.classList.remove("open");
    });
  });
})();
