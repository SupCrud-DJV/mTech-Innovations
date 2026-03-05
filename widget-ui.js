// On form submit inside your widget UI page
async function submitTicket(formData) {
  const params = new URLSearchParams(window.location.search);
  const workspaceKey = params.get('workspaceKey');

  await fetch('https://your-api.com/api/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      workspaceKey,          // identifies the workspace
      email: formData.email,
      subject: formData.subject,
      description: formData.description,
      type: formData.type,   // P | Q | R | S
    })
  });
}

