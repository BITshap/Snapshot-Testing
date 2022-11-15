import Card from 'react-bootstrap/Card'
import React, { useEffect, useState } from 'react';


export default function UserCard() {
  const [gitHubName, setGitHubName] = useState('')
  const [gitHubIMG, setGitHubIMG] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/BITshap')
    .then(res => res.json())
    .then(data => {
        setGitHubName(data.name)
        setGitHubIMG(data.avatar_url)
    })
}, [])

    return (
    <Card style={{ }}>
    <Card.Img variant="top" src={gitHubIMG} />
    <Card.Body>
      <Card.Title>{gitHubName}</Card.Title>
      <Card.Text>
        Hello! This is Nick Shapoff, a software developer making cool things for others!
      </Card.Text>
    </Card.Body>
  </Card>
    )
}




