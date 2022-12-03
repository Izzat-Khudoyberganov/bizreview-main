import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Container from "../../Layout/Container";


export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://635a578638725a1746c39676.mockapi.io/bizreview/api/v1/categories`
  );
  const data = await res.json();

  const paths = data.map((post: { id: any }) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({params}:any) => {
  const res = await fetch(`https://635a578638725a1746c39676.mockapi.io/bizreview/api/v1/categories/${params.id}`)
  const post = await res.json()
  return { props: { post } }
};
const ProductDetail = ({post}:any) => {
  const {
    query: { id },
  } = useRouter();
  console.log(post)
  return (
    <Container>
      <h2>Hello {id}</h2>
    </Container>
  );
};

export default ProductDetail;
