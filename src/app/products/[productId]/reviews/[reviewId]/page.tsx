export default function ReviewDetails({params} : {params: {
    productId: string,
    reviewId: string
}}){
    return (
        <>
            <h4>Details</h4>
            <p>Review {params.reviewId}</p>
            <p>Product {params.productId}</p>
        </>
    )
}