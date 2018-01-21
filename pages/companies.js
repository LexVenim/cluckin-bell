import Layout from '../components/Layout.js'
import Link from 'next/link'

const CompanyLink = (props) => (
    <li>
        <Link as={`/companies/${props.id}`} href={`/company?id=${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
  )

export default () => (
    <Layout>
        <h1>Companies</h1>
        <ul>
            <CompanyLink id="McDonalds"/>
            <CompanyLink id="KFC"/>
        </ul>
    </Layout>
)