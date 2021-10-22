---
title: CONTACT
hide_title: false
sections:
  - type: section_form
    section_id: contact-form
    content: >-
      ¡Gracias por visitar nuestra página web! Si eres fan o deseas comunicarte con nosotros, envíanos un correo electrónico:
      
      [sebimor.oficial@gmail.com](mailto:sebimor.oficial@gmail.com)<br><br>
      
      ¡Recuerda seguirnos en tus redes sociales y plataforma de música preferida! Si te gusta lo que hacemos, no dudes en escribirnos un comentario.<br><br>Con mucho amor siempre.<br><br>
      **-Sebimor**
    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - type: form_field
        input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - type: form_field
        input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - type: form_field
        input_type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
      - type: form_field
        input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - type: form_field
        input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
    submit_label: Send Message
seo:
  type: stackbit_page_meta
  title: SEBIMOR
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
template: advanced
---
