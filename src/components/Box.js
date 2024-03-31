import React from 'react'
import { useCount } from '../store'

const Box = () => {
	const{count, id, password} = useCount()
  return (
	<div className='box'>
		<div>Box count: {count}</div>
		<div>id: {id}</div>
		<div>password: {password}</div>
	</div>
  )
}

export default Box