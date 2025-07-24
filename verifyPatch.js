import fetch from 'node-fetch';

async function verifyPatch() {
  try {
    const response = await fetch('http://localhost:3000/api/incidents/13/resolve', {
      method: 'PATCH',
    });
    const data = await response.json();
    console.log('Updated Incident:', data);
  } catch (error) {
    console.error('Error updating incident:', error);
  }
}

verifyPatch(); 