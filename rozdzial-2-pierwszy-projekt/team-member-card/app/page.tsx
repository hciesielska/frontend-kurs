import TeamMemberCard from './TeamMemberCard';
import Script from  'next/script';

export default function Page() {
  const teamMembers = [
    {
      name: 'Hanna Ciesielska',
      role: 'Studentka Politechniki Wrocławskiej',
      bio: 'Jestem studentką informatyki. Biorę udział w wakacyjnym wyzwaniu Solvro.',
      skills: ['TypeScript', 'React', 'Node.js']
    }
  ];

  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-rose-50/50">
      {teamMembers.map((member, index) => (
        <TeamMemberCard 
          key={index}
          name={member.name}
          role={member.role}
          bio={member.bio}
          
          skills={member.skills}
        />
      ))}
      <Script id="alert-script">
        {`
          alert('Witaj w zadaniu z kursu solvro!');
        `}
      </Script>
    </main>
  );
}
