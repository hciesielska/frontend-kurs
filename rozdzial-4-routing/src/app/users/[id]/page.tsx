import { notFound } from 'next/navigation';

interface UserDetailPageProps {
  params: {
    id: string;
  };
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { id } = params;

  // Przykładowe ID użytkowników, które akceptujemy 
  const validIds = ["1", "2", "3"];

  if (!validIds.includes(id)) {
    notFound(); 
  }

  return (
    <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '16px', border: '1px solid #fecdd3', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#9f1239', marginBottom: '1rem' }}>
        Profil użytkownika o ID: {id}
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.2rem' }}>
        Witamy na podstronie profilu użytkownika!
      </p>
    </div>
  );
}