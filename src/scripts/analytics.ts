const forms = document.querySelectorAll<HTMLFormElement>('form[data-track="lead"]');
forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) return;
    const formId = form.id || form.getAttribute('name') || 'form';
    // If the form submits via AJAX, trigger this push only on successful response
    (window as any).dataLayer?.push({
      event: 'generate_lead',
      form_id: formId,
      page_location: location.pathname,
    });
  });
});
