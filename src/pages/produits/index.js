import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'
import Link from "next/link";


export default function HomePage(){
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/produits.json'); // Adjust the path accordingly
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

 
    return(
        <>
        <main className={`${styles.main}`}>
            <div>
                <h1>Produits</h1>
                <ul>
                {products.map((product) => (
                    <li key={product.id}>
                      <Link href={
              {
                pathname: "/produits/[Idproduit]",
                query: {
                  Idproduit: product.id
                }
              }
            }>
                      {product.name} - ${product.price}
                      </Link>
                    </li>
                ))}
                </ul>
            </div>
        </main>

        </>
    )
}