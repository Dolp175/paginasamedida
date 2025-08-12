const forms = document.querySelectorAll<HTMLFormElement>('form[data-track="lead"]');
forms.forEach((form) => {
  form.addEventListener('submit', () => {
    const formId = form.id || form.getAttribute('name') || 'form';
    (window as any).dataLayer?.push({
      event: 'generate_lead',
      form_id: formId,
      page_location: location.pathname,
    });
  });
});
