import Layout from '../components/layout';
import { datingData, datingIds, getAllIds, getData } from '../lib/data';

// define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// - this name is defined by next.js
export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
  const moreData = await datingData(params.id);
  return {
    props: {
      itemData,
      moreData,
    }
  };
}

// define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// - this name is defined by next.js
// export async function getStaticPaths() {
//   const paths = getAllIds();
//   return {
//     paths,
//     fallback: false
//   };
// }

export async function getStaticPaths() {
  const paths = getAllIds();
  const newPaths = datingIds();
  return {
    paths: [
      ...newPaths,
      ...paths,
    ],
    fallback: false,
  };
}



// export our dynamically routed page component Entry
export default function Entry( { itemData, moreData } ) {
  if (itemData.id) {
    // console.log(itemData.id)
  return (
    <Layout>
      <article className="card col-3">
        <div className="card-header">
            {itemData.name}
            <span className="ms-5">{itemData.health}</span>
        </div>
        <img className="card-img-top img-fluid maxHeight" src={(`${itemData.photo}`)} alt = {(`${itemData.photoAlt}`)} />
        <div className="card-body">
          <h4 className="card-title">{itemData.moveOne}</h4>
          <h4 className>{itemData.moveTwo}</h4>
          <h6 className="card-subtitle mb-2 text-body-secondary">Weak to: {itemData.weakness}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">Resistant to: {itemData.resistance}</h6>
          <a href="#" className="card-link">{itemData.email}</a>
        </div>
      </article>
    </Layout>
);}
else if (moreData.id){
  return (
    <Layout>
      <article className="card col-3">
        <div className="card-header text-center">
            {moreData.name}
            <span className="ms-5">{moreData.age}</span>
        </div>
        <img className="card-img-top img-fluid maxHeight" src={(`${moreData.photo}`)} alt = {(`${moreData.photoAlt}`)} />
        <div className="card-body">
          <h5 className>{moreData.description}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">My Hobbies: {moreData.hobbie}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{moreData.phone}</h6>
        </div>
      </article>
    </Layout>
  );
}
}





























// export our dynamically routed page component Entry
// export default function Entry( { itemData, moreData } ) {
//   return (
//     <Layout>
//       <article className="card col-3">
//         <div className="card-header">
//             {itemData.name}
//             <span className="ms-5">{itemData.health}</span>
//         </div>
//         <img className="card-img-top img-fluid maxHeight" src={(`${itemData.photo}`)} alt = {(`${itemData.photoAlt}`)} />
//         <div className="card-body">
//           <h4 className="card-title">{itemData.moveOne}</h4>
//           <h4 className>{itemData.moveTwo}</h4>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Weak to: {itemData.weakness}</h6>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Resistant to: {itemData.resistance}</h6>
//           <a href="#" className="card-link">{itemData.email}</a>
//         </div>
//       </article>

//       <article className="card col-3">
//         <div className="card-header text-center">
//             {moreData.name}
//             <span className="ms-5">{moreData.age}</span>
//         </div>
//         <img className="card-img-top img-fluid maxHeight" src={(`${moreData.photo}`)} alt = {(`${moreData.photoAlt}`)} />
//         <div className="card-body">
//           <h5 className>{moreData.description}</h5>
//           <h6 className="card-subtitle mb-2 text-body-secondary">My Hobbies: {moreData.hobbie}</h6>
//           <h6 className="card-subtitle mb-2 text-body-secondary">{moreData.phone}</h6>

//         </div>
//       </article>
//     </Layout>
//   );
// }













// DATING.JSON FILE INFO CONTENTS nfijdfbniwerbfwierfwerfirefgiwuerfeiwbfwbeifbrewibfewbfeiwf
// import Layout from '../../components/layout';
// import { datingData, datingIds } from '../../lib/data';

// // define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// // - this name is defined by next.js
// export async function getStaticProps( { params } ) {
//   const moreData = await datingData(params.id);
//   return {
//     props: {
//       moreData
//     }
//   };
// }

// // define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// // - this name is defined by next.js
// export async function getStaticPaths() {
//   const paths = datingIds();
//   return {
//     paths,
//     fallback: false
//   };
// }



