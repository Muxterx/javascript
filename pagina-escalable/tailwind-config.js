// Configuración de Tailwind (misma que estaba inline)

// Asigna el objeto de configuración a Tailwind
tailwind.config = {
  // Activa el modo oscuro por clase (class="dark")
  darkMode: "class",

  // Configuración del tema
  theme: {
    // Extiende el tema por defecto
    extend: {
      // Colores personalizados
      colors: {
        // Color primario
        primary: "#137fec",
        // Fondo claro
        "background-light": "#f6f7f8",
        // Fondo oscuro
        "background-dark": "#101922",
      },

      // Fuentes personalizadas
      fontFamily: {
        // Fuente display
        display: ["Inter", "sans-serif"],
      },

      // Bordes redondeados personalizados
      borderRadius: {
        // Default
        DEFAULT: "0.25rem",
        // Large
        lg: "0.5rem",
        // Extra large
        xl: "0.75rem",
        // Full
        full: "9999px",
      },
    },
  },
};