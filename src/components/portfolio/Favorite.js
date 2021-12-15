import React, { useEffect, useState } from "react"

export const Favorite = () => {
    const [favorites, getFavorites] = useState([])
    const [user, setUser] = useState()
    const currentUser = parseInt(localStorage.getItem("nterior_user"))

    const fetchFavorites = () => {
        return fetch(`http://localhost:8088/favorites?_expand=user&_expand=post`)
            .then(res => res.json())
            .then((favorite) => {
                getFavorites(favorite)
            })
    }

    useEffect(
        () => {
            fetchFavorites()
        },
        []
    )

    const deleteFavorite = (id) => {
        fetch(`http://localhost:8088/favorites/${id}`, {
            method: "DELETE"
        })
            .then(
                () => {
                    fetchFavorites()
                }
            )
    }

    const getCurrentUser = () => {
        return fetch(`http://localhost:8088/users?id=${currentUser}`)
            .then(res => res.json())
            .then(response => {
                setUser(response[0])
            })
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    return (
        <>
            <div className="container">{favorites.map(
                (favoriteObj) => {
                    if (user?.id === favoriteObj.userId) {
                        return <><img src={favoriteObj.post?.imageURL} width="200" height="auto" alt="" />
                            <button onClick={() => { deleteFavorite(favoriteObj.id) }}>Delete</button></>
                    }

                }
            )}</div>
        </>
    )

}