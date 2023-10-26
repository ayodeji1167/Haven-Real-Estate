import ExploreHaven from '../components/AllProperties/ExploreHaven';
import Categories from '../components/AllProperties/Categories';
import DidNotFind from '../components/AllProperties/DidNotFind';

export default function AllProperties() {
  return (
    <div>
      <ExploreHaven />
      <Categories />
      <DidNotFind />
    </div>
  );
}
