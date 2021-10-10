import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { A } from 'hookrouter'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: auto;
  margin-top: 24px;
`

export default function UserTable() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const result = await axios.get('http://localhost:3000/users')
      setUsers(result.data)
    }
    fetchUsers()
  }, [])

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Nome</TableCell>
            <TableCell align='right'>Vaga</TableCell>
            <TableCell align='right'>Data de Nascimento</TableCell>
            <TableCell align='right'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell component='th' scope='row'>
                <A href={`/info-user/${user.id}`}>{user.id}</A>
              </TableCell>
              <TableCell align='right'>{user.name}</TableCell>
              <TableCell align='right'>{user.vacancy}</TableCell>
              <TableCell align='right'>{user.birthday}</TableCell>
              <TableCell align='right'>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}
