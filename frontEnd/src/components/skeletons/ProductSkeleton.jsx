import ContentLoader from "react-content-loader"

const ProductSkeleton = () => {
 
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {Array(6).fill(0).map((_,index) => (
        <ContentLoader
        key={index}
          speed={2}
          width={250}
          height={250}
          viewBox="0 0 190 300"
          backgroundColor="#bababa"
          foregroundColor="#000000"
        >
          <rect x="26" y="-41" rx="0" ry="0" width="250" height="200" />
          <rect x="29" y="186" rx="1" ry="1" width="185" height="7" />
          <rect x="31" y="204" rx="0" ry="0" width="78" height="4" />
          <rect x="440" y="174" rx="0" ry="0" width="1" height="1" />
          <rect x="27" y="219" rx="11" ry="11" width="105" height="24" />
          <rect x="198" y="307" rx="0" ry="0" width="83" height="0" />
        </ContentLoader>
      ))}
    </div>

  )
}

export default ProductSkeleton
