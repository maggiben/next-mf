import Nav from '../../components/Nav';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const ClientHeadless = dynamic(()=> import("frontend/pages/client/ClientHeadless"), {
  ssr: true,
});
const localization = await import('frontend/localization');

export default function index() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link
           href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
           rel="stylesheet"
         />
         <link
           href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
           rel="stylesheet"
         />
        <link rel="icon" href="https://www.fravega.com/static/iso_fvg@2x.png" />
      </Head>
      <Nav />
      <ClientHeadless />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input
          type="button"
          value="hello"
          style={{backgroundColor: '#5A2DB2', border: 'none', color: 'white', padding: '12px', borderRadius: '8px'}}
          onClick={async (e) => {
            const { value } = e.currentTarget
            
            alert('Hoy es: ' + localization.toLocaleDateString(new Date()));
          }}
        />
      </div>
    </>
  );
}