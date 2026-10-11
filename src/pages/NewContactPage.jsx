import { ArrowLeft, Check, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useChats from '../hooks/useChats.js'

const contactColors = ['#6f5bd3', '#d6678b', '#d58a42', '#2d8d96', '#4a78c2', '#168d68']

function NewContactPage() {
  const navigate = useNavigate()
  const { addContact } = useChats()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    color: contactColors[0],
    favorite: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (formData.name.trim().length < 3) {
      nextErrors.name = 'Ingresá un nombre de al menos 3 caracteres.'
    }

    if (!/^[+\d][\d\s-]{7,}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Ingresá un teléfono válido.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const newChatId = addContact(formData)
    navigate(`/chat?contacto=${newChatId}`)
  }

  return (
    <main className="contact-page">
      <section className="contact-card" aria-labelledby="contact-title">
        <header className="contact-card-header">
          <Link className="form-back-button" to="/chats" aria-label="Volver a conversaciones">
            <ArrowLeft size={22} aria-hidden="true" />
          </Link>
          <div className="contact-heading-mark" aria-hidden="true">
            <UserPlus size={28} />
          </div>
          <div>
            <span className="eyebrow">Contactos</span>
            <h1 id="contact-title">Nueva conversación</h1>
            <p>Agregá una persona para comenzar a intercambiar mensajes.</p>
          </div>
        </header>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="contact-name">Nombre completo</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej.: Sofía García"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="contact-phone">Teléfono</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ej.: +54 9 11 1234-5678"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
          </div>

          <fieldset className="color-fieldset">
            <legend>Color del perfil</legend>
            <div className="color-options">
              {contactColors.map((color) => (
                <label key={color} className="color-option" style={{ '--contact-color': color }}>
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={formData.color === color}
                    onChange={handleChange}
                  />
                  <span aria-label={`Elegir color ${color}`}>
                    {formData.color === color && <Check size={15} aria-hidden="true" />}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="favorite-field">
            <input
              name="favorite"
              type="checkbox"
              checked={formData.favorite}
              onChange={handleChange}
            />
            <span>
              <strong>Marcar como favorito</strong>
              <small>Aparecerá al aplicar el filtro de favoritas.</small>
            </span>
          </label>

          <div className="form-actions">
            <Link className="secondary-link" to="/chats">Cancelar</Link>
            <button className="submit-contact" type="submit">
              Crear conversación
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default NewContactPage
