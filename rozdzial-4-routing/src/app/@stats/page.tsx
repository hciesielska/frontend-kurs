export default function StatsSlot() {
  return (
    <div style={{ 
      background: '#fff1f2', 
      padding: '1.5rem', 


      borderRadius: '12px', 
      border: '2px dashed #fda4af',
      marginTop: '2rem'
    }}>
      <h3 style={{ color: '#9f1239', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
         Statystyki użytkowników (Parallel Route)
      </h3>
      
      <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>
        Aktywni użytkownicy na stronie: <b>3</b> 
      </p>
      <p style={{ color: '#4b5563' }}>
        Statystyka miłośników pizzy: <b>2 na 3 użytkowników uwielbia pizzę</b> 
      </p>
    </div>
  );
}