type Props = {
  params: {
    slug: string;
  };
};
const Page = ({ params }: Props) => {
  return (
    <div>
      <h1>Page</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
};

export default Page;
