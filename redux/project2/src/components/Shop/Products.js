import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCT = [{
    id: 1,
    title: 'test',
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: 2,
    title: 'test2',
    price: 8,
    description: 'This is a second product - amazing!'
  }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>

    </section>
  );
};

export default Products;
