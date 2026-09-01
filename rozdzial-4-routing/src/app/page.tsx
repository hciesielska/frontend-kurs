export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#881337', marginBottom: '1rem' }}>
        Witaj w Katalogu Użytkowników! 
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>
        To jest strona główna, która demonstruje routing w Next.js. Użyj powyższej nawigacji, aby przejść do listy użytkowników i zobaczyć szczegóły każdego z nich.
      </p>
    </div>
  );
}