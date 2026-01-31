const formData = { email: '', message: '' };

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', saveValue);

function saveValue(event) {
  const name = event.target.name;
  const value = event.target.value.trim();
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  feedbackForm.elements.email.value = parsedData.email;
  feedbackForm.elements.message.value = parsedData.message;
}
feedbackForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  feedbackForm.reset();
}
