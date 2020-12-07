import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MyLink = ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  console.log('router.pathname: ', router.pathname)
  console.log('href: ', href)
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default MyLink