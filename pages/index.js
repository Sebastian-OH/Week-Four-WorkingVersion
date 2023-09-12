import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList, datingSortedList  } from '../lib/data';






// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = getSortedList();
  const moreData = datingSortedList();
  return {
    props: { 
      allData,
      moreData
     }, 
  };
}

// export our home page component Home
export default function Home( { allData, moreData } ) {
  return (
    <Layout home>
      <h1 className='text-center'>Pokemon Cards</h1>
      <div className="list-group">
        {allData.map(
            ({id, name}) => (
              <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
      <h1 className='text-center'>Dating Profiles</h1>
      <div className="list-group">
        {moreData.map(
            ({id, name}) => (
              <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
    </Layout>
  );
}

