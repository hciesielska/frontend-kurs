import { UserProfileList } from "../../components/UserProfilesList";

export default function UsersPage() {
  return (
    <div>
      <h1 style={{ 
        fontSize: '2.2rem', 
        fontWeight: 'bold', 
        marginBottom: '2rem',
        color: '#881337',
        borderBottom: '2px solid #ffe4e6',
        paddingBottom: '0.5rem'
      }}>
        użytkownicy 
      </h1>
      <UserProfileList />
    </div>
  );
}