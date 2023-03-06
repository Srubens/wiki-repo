import React, { useState } from 'react'
import { Button, Input, ItemRepo } from '@/components/index'
import {api} from '@/services/api'

const Index = () =>{

    const [currentRepo, setCurrentRepo] = useState('')
    const [repos, setRepos] = useState([])

    const handleSearchRepo = async() =>{
        const {data} = await api.get(`repos/${currentRepo}`)
        console.log(data)
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
    }

    const handleRemoveRepo = (id) =>{
        let newRepo = repos.filter((repo) => repo.id !== id)
        return setRepos(newRepo)
    }


    return(
        <div>
            <div>imagem do github</div>
            
            <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
            <Button onClick={handleSearchRepo} />
            {
                repos.map((repo, index) => (
                    <ItemRepo key={index} handleRemoveRepo={handleRemoveRepo} repo={repo} />
                ))
            }

        </div>
    )
}

export default Index