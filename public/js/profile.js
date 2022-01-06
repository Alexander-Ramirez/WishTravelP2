const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#city-name').value.trim();
  const needed_funding = document.querySelector('#city-funding').value.trim();
  const description = document.querySelector('#city-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/cities`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create city');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/cities/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete city');
    }
  }
};

document
  .querySelector('.new-city-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.city-list')
  .addEventListener('click', delButtonHandler);
