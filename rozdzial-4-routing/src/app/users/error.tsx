'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h2 style={{ color: '#9f1239', marginBottom: '1rem', fontSize: '1.8rem' }}>Oj, coś poszło nie tak</h2>
      <p style={{ marginBottom: '1.5rem', color: '#4b5563' }}>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{ 
          padding: '0.75rem 1.5rem', 
          background: '#e11d48', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(225, 29, 72, 0.2)'
        }}
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
