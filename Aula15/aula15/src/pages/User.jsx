import { useLocation } from 'react-router-dom';
import './User.css'
export function User() {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <p>Usuário não encontrado ou não enviado.</p>;
  }

  return (
    <div className='all'>
        <div className='header'>
            {user.username}
        </div>
        <div className='back-card'>
            <div className='card'>
                <div className='title'>Detalhes</div>
                <div className='details'>Nome: {user.name}</div>
                <div className='details'>Email: {user.email}</div>
                <div className='details'>Telefone: {user.phone}</div>
                <div className='details'>Site: <a href={user.website}>{user.website}</a> </div>
                
            </div>
        </div>
      {/* etc... */}
    </div>
  );
}