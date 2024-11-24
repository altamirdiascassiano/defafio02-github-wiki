import gitLogo from '../assets/github-black.png';
import {Container} from './styles';
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'
import Button from '../components/Button'
import { useState } from 'react';
import { api } from '../services/api';


function App() {
  const [currentRepo, setCurrentRepo]= useState('');
  const [repos, setRepos]= useState([]);

  const handleSearchRepo= async () =>{
    const {data} = await api.get(`repos/${currentRepo}`);

    if(data.id){
      const isExist= repos.find(r=>r.id === data.id);
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
      alert('Repositório já adicionado na Wiki.')
      return;
    }
    alert('Repositório não encontrado.')
  } 

  const handleRemove = (id) =>{
    // Filtra o array de repositórios, removendo o item com o ID correspondente
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id));
    console.log(`Removido o repositório com ID: ${id}`);
  }

  return (
    <Container>
        <img src={gitLogo} width={72} height={72}/>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemove}/>)}
    </Container>
  );
}

export default App;