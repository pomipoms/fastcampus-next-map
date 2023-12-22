import { InferGetServerSidePropsType, GetServerSideProps } from 'next';

 
export const getServerSideProps: GetServerSideProps <{
    number: number;
}> = async () => {
    const num = await fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new");
    const number = await num.json();
    return { props: { number }};
};
 
export default function Page({
  number,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return  <div>
  <h1>server side props</h1>
  <h2>number : {number} </h2>
</div>
}