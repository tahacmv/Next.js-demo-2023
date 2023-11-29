import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'


export default function ProductDecription(){
    const router = useRouter();
    const {Idproduit} = router.query;
    const [produit, setproduit] = useState({});
    
    useEffect(() => {
        const fetchData = async (Idproduit) => {
            try {
                const response = await fetch('/data/produits.json');
                const data = await response.json();
                console.log(data);
              
                // Find the product by ID
                const product = data.find((item) => item.id === parseInt(Idproduit));

                console.log(product);
              
                // Pass data to the page via props
                setproduit(product);
            } catch (error) {
              console.error('Error fetching product data:', error);
            }
          };
    
      if(Idproduit){
        console.log(Idproduit);
        fetchData(Idproduit);
      }
    }, [Idproduit])
    
    return(
        <>
           <main className={`${styles.main}`}>
            <h1>{produit?.id} - {produit?.name} - {produit?.price} $</h1>
            </main>
        </>
    )
}