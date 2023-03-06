import React from 'react'
import Link from 'next/link'

const ItemRepo = ({repo, handleRemoveRepo}) =>{

    const handleRemove = () =>{
        handleRemoveRepo(repo.id)
    }

    return(
        <div >
            <div>{repo.name}</div>
            <div>{repo.full_name}</div>
            <div>
                <Link href={repo.html_url} target="_blank" >
                    ver repositorio
                </Link>
            </div>
            <div onClick={handleRemove} >remover</div>
        </div>
    )
}

export default ItemRepo