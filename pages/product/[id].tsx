import { useRouter } from "next/router"
import Container from "../../Layout/Container"
const ProductDetail = () => {
  
  const {
    query: {id},
  } = useRouter()
  return (
    <Container>
      <h2>Hello {id}</h2>
    </Container>
  )
}

export default ProductDetail