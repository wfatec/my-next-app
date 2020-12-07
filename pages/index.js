import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home page</h1>
    <style jsx>{`
		  h1 {
		    font-size: 3rem;
		  }
		`}</style>
    <Link href='/blog/'>Blog</Link>
  </div>
)

export default Index