// // export our dynamically routed page component Entry
// export default function Entry( { moreData } ) {
//   return (
//     <Layout>
//       <article className="card col-3">
//         <div className="card-header">
//             {moreData.name}
//             <span className="ms-5">{moreData.health}</span>
//         </div>
//         <img className="card-img-top img-fluid maxHeight" src={(`${moreData.photo}`)} alt = {(`${moreData.photoAlt}`)} />
//         <div className="card-body">
//           <h4 className="card-title">{moreData.moveOne}</h4>
//           <h4 className>{moreData.moveTwo}</h4>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Weak to: {moreData.weakness}</h6>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Resistant to: {moreData.resistance}</h6>
//           <a href="#" className="card-link">{moreData.email}</a>
//         </div>
//       </article>
//     </Layout>
//   );
// }
















// import Layout from '../components/layout';
// import { datingIds, datingData} from '../lib/data';

// // define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// // - this name is defined by next.js
// export async function getStaticProps( { params } ) {
//   const newItemData = await datingData(params.num);
//   return {
//     props: {
//       newItemData,
//     }
//   };
// }

// // define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// // - this name is defined by next.js
// export async function getStaticPaths() {
//   const paths = datingIds();
//   return {
//     paths,
//     fallback: false
//   };
// }


// // export our dynamically routed page component Entry
// export default function Entry( { newItemData } ) {
//   return (
//     <Layout>
//       <article className="card col-3">
//         <div className="card-header">
//             {newItemData.name}
//             <span className="ms-5">{itemData.health}</span>
//         </div>
//         <img className="card-img-top img-fluid maxHeight" src={(`${itemData.photo}`)} alt = {(`${itemData.photoAlt}`)} />
//         <div className="card-body">
//           <h4 className="card-title">{itemData.moveOne}</h4>
//           <h4 className>{itemData.moveTwo}</h4>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Weak to: {itemData.weakness}</h6>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Resistant to: {itemData.resistance}</h6>
//           <a href="#" className="card-link">{itemData.email}</a>
//         </div>
//       </article>
//     </Layout>
//   );
// }




































// import Layout from '../components/layout';
// import { getAllIds, getData, datingData } from '../lib/data';

// // define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// // - this name is defined by next.js
// export async function getStaticProps( { params } ) {
//   const newItemData = await datingData(params.id);
//   const itemData = await getData(params.id);
//   return {
//     props: {
//       itemData,
//       newItemData
//     }
//   };
// }

// // define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// // - this name is defined by next.js
// export async function getStaticPaths() {
//   const paths = getAllIds();
//   return {
//     paths,
//     fallback: false
//   };
// }




// // export our dynamically routed page component Entry
// export default function Entry( { itemData, newItemData } ) {
//   return (
//     <Layout>
//       <article className="card col-3">
//         <div className="card-header">
//             {itemData.name}
//             <span className="ms-5">{itemData.health}</span>
//         </div>
//         <img className="card-img-top img-fluid maxHeight" src={(`${itemData.photo}`)} alt = {(`${itemData.photoAlt}`)} />
//         <div className="card-body">
//           <h4 className="card-title">{itemData.moveOne}</h4>
//           <h4 className>{itemData.moveTwo}</h4>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Weak to: {itemData.weakness}</h6>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Resistant to: {itemData.resistance}</h6>
//           <a href="#" className="card-link">{itemData.email}</a>
//         </div>
//       </article>
//     </Layout>
//   );
// }
















































// import Layout from '../components/layout';
// import { getAllIds, getData, } from '../lib/data';

// // define a getStaticProps() function to have next.js retrieve data to use for the dynamic page
// // - this name is defined by next.js
// export async function getStaticProps( { params } ) {
//   const itemData = await getData(params.id);
//   return {
//     props: {
//       itemData
//     }
//   };
// }

// // define a getStaticPaths() function to tell next.js all valid URLs: 1,2,3,4 
// // - this name is defined by next.js
// export async function getStaticPaths() {
//   const paths = getAllIds();
//   return {
//     paths,
//     fallback: false
//   };
// }

// // export our dynamically routed page component Entry
// export default function Entry( { itemData } ) {
//   return (
//     <Layout>
//       <article className="card col-3">
//         <div className="card-header">
//             {itemData.name}
//             <span className="ms-5">{itemData.health}</span>
//         </div>
//         <img className="card-img-top img-fluid maxHeight" src={(`${itemData.photo}`)} alt = {(`${itemData.photoAlt}`)} />
//         <div className="card-body">
//           <h4 className="card-title">{itemData.moveOne}</h4>
//           <h4 className>{itemData.moveTwo}</h4>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Weak to: {itemData.weakness}</h6>
//           <h6 className="card-subtitle mb-2 text-body-secondary">Resistant to: {itemData.resistance}</h6>
//           <a href="#" className="card-link">{itemData.email}</a>
//         </div>
//       </article>
//     </Layout>
//   );
// }