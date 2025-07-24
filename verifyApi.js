import fetch from 'node-fetch';

async function verifyApi() {
  try {
    const response = await fetch('http://localhost:3000/api/incidents?resolved=false');
    const data = await response.json();
    console.log('Unresolved Incidents:', data);
  } catch (error) {
    console.error('Error fetching incidents:', error);
  }
}

verifyApi(); 