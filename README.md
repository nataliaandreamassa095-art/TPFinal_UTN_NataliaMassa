# Nexo Chat · TP Final Frontend

**Alumna:** Natalia Andrea Massa  
**Curso:** Programador Web Inicial Front End Developer - Turno Mañana

## Sobre el proyecto

Nexo Chat es una aplicación de mensajería inspirada en el flujo de WhatsApp. Permite recorrer conversaciones, buscar y filtrar chats, enviar mensajes y agregar contactos mediante un formulario validado.

El proyecto fue realizado con React y trabaja enteramente en el navegador. Los contactos, mensajes y preferencias se guardan en `localStorage`, por lo que se mantienen al recargar la página sin requerir un backend.

## Funcionalidades

- Lista de conversaciones con mensajes y contadores de pendientes.
- Búsqueda por contacto o contenido del último mensaje.
- Filtros de conversaciones no leídas y favoritas.
- Apertura de chats mediante el parámetro de búsqueda `contacto`.
- Envío de mensajes con actualización inmediata del estado global.
- Formulario para crear contactos, con validaciones y elección de color.
- Modo claro y oscuro persistente.
- Página de error para rutas inexistentes.
- Diseño responsive entre 320 px y 2000 px.
- Controles accesibles, contraste legible, foco visible y soporte para reducción de movimiento.

## Tecnologías y librerías

- React
- React DOM
- React Router DOM
- Lucide React
- Vite
- ESLint

## Requisitos aplicados

| Requisito | Implementación |
| --- | --- |
| React y componentes | Componentes separados para navegación, chats, mensajes, avatares y formularios |
| Estados | Búsqueda, filtros, formulario, preferencias y conversaciones |
| Contextos | `ChatContext` y `PreferencesContext` |
| React Router | Rutas `/chats`, `/chat` y `/contacts/new` |
| Parámetros de búsqueda | `/chat?contacto=equipo-frontend` mediante `useSearchParams` |
| Formulario | Alta de contactos con campos controlados y validación |
| Custom hooks | `useChats`, `usePreferences`, `useLocalStorage` y `useChatSearch` |
| Responsive | Adaptación de navegación, listado, chat y formulario para móvil y escritorio |

## Ejecución local

Se requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Luego se abre la dirección que informa Vite, normalmente `http://localhost:5173`.

Para comprobar la versión de producción:

```bash
npm run lint
npm run build
npm run preview
```

## Decisiones y dificultades

El principal desafío fue adaptar una interfaz de dos paneles a pantallas pequeñas sin perder claridad. En escritorio se muestran la lista y el chat al mismo tiempo; en móvil cada sección ocupa la pantalla completa y se incorpora un botón para volver.

También fue necesario centralizar los mensajes y contactos para que distintas páginas pudieran modificar la misma información. Esto se resolvió mediante Context y hooks propios, manteniendo la lógica fuera de los componentes visuales.

El proyecto no utiliza una API ni una base de datos: la persistencia con `localStorage` responde al alcance frontend de esta entrega.

## Publicación

El sitio está preparado para alojarse en:

`https://tpfinal.andreamassa.com.ar`

Para la etapa de infraestructura y publicación se contó con colaboración técnica externa en la configuración de la VPS, Nginx, DNS y certificado HTTPS. El subdominio pertenece al dominio personal `andreamassa.com.ar`.
