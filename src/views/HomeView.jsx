import { ResultProducts } from "../components/Products"

export function HomeView ( ){
    return (
        <div className="w3-row w3-light-gray">
            <h1 className="w3-center">Productos</h1>
            <div className="w3-content">
                <ResultProducts />
            </div>
        </div>
    )
}