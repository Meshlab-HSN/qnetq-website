import React from 'react';

const TeamMember = ({ name, position, email }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px',
      marginBottom: '10px',  // Slightly reduced bottom margin
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      backgroundColor: '#fbfbfb'
    }}>
      <h4 style={{ margin: '0 0 2px 0', fontSize: '1.02rem', color: '#333' }}>{name}</h4>
      <p style={{ margin: '0', fontStyle: 'italic', color: '#666', fontSize: '0.95rem' }}>{position}</p>
      <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem' }}>📧 {email}</p>
    </div>
  );
};

export default TeamMember;