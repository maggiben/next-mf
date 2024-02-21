import Nav from '../../components/Nav';
import dynamic from 'next/dynamic';
const Search = dynamic(()=> import("frontend/pages/search/SearchHeadless"), {
  ssr: false,
});

export default function index() {
  return (
    <>
      <Nav />
      <Search />
    </>
  );
}