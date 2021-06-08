import { Helmet } from "react-helmet-async";

interface IProps {
  title: string;
}

function HelmetTitle({ title }: IProps) {
  return (
    <Helmet>
      <title>{title} | AndEnd</title>
    </Helmet>
  );
}

export default HelmetTitle;
