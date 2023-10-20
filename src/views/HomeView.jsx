import { ResultProducts } from "../components/Products";
import { Reviews } from "../components/Reviews";
import { Location } from "../components/Location";
import { Promotions } from "../components/Promotions";
import { Footer } from "../components/Footer";

export function HomeView ( ){
    return (
        <div>
            <Promotions />
            <div className="w3-row w3-light-gray">
                <h1 className="w3-center">Productos</h1>
                <div className="w3-content">
                    <ResultProducts />
                </div>
            </div>
            <Reviews />
            <Location />
            <Footer />
        </div>
    )
}