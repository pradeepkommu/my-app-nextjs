export default function ProductDetails({params} : {
    params: {productId: string}})
{
    return (
        <div>
            <h4> Products Details {params.productId}</h4>
            <ol>
                <li><a href={`/products/${params.productId}/reviews/1`}>Review 1</a></li>
                <li><a href={`/products/${params.productId}/reviews/2`}>Review 2</a></li>
                <li><a href={`/products/${params.productId}/reviews/3`}>Review 3</a></li>
            </ol>
        </div>
    )
}