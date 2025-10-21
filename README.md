# 🕹️ Flappy Bird - Phaser.js Edition

> Proyecto desarrollado en **JavaScript** usando el framework **Phaser 3**  
> Inspirado en el clásico juego *Flappy Bird*, con detección de colisiones, física arcade y animaciones básicas.

---

## 📖 Descripción General
Este proyecto recrea el juego **Flappy Bird**, donde el jugador controla un ave que debe volar evitando chocar con columnas o caer al suelo.  
Fue desarrollado con **Phaser.js**, un framework para crear videojuegos 2D en el navegador, utilizando el motor de física **Arcade**.

El objetivo es aplicar los conceptos de:
- **Ciclo de vida de un juego (preload → create → update)**
- **Simulación física 2D**
- **Gestión de sprites y colisiones**
- **Entrada del teclado**

---

## ⚙️ Tecnologías Utilizadas
- 🧠 **Lenguaje:** JavaScript (ES6)
- 🎮 **Framework:** Phaser 3
- ⚡ **Motor de Física:** Arcade Physics
- 🖼️ **Recursos gráficos:** PNG y spritesheet del ave
- 🌐 **Ejecución:** Navegador web (Chrome, Edge, Opera, Firefox)

---

## 🧩 Estructura del Proyecto
📁 flappy-bird/
│
├── 📁 assets/
│   ├── background.png
│   ├── road.png
│   ├── column.png
│   └── bird.png
│
├── 📄 index.html
├── 📄 main.js       ← Contiene toda la lógica del juego
└── 📄 README.md

---

## 🧠 Lógica del Juego

### ⚙️ 1. Configuración inicial
El objeto `config` define los parámetros del juego: tamaño de ventana, motor de física y escenas.

```js
let config = {
  renderer: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: { gravity: { y: 300 }, debug: false },
  },
  scene: { preload, create, update },
};
```

### 🖼️ 2. preload()
Se cargan los recursos gráficos necesarios:
- Fondo (`background.png`)
- Suelo (`road.png`)
- Columnas (`column.png`)
- Spritesheet del pájaro (`bird.png`)

### 🎨 3. create()
- Crea los elementos visuales: fondo, suelo, columnas y pájaro.  
- Configura la física (colisiones y rebote).  
- Agrega las teclas de control (`cursors`).  
- Muestra las instrucciones iniciales.

### 🚀 4. update()
- Detecta las teclas presionadas (↑ y Espacio).  
- Controla la gravedad y el movimiento del pájaro.  
- Gestiona el inicio, choque y victoria.  
- Actualiza el texto con mensajes dinámicos.

---

## 🎮 Controles del Jugador
| Acción | Tecla | Descripción |
|--------|--------|--------------|
| 🟢 Iniciar juego | **Espacio** | Comienza la partida |
| ⬆️ Volar / Saltar | **Flecha ↑** | Hace que el pájaro ascienda |
| 🔁 Reiniciar | *Recargar página* | Reinicia el juego |

---

## 🧱 Colisiones y Física
- 🪶 **Pájaro - Suelo:** el ave aterriza (fin del juego).  
- 🧱 **Pájaro - Columnas:** colisión detectada, el juego termina.  
- 🏁 **Límite derecho (x > 750):** muestra el mensaje de victoria.

---

## 💬 Mensajes en Pantalla
| Situación | Mensaje |
|------------|----------|
| Inicio | `Press space bar to start` |
| Juego en progreso | `Instructions: Press "^" to stay upright...` |
| Choque | `Oh no! You crashed!` |
| Victoria | `Congrats! You won!` |

---

## 🧪 Cómo Ejecutar el Proyecto

### ✅ Opción 1 — Abrir localmente
1. Descarga o clona este repositorio.  
2. Asegúrate de tener los archivos en la estructura mostrada.  
3. Abre `index.html` en tu navegador.  

### 🌍 Opción 2 — Servidor local (recomendado)
Ejecuta el siguiente comando en la terminal:
```bash
npx live-server
```
Esto abrirá el juego automáticamente en tu navegador.

---

## 🚀 Mejoras Futuras
- Añadir **sistema de puntuación**.  
- Generar columnas aleatorias para mayor dificultad.  
- Incluir **sonidos** de salto, choque y victoria.  
- Implementar **pantalla de reinicio**.  
- Agregar animaciones más suaves al pájaro.  

---

## 👨‍💻 Autor
**Nombre:** _[Tu Nombre]_  
**Proyecto:** Flappy Bird con Phaser.js  
**Materia:** _[Nombre de la asignatura o práctica]_  
**Fecha:** Octubre 2025  

---

⭐ _Desarrollado con pasión por los videojuegos y el aprendizaje interactivo_ 🎮
