import Container from "../../components/shared/Container";
import cat1 from "../../assets/cat-1.jpg";
import cat2 from "../../assets/cat-2.jpg";
import cat3 from "../../assets/cat-3.jpg";
import cat4 from "../../assets/cat-4.jpg";
import cat5 from "../../assets/cat-5.jpg";
import cat6 from "../../assets/cat-6.jpg";

import CategoryCard from "../../components/shared/CategoryCard";

const Category = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <CategoryCard img={cat1} title="T-Shirts"></CategoryCard>
          <CategoryCard img={cat2} title="T-Shirts"></CategoryCard>
          <CategoryCard img={cat3} title="T-Shirts"></CategoryCard>
          <CategoryCard img={cat4} title="T-Shirts"></CategoryCard>
          <CategoryCard img={cat5} title="T-Shirts"></CategoryCard>
          <CategoryCard img={cat6} title="T-Shirts"></CategoryCard>
        </div>
      </Container>
    </>
  );
};

export default Category;